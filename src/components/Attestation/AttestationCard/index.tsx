/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useState } from "react";
import ReactCardFlip from "react-card-flip";
import { useBlockNumber } from "wagmi";
import { useCountdown } from "../../../hooks/Countdown";
import { usePaymentTerminalBalance } from "../../../hooks/read/PaymentTerminalBalance";
import { useProposalDeadline } from "../../../hooks/read/ProposalDeadline";
import { useProposalState } from "../../../hooks/read/ProposalState";
import { useProposalVotes } from "../../../hooks/read/ProposalVotes";
import { useQuorum } from "../../../hooks/read/Quorum";
import { useApproveScorecard } from "../../../hooks/write/useApproveScorecard";
import { useCastVote } from "../../../hooks/write/useCastVote";
import { fromWad } from "../../../utils/format/formatNumber";
import { buildColumns } from "../../../utils/table/columns";
import Button from "../../UI/Button";
import Table from "../../UI/Table";
import {
  ScoreCard,
  ScoreCardProposalState,
  ScoreCardTableData,
} from "../types";
import styles from "./AttestationCard.module.css";
import {
  calculateTotalRedemption,
  getScoreCardTableData,
  updateRedemptionAndShare,
} from "./utils";

interface AttestationCardProps {
  proposal: ScoreCard;
  tiers: any[];
}

const AttestationCard: React.FC<AttestationCardProps> = ({
  proposal,
  tiers,
}) => {
  const { data: treasuryAmount } = usePaymentTerminalBalance();

  const { data: proposalDeadline } = useProposalDeadline(
    proposal.scoreCard.proposalId
  );
  const { data: blockNumber } = useBlockNumber();

  const { data: quorum } = useQuorum(proposal.scoreCard.proposalId);

  const { data: proposalVotes } = useProposalVotes(
    proposal.scoreCard.proposalId
  );
  const {
    write: attestToScorecard,
    isLoading,
    isError,
  } = useCastVote(proposal.scoreCard.proposalId);
  const { data: proposalState } = useProposalState(
    proposal.scoreCard.proposalId
  );
  const { write: approveScorecard, isLoading: isApproveScorecardLoading } =
    useApproveScorecard(proposal.scoreCard.tierWeights);
  const [proposalEnd, setProposalEnd] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [scoreCardData, setScoreCardData] = useState<ScoreCardTableData[]>([]);
  const { timeRemaining } = useCountdown(new Date(proposalEnd));
  const quourumReached = quorum?.lte(proposalVotes?.forVotes);
  const scoreCardProposalStateValues = Object.values(ScoreCardProposalState);
  const scoreCardProposalState =
    scoreCardProposalStateValues[proposalState as any];
  const displayLockIn =
    scoreCardProposalState === "Active" ||
    scoreCardProposalState === "Succeeded";

  useEffect(() => {
    if (!(tiers && proposal && treasuryAmount)) return;

    const totalPot = parseFloat(fromWad(treasuryAmount));
    const scoreCardTableData = getScoreCardTableData(tiers, proposal);

    scoreCardTableData.forEach((obj) =>
      updateRedemptionAndShare(
        obj,
        totalPot,
        calculateTotalRedemption(scoreCardTableData)
      )
    );

    setScoreCardData(
      scoreCardTableData
        .filter((obj) => obj.Points)
        .sort((a, b) => b.Points - a.Points)
        .map(({ minted, ...rest }) => rest)
    );
  }, [tiers, proposal, treasuryAmount]);

  useEffect(() => {
    if (!proposalDeadline || !blockNumber) return;

    const blockDuration = 12;
    const currentDate = new Date();
    const proposalEnd = new Date(
      currentDate.getTime() +
        (proposalDeadline.toNumber() - blockNumber) * blockDuration * 1000
    );
    const proposalEndInMillis = proposalEnd.getTime();
    setProposalEnd(proposalEndInMillis);
  }, [proposalDeadline, blockNumber]);

  const toStringWithSuffix = (n: number): string => {
    if (n < 1000) {
      return n.toString();
    } else if (n < 1000000) {
      const num = n / 1000;
      return num.toFixed(num % 1 !== 0 ? 2 : 0) + "k";
    } else if (n < 1000000000) {
      const num = n / 1000000;
      return num.toFixed(num % 1 !== 0 ? 2 : 0) + "m";
    } else {
      const num = n / 1000000000;
      return num.toFixed(num % 1 !== 0 ? 2 : 0) + "bn";
    }
  };

  const icon = useMemo<string | undefined>(() => {
    switch (proposal.isEqual) {
      case true:
        return "/assets/defifa.svg";
      case false:
        return "/assets/scorecard-small.png";
      default:
        break;
    }
  }, [proposal.isEqual]);

  const handleClick = () => {
    setIsFlipped((prevState) => !prevState);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className={styles.container} key="front">
        <div className={styles.scoreCardExpand}>
          <Button size="medium" onClick={handleClick}>
            <div className={styles.buttonContent}>
              <img src="/icons/flip-icon.png" alt="Flip" width={27} />
              View proposal
            </div>
          </Button>
        </div>

        <div className={styles.scoreCardInfo}>
          <img src={icon} alt="Scorecard" width={proposal.isEqual ? 98 : 81} />
          <p className={styles.scoreCardTitle}>{proposal.title}</p>
          <p>State: {scoreCardProposalState}</p>

          {!quourumReached && (
            <p>
              Status:{toStringWithSuffix(proposalVotes?.forVotes.toNumber())}{" "}
              confirmations
            </p>
          )}

          <p>
            Quorum:
            {quourumReached
              ? " Reached"
              : `${toStringWithSuffix(quorum?.toNumber())} confirmations`}
          </p>
          {!quourumReached && <p>Confirmation deadline: In {timeRemaining}</p>}
          {quourumReached && scoreCardProposalState === "Active" && (
            <p>Lock in begins: In {timeRemaining}</p>
          )}

          <div className={styles.voteForm}>
            {!quourumReached && (
              <Button
                onClick={() => attestToScorecard?.()}
                disabled={isLoading}
              >
                {isLoading ? (
                  <img
                    style={{ marginTop: "5px" }}
                    src="/assets/defifa_spinner.gif"
                    alt="spinner"
                    width={35}
                  />
                ) : (
                  "Confirm"
                )}
              </Button>
            )}

            {quourumReached && displayLockIn && (
              <Button
                onClick={() => approveScorecard?.()}
                disabled={scoreCardProposalState === "Active"}
              >
                {isApproveScorecardLoading ? (
                  <img
                    style={{ marginTop: "5px" }}
                    src="/assets/defifa_spinner.gif"
                    alt="spinner"
                    width={35}
                  />
                ) : (
                  "Lock in"
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
      <div key="back" className={styles.container}>
        <div className={styles.scoreCardExpand}>
          <Button size="medium" onClick={handleClick}>
            <div className={styles.buttonContent}>
              <img src="/icons/flip-icon.png" alt="Flip" width={27} />
              View scorecard
            </div>
          </Button>
        </div>
        <div className={styles.scoreCardInfo}>
          <img src={icon} alt="Scorecard" width={proposal.isEqual ? 98 : 81} />
          <p className={styles.scoreCardTitle}>{proposal.title}</p>
          {scoreCardData.length > 0 && (
            <Table data={scoreCardData} columns={buildColumns(scoreCardData)} />
          )}
        </div>
      </div>
    </ReactCardFlip>
  );
};

export default AttestationCard;

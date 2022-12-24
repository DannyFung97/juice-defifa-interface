// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ProposalCanceled extends ethereum.Event {
  get params(): ProposalCanceled__Params {
    return new ProposalCanceled__Params(this);
  }
}

export class ProposalCanceled__Params {
  _event: ProposalCanceled;

  constructor(event: ProposalCanceled) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProposalCreated extends ethereum.Event {
  get params(): ProposalCreated__Params {
    return new ProposalCreated__Params(this);
  }
}

export class ProposalCreated__Params {
  _event: ProposalCreated;

  constructor(event: ProposalCreated) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get targets(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get signatures(): Array<string> {
    return this._event.parameters[4].value.toStringArray();
  }

  get calldatas(): Array<Bytes> {
    return this._event.parameters[5].value.toBytesArray();
  }

  get startBlock(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get endBlock(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get description(): string {
    return this._event.parameters[8].value.toString();
  }
}

export class ProposalExecuted extends ethereum.Event {
  get params(): ProposalExecuted__Params {
    return new ProposalExecuted__Params(this);
  }
}

export class ProposalExecuted__Params {
  _event: ProposalExecuted;

  constructor(event: ProposalExecuted) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class ProposalQueued extends ethereum.Event {
  get params(): ProposalQueued__Params {
    return new ProposalQueued__Params(this);
  }
}

export class ProposalQueued__Params {
  _event: ProposalQueued;

  constructor(event: ProposalQueued) {
    this._event = event;
  }

  get proposalId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get eta(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VoteCast extends ethereum.Event {
  get params(): VoteCast__Params {
    return new VoteCast__Params(this);
  }
}

export class VoteCast__Params {
  _event: VoteCast;

  constructor(event: VoteCast) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get support(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get weight(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reason(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class VoteCastWithParams extends ethereum.Event {
  get params(): VoteCastWithParams__Params {
    return new VoteCastWithParams__Params(this);
  }
}

export class VoteCastWithParams__Params {
  _event: VoteCastWithParams;

  constructor(event: VoteCastWithParams) {
    this._event = event;
  }

  get voter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get support(): i32 {
    return this._event.parameters[2].value.toI32();
  }

  get weight(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get reason(): string {
    return this._event.parameters[4].value.toString();
  }

  get params(): Bytes {
    return this._event.parameters[5].value.toBytes();
  }
}

export class Governor extends ethereum.SmartContract {
  static bind(address: Address): Governor {
    return new Governor("Governor", address);
  }

  COUNTING_MODE(): string {
    let result = super.call("COUNTING_MODE", "COUNTING_MODE():(string)", []);

    return result[0].toString();
  }

  try_COUNTING_MODE(): ethereum.CallResult<string> {
    let result = super.tryCall("COUNTING_MODE", "COUNTING_MODE():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  castVote(proposalId: BigInt, support: i32): BigInt {
    let result = super.call("castVote", "castVote(uint256,uint8):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(proposalId),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support))
    ]);

    return result[0].toBigInt();
  }

  try_castVote(proposalId: BigInt, support: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "castVote",
      "castVote(uint256,uint8):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support))
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  castVoteBySig(
    proposalId: BigInt,
    support: i32,
    v: i32,
    r: Bytes,
    s: Bytes
  ): BigInt {
    let result = super.call(
      "castVoteBySig",
      "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toBigInt();
  }

  try_castVoteBySig(
    proposalId: BigInt,
    support: i32,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "castVoteBySig",
      "castVoteBySig(uint256,uint8,uint8,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  castVoteWithReason(proposalId: BigInt, support: i32, reason: string): BigInt {
    let result = super.call(
      "castVoteWithReason",
      "castVoteWithReason(uint256,uint8,string):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromString(reason)
      ]
    );

    return result[0].toBigInt();
  }

  try_castVoteWithReason(
    proposalId: BigInt,
    support: i32,
    reason: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "castVoteWithReason",
      "castVoteWithReason(uint256,uint8,string):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromString(reason)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  castVoteWithReasonAndParams(
    proposalId: BigInt,
    support: i32,
    reason: string,
    params: Bytes
  ): BigInt {
    let result = super.call(
      "castVoteWithReasonAndParams",
      "castVoteWithReasonAndParams(uint256,uint8,string,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromString(reason),
        ethereum.Value.fromBytes(params)
      ]
    );

    return result[0].toBigInt();
  }

  try_castVoteWithReasonAndParams(
    proposalId: BigInt,
    support: i32,
    reason: string,
    params: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "castVoteWithReasonAndParams",
      "castVoteWithReasonAndParams(uint256,uint8,string,bytes):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromString(reason),
        ethereum.Value.fromBytes(params)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  castVoteWithReasonAndParamsBySig(
    proposalId: BigInt,
    support: i32,
    reason: string,
    params: Bytes,
    v: i32,
    r: Bytes,
    s: Bytes
  ): BigInt {
    let result = super.call(
      "castVoteWithReasonAndParamsBySig",
      "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromString(reason),
        ethereum.Value.fromBytes(params),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toBigInt();
  }

  try_castVoteWithReasonAndParamsBySig(
    proposalId: BigInt,
    support: i32,
    reason: string,
    params: Bytes,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "castVoteWithReasonAndParamsBySig",
      "castVoteWithReasonAndParamsBySig(uint256,uint8,string,bytes,uint8,bytes32,bytes32):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(proposalId),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support)),
        ethereum.Value.fromString(reason),
        ethereum.Value.fromBytes(params),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVotes(account: Address, blockNumber: BigInt): BigInt {
    let result = super.call("getVotes", "getVotes(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(account),
      ethereum.Value.fromUnsignedBigInt(blockNumber)
    ]);

    return result[0].toBigInt();
  }

  try_getVotes(
    account: Address,
    blockNumber: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVotes",
      "getVotes(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(blockNumber)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getVotesWithParams(
    account: Address,
    blockNumber: BigInt,
    params: Bytes
  ): BigInt {
    let result = super.call(
      "getVotesWithParams",
      "getVotesWithParams(address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(blockNumber),
        ethereum.Value.fromBytes(params)
      ]
    );

    return result[0].toBigInt();
  }

  try_getVotesWithParams(
    account: Address,
    blockNumber: BigInt,
    params: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getVotesWithParams",
      "getVotesWithParams(address,uint256,bytes):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(blockNumber),
        ethereum.Value.fromBytes(params)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasVoted(proposalId: BigInt, account: Address): boolean {
    let result = super.call("hasVoted", "hasVoted(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(proposalId),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasVoted(
    proposalId: BigInt,
    account: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasVoted", "hasVoted(uint256,address):(bool)", [
      ethereum.Value.fromUnsignedBigInt(proposalId),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  hashProposal(
    targets: Array<Address>,
    values: Array<BigInt>,
    calldatas: Array<Bytes>,
    descriptionHash: Bytes
  ): BigInt {
    let result = super.call(
      "hashProposal",
      "hashProposal(address[],uint256[],bytes[],bytes32):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromFixedBytes(descriptionHash)
      ]
    );

    return result[0].toBigInt();
  }

  try_hashProposal(
    targets: Array<Address>,
    values: Array<BigInt>,
    calldatas: Array<Bytes>,
    descriptionHash: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "hashProposal",
      "hashProposal(address[],uint256[],bytes[],bytes32):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromFixedBytes(descriptionHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  proposalDeadline(proposalId: BigInt): BigInt {
    let result = super.call(
      "proposalDeadline",
      "proposalDeadline(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );

    return result[0].toBigInt();
  }

  try_proposalDeadline(proposalId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalDeadline",
      "proposalDeadline(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalEta(proposalId: BigInt): BigInt {
    let result = super.call("proposalEta", "proposalEta(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(proposalId)
    ]);

    return result[0].toBigInt();
  }

  try_proposalEta(proposalId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalEta",
      "proposalEta(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalSnapshot(proposalId: BigInt): BigInt {
    let result = super.call(
      "proposalSnapshot",
      "proposalSnapshot(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );

    return result[0].toBigInt();
  }

  try_proposalSnapshot(proposalId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "proposalSnapshot",
      "proposalSnapshot(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  propose(
    targets: Array<Address>,
    values: Array<BigInt>,
    calldatas: Array<Bytes>,
    description: string
  ): BigInt {
    let result = super.call(
      "propose",
      "propose(address[],uint256[],bytes[],string):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromString(description)
      ]
    );

    return result[0].toBigInt();
  }

  try_propose(
    targets: Array<Address>,
    values: Array<BigInt>,
    calldatas: Array<Bytes>,
    description: string
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "propose",
      "propose(address[],uint256[],bytes[],string):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromString(description)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  queue(
    targets: Array<Address>,
    values: Array<BigInt>,
    calldatas: Array<Bytes>,
    descriptionHash: Bytes
  ): BigInt {
    let result = super.call(
      "queue",
      "queue(address[],uint256[],bytes[],bytes32):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromFixedBytes(descriptionHash)
      ]
    );

    return result[0].toBigInt();
  }

  try_queue(
    targets: Array<Address>,
    values: Array<BigInt>,
    calldatas: Array<Bytes>,
    descriptionHash: Bytes
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "queue",
      "queue(address[],uint256[],bytes[],bytes32):(uint256)",
      [
        ethereum.Value.fromAddressArray(targets),
        ethereum.Value.fromUnsignedBigIntArray(values),
        ethereum.Value.fromBytesArray(calldatas),
        ethereum.Value.fromFixedBytes(descriptionHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  quorum(blockNumber: BigInt): BigInt {
    let result = super.call("quorum", "quorum(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(blockNumber)
    ]);

    return result[0].toBigInt();
  }

  try_quorum(blockNumber: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("quorum", "quorum(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(blockNumber)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  state(proposalId: BigInt): i32 {
    let result = super.call("state", "state(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(proposalId)
    ]);

    return result[0].toI32();
  }

  try_state(proposalId: BigInt): ethereum.CallResult<i32> {
    let result = super.tryCall("state", "state(uint256):(uint8)", [
      ethereum.Value.fromUnsignedBigInt(proposalId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  timelock(): Address {
    let result = super.call("timelock", "timelock():(address)", []);

    return result[0].toAddress();
  }

  try_timelock(): ethereum.CallResult<Address> {
    let result = super.tryCall("timelock", "timelock():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  version(): string {
    let result = super.call("version", "version():(string)", []);

    return result[0].toString();
  }

  try_version(): ethereum.CallResult<string> {
    let result = super.tryCall("version", "version():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  votingDelay(): BigInt {
    let result = super.call("votingDelay", "votingDelay():(uint256)", []);

    return result[0].toBigInt();
  }

  try_votingDelay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("votingDelay", "votingDelay():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  votingPeriod(): BigInt {
    let result = super.call("votingPeriod", "votingPeriod():(uint256)", []);

    return result[0].toBigInt();
  }

  try_votingPeriod(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("votingPeriod", "votingPeriod():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class CastVoteCall extends ethereum.Call {
  get inputs(): CastVoteCall__Inputs {
    return new CastVoteCall__Inputs(this);
  }

  get outputs(): CastVoteCall__Outputs {
    return new CastVoteCall__Outputs(this);
  }
}

export class CastVoteCall__Inputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): i32 {
    return this._call.inputValues[1].value.toI32();
  }
}

export class CastVoteCall__Outputs {
  _call: CastVoteCall;

  constructor(call: CastVoteCall) {
    this._call = call;
  }

  get balance(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CastVoteBySigCall extends ethereum.Call {
  get inputs(): CastVoteBySigCall__Inputs {
    return new CastVoteBySigCall__Inputs(this);
  }

  get outputs(): CastVoteBySigCall__Outputs {
    return new CastVoteBySigCall__Outputs(this);
  }
}

export class CastVoteBySigCall__Inputs {
  _call: CastVoteBySigCall;

  constructor(call: CastVoteBySigCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get v(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class CastVoteBySigCall__Outputs {
  _call: CastVoteBySigCall;

  constructor(call: CastVoteBySigCall) {
    this._call = call;
  }

  get balance(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CastVoteWithReasonCall extends ethereum.Call {
  get inputs(): CastVoteWithReasonCall__Inputs {
    return new CastVoteWithReasonCall__Inputs(this);
  }

  get outputs(): CastVoteWithReasonCall__Outputs {
    return new CastVoteWithReasonCall__Outputs(this);
  }
}

export class CastVoteWithReasonCall__Inputs {
  _call: CastVoteWithReasonCall;

  constructor(call: CastVoteWithReasonCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get reason(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class CastVoteWithReasonCall__Outputs {
  _call: CastVoteWithReasonCall;

  constructor(call: CastVoteWithReasonCall) {
    this._call = call;
  }

  get balance(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CastVoteWithReasonAndParamsCall extends ethereum.Call {
  get inputs(): CastVoteWithReasonAndParamsCall__Inputs {
    return new CastVoteWithReasonAndParamsCall__Inputs(this);
  }

  get outputs(): CastVoteWithReasonAndParamsCall__Outputs {
    return new CastVoteWithReasonAndParamsCall__Outputs(this);
  }
}

export class CastVoteWithReasonAndParamsCall__Inputs {
  _call: CastVoteWithReasonAndParamsCall;

  constructor(call: CastVoteWithReasonAndParamsCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get reason(): string {
    return this._call.inputValues[2].value.toString();
  }

  get params(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class CastVoteWithReasonAndParamsCall__Outputs {
  _call: CastVoteWithReasonAndParamsCall;

  constructor(call: CastVoteWithReasonAndParamsCall) {
    this._call = call;
  }

  get balance(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CastVoteWithReasonAndParamsBySigCall extends ethereum.Call {
  get inputs(): CastVoteWithReasonAndParamsBySigCall__Inputs {
    return new CastVoteWithReasonAndParamsBySigCall__Inputs(this);
  }

  get outputs(): CastVoteWithReasonAndParamsBySigCall__Outputs {
    return new CastVoteWithReasonAndParamsBySigCall__Outputs(this);
  }
}

export class CastVoteWithReasonAndParamsBySigCall__Inputs {
  _call: CastVoteWithReasonAndParamsBySigCall;

  constructor(call: CastVoteWithReasonAndParamsBySigCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get support(): i32 {
    return this._call.inputValues[1].value.toI32();
  }

  get reason(): string {
    return this._call.inputValues[2].value.toString();
  }

  get params(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }

  get v(): i32 {
    return this._call.inputValues[4].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class CastVoteWithReasonAndParamsBySigCall__Outputs {
  _call: CastVoteWithReasonAndParamsBySigCall;

  constructor(call: CastVoteWithReasonAndParamsBySigCall) {
    this._call = call;
  }

  get balance(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ExecuteCall extends ethereum.Call {
  get inputs(): ExecuteCall__Inputs {
    return new ExecuteCall__Inputs(this);
  }

  get outputs(): ExecuteCall__Outputs {
    return new ExecuteCall__Outputs(this);
  }
}

export class ExecuteCall__Inputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get calldatas(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get descriptionHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class ExecuteCall__Outputs {
  _call: ExecuteCall;

  constructor(call: ExecuteCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class ProposeCall extends ethereum.Call {
  get inputs(): ProposeCall__Inputs {
    return new ProposeCall__Inputs(this);
  }

  get outputs(): ProposeCall__Outputs {
    return new ProposeCall__Outputs(this);
  }
}

export class ProposeCall__Inputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get calldatas(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get description(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class ProposeCall__Outputs {
  _call: ProposeCall;

  constructor(call: ProposeCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class QueueCall extends ethereum.Call {
  get inputs(): QueueCall__Inputs {
    return new QueueCall__Inputs(this);
  }

  get outputs(): QueueCall__Outputs {
    return new QueueCall__Outputs(this);
  }
}

export class QueueCall__Inputs {
  _call: QueueCall;

  constructor(call: QueueCall) {
    this._call = call;
  }

  get targets(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }

  get values(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get calldatas(): Array<Bytes> {
    return this._call.inputValues[2].value.toBytesArray();
  }

  get descriptionHash(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class QueueCall__Outputs {
  _call: QueueCall;

  constructor(call: QueueCall) {
    this._call = call;
  }

  get proposalId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

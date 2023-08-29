# Livepeer Onchain Treasury Upgrade audit details

- Total Prize Pool: $36,500 USDC
  - HM awards: $24,000 USDC
  - Analysis awards: $1,500 USDC
  - QA awards: $750 USDC
  - Bot Race awards: $2,250 USDC
  - Gas awards: $1500 USDC
  - Judge awards: $3,600 USDC
  - Lookout awards: $2,400 USDC
  - Scout awards: $500 USDC
- Join [C4 Discord](https://discord.gg/code4rena) to register
- Submit findings [using the C4 form](https://code4rena.com/contests/2023-08-livepeer-onchain-treasury-upgrade/submit)
- [Read our guidelines for more details](https://docs.code4rena.com/roles/wardens)
- Starts August 31, 2023 20:00 UTC
- Ends September 6, 2023 20:00 UTC

## Automated Findings / Publicly Known Issues

Automated findings output for the audit can be found [here](https://github.com/code-423n4/2023-08-livepeer/blob/main/bot-report.md) within 24 hours of audit opening.

_Note for C4 wardens: Anything included in the automated findings output is considered a publicly known issue and is ineligible for awards._

# Overview

Livepeer is a protocol that coordinates an open video streaming infrastructure. The protocol is governed by the LPT token, which is already used to stake on hundreds of transcoding providers and participate in a partially off-chain polling governance process. To learn more about Livepeer check the following resources:

- [Homepage](https://livepeer.org/)
- [10-minute Primer](https://livepeer.org/primer)
- [Protocol Explorer](https://explorer.livepeer.org/)
- [Hosted service](https://livepeer.studio/)

## Audited upgrade details

This upgrade creates an onchain community treasury for the Livepeer protocol funded by a percentage of the protocol rewards. It leverages the [OpenZeppelin governance primitives](https://docs.openzeppelin.com/contracts/4.x/api/governance) with a custom voting power token and counting module to build on top of the existing staking system. The detailed proposals about this upgrade can be found on:

- [[LIP-91]](https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-91.md) Livepeer Treasury Bundle
  - [Technical specification](https://github.com/livepeer/LIPs/blob/master/assets/lip-89/treasury_technical_spec.md) under bundled [LIP-89](https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-89.md)
- [[LIP-92]](https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-92.md) Treasury Contribution Percentage

All referenced LIPs can be used as formal specifications for the code in scope.

# Scope

See [scope.txt](https://github.com/code-423n4/2023-08-livepeer/blob/main/scope.txt) for a list of all files/contracts in scope. Some contracts already existed in the protocol and were only modified in this upgrade. Check the diff on:

- [ae2b202:](https://github.com/code-423n4/2023-08-livepeer/commit/ae2b2025e18ac2428fce079581a7d61f46576180) Full diff of the changes in scope
- [540c1d7:](https://github.com/code-423n4/2023-08-livepeer/commit/540c1d7503f2563db20cd4612703e6b67bbdfb39) Tests for the above (not in audit scope but useful during the process)

The following contracts should be considered in scope for audit:

| Contracts                                                                                                                                                         | Lines of Code (and comments) | Purpose                                                                                                                                                                                                                                                         | External Libraries used                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contracts/bonding/BondingManager.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/bonding/BondingManager.sol)                             | 888 (567)                    | Existing contract that manages the protocol bonds (aka staking) and rewards. This upgrade adds support for state checkpointing and treasury rewards minting. It is the most sensitive contract in this contest as it has a critical role in the protocol today. | [`@openzeppelin/contracts/utils/math/SafeMath.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.2/contracts/utils/math/SafeMath.sol)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [contracts/bonding/BondingVotes.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/bonding/BondingVotes.sol)                                 | 272 (224)                    | Stores checkpoints of the `BondingManager` state to provide an `IERC5805Upgradeable` (`IVotes`) implementation for the OZ Governor.                                                                                                                             | [`@openzeppelin/contracts/utils/Arrays.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.2/contracts/utils/Arrays.sol), [`@openzeppelin/contracts/utils/math/SafeCast.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.2/contracts/utils/math/SafeCast.sol)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [contracts/bonding/libraries/EarningsPoolLIP36.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/bonding/libraries/EarningsPoolLIP36.sol)   | 60 (26)                      | This library provides helper functions for calculating staking rewards using the [LIP-36](https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-36.md) cumulative earnings algorithm.                                                                           | [`@openzeppelin/contracts/utils/math/SafeMath.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.2/contracts/utils/math/SafeMath.sol)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [contracts/bonding/libraries/SortedArrays.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/bonding/libraries/SortedArrays.sol)             | 38 (29)                      | This library provides helpers for maintaining and looking up on sorted arrays. It builds on top of `Arrays.findUpperBound` to provide an equivalent `findLowerBound` for checkpoint lookup.                                                                     | [`@openzeppelin/contracts/utils/Arrays.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.9.2/contracts/utils/Arrays.sol)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [contracts/treasury/GovernorCountingOverridable.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/treasury/GovernorCountingOverridable.sol) | 124 (68)                     | Abstract contract that implements an OZ Governor counting module with support for delegators to override their delegates (transcoders) vote on a proposal.                                                                                                      | [`@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/proxy/utils/Initializable.sol), [`@openzeppelin/contracts-upgradeable/governance/GovernorUpgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/governance/GovernorUpgradeable.sol), [`@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/interfaces/IERC5805Upgradeable.sol) (unused)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [contracts/treasury/Treasury.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/treasury/Treasury.sol)                                       | 12 (10)                      | This contract inherits from `TimelockControllerUpgradeable` in order to make it initializable. Used by the governor to hold funds and execute proposals.                                                                                                        | [`@openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/governance/TimelockControllerUpgradeable.sol)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [contracts/treasury/LivepeerGovernor.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/treasury/LivepeerGovernor.sol)                       | 106 (42)                     | This contract is the actual `Governor` implementation. It combines the OZ built-in and the custom modules and extensions into a concrete contract that can be instantiated and used. It contains mostly the plumbing to put the pieces together.                | [`@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/proxy/utils/Initializable.sol), [`@openzeppelin/contracts-upgradeable/governance/GovernorUpgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/governance/GovernorUpgradeable.sol), [`@openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesUpgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/governance/extensions/GovernorVotesUpgradeable.sol), [`@openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesQuorumFractionUpgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/governance/extensions/GovernorVotesQuorumFractionUpgradeable.sol), [`@openzeppelin/contracts-upgradeable/governance/extensions/GovernorSettingsUpgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/governance/extensions/GovernorSettingsUpgradeable.sol), [`@openzeppelin/contracts-upgradeable/governance/extensions/GovernorTimelockControlUpgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/governance/extensions/GovernorTimelockControlUpgradeable.sol) |

The following interfaces are also relevant as they were created or modified. Even though they contain no logic to be audited, they are included for reference and indirect dependencies:

| Interfaces                                                                                                                              | Lines of Code (and comments) | Purpose                                                                                                         | Libraries used                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [contracts/bonding/IBondingManager.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/bonding/IBondingManager.sol) | 68 (16)                      | Interface for `BondingManager`. Added a function so it can be called from `BondingVotes` in the interface.      |                                                                                                                                                                                                         |
| [contracts/bonding/IBondingVotes.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/bonding/IBondingVotes.sol)     | 28 (13)                      | Interface for `BondingVotes`. Inherits from `IVotes` so it implements the interface expected by the governor.   |                                                                                                                                                                                                         |
| [contracts/treasury/IVotes.sol](https://github.com/code-423n4/2023-08-livepeer/blob/main/contracts/treasury/IVotes.sol)                 | 9 (2)                        | Interface extension of `IERC5805Upgradeable` expected by `GovernorCountingOverridable` to provide voting power. | [`@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol`](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/v4.9.2/contracts/interfaces/IERC5805Upgradeable.sol) |

The above metrics have all been calculated with [`cloc`](https://github.com/AlDanial/cloc). For further metrics like normalized SLOC and complexity reports see [scope-metrics.md](https://github.com/code-423n4/2023-08-livepeer/blob/main/scope-metrics.md) (or [scope-metrics.html](https://github.com/code-423n4/2023-08-livepeer/blob/main/scope-metrics.html) for richer view). The latter were generated with [`solidity-code-metrics`](https://github.com/Consensys/solidity-metrics).

## Out of scope

- Any deployment or upgrade scripts are out of scope (but can be used to test the contracts in scope).
- Files in `test/`, `contracts/test/` or `src/test/` are out of scope (but can be used to test the contracts in scope).
- External libraries (`@openzeppelin/*`)
- Any Solidity files not listed in [scope.txt](https://github.com/code-423n4/2023-08-livepeer/blob/main/scope.txt)

# Additional Context

The voting power and governance systems should be entirely separate of the existing protocol contracts with the exception of the `BondingManager` contract. This contract was modified to support the treasury contribution and transparently checkpointing the state on the `BondingVotes` contract.

- The number 1 priority is making sure there were no other changes to the existing `BondingManager` behavior apart from the specified ones and their dependencies.
- The number 2 priority is making sure that the `BondingManager` checkpointing is extensive and correct. Any change to an account's state should be consistently reflected on the `BondingVotes` contract.

## Rewards calculation

Livepeer also uses a bespoke staking rewards calculation as defined in [LIP-36](https://github.com/livepeer/LIPs/blob/master/LIPs/LIP-36.md). While this was not introduced by this upgrade, it is reused in the voting power logic as `BondingVotes` needs to calculate historical values for a delegator. The gist of the logic is:

- Delegates (transcoders) call a `reward()` function on every protocol round.
- This function mints the inflationary LPT rewards of the protocol for the active transcoders, also shared with their delegators.
- It updates a multiplier (`EarningsPool.cumulativeRewardFactor`) stored for every round, corresponding to the current round rewards.
- When querying for the balance of a delegator, their bonded amount is multiplied by the last value of this multiplier proportionally to the multiplier on the round where they bonded.
- We use this same logic to calculate the voting power of a delegator on a given round.

As a side note, this `reward()` function is also where the treasury rewards are minted in this upgrade.

## Known caveats / limitations

- We are deploying this on top of an existing staking system. As such, the initial state of `BondingVotes` will be inconsistent with `BondingManager` until a first checkpoint is made for an account.
  - In case of delegators, their delegates (transcoders) also need to be checkpointed.
- The `BondingVotes` contract does not implement [`ERC-5805`](https://eips.ethereum.org/EIPS/eip-5805) completely. Details can be found in [the technical spec](https://github.com/livepeer/LIPs/blob/master/assets/lip-89/treasury_technical_spec.md#caveats).
- The events sent by the `LivepeerGovernor` when a vote is cast cannot be used by generic indexers to calculate the total proposal votes. That because the events will not account for the overrides implemented in `GovernorCountingOverridable`, which would need a custom indexing logic.

## Areas of Concern

### General

- Does any state in any contract get corrupted whenever there is an upgrade?
- Protocol integrity: Is there any new attack surfaces with this upgrade?

### BondingManager

- Is all of the behavior preserved apart from the desired changes?
- Is there any way of corrupting the bonding state from any of the new logic?
- Are there any missing or incorrect checkpoints?
- Are there any valid function calls that starts to revert after this upgrade?
- Is the treasury rewards calculation correct? Both on the amount minted to the treasury and the deduction made to the transcoders+delegators rewards.
- Is the treasury rewards contribution exploitable in any way? e.g.: mint to a different address, manipulate reward cut, etc.
- Is the treasury reward cut always consistent within a round?
- Is the treasury balance ceiling exploitable in any way?

### BondingVotes

Disconsidering the upgrade step when previously existing accounts are not checkpointed yet:

- Are `getVotes` and `totalSupply` consistent with the `BondingManager` state?
- Does `getPastVotes` and `getPastTotalSupply` match the value returned by `getVotes` and `totalSupply` in the end of the corresponding round?
- Are `getPastVotes` and `getPastTotalSupply` immutable after the queried round is over?
- Is there any valid state that will make the query functions revert? (e.g. prohibiting a user from voting)
- Is there any valid way for the checkpointing functions to revert (and affect `BondingManager`)?

### GovernorCountingOverridable

- Can votes from other users be manipulated other than the specified override logic?
- Can the quota or quorum logic deviate from the expected behavior?

### Treasury

- Can the treasury be taken over to execute arbitrary code?
- Can it be made to execute anything without going through the governor?

### LivepeerGovernor

- Can a proposal be made to change the protocol itself? (e.g. impersonate `controller.owner()`)
- Can an attacker execute a proposal without reaching consensus?

## Scoping Details

```
- If you have a public code repo, please share it here:  https://github.com/livepeer/protocol
- How many contracts are in scope?: 7
- Total SLoC for these contracts?: 1500
- How many external imports are there?: 16
- How many separate interfaces and struct definitions are there for the contracts within scope?: 6
- Does most of your code generally use composition or inheritance?: Inheritance
- How many external calls?: 0
- What is the overall line coverage percentage provided by your tests?: 100%
- Is this an upgrade of an existing system?: Yes, to add checkpointing support for an existing staking system, abstract it as an IERC5805 token and set up an OpenZeppelin Governor on top of that.
- Check all that apply (e.g. timelock, NFT, AMM, ERC20, rollups, etc.): Uses Timelock from OZ, Deployed on L2 but no bridges involved.
- Is there a need to understand a separate part of the codebase / get context in order to audit this part of the protocol?:  Yes
- Please describe required context:  You must be relatively familiar with the existing staking system from Livepeer(BondingManager) in order to verify that the stake checkpoints are being made correctly. It is also useful to be familiar with OpenZeppelin's Governance primitives.
- Does it use an oracle?:  No
- Describe any novel or unique curve logic or mathematical models your code uses: None
- Is this either a fork of or an alternate implementation of another project?:  No
- Does it use a side-chain?: No
- Describe any specific areas you would like addressed:
  - Find any inconsistency in the stake checkpoint with the actual stake in BondingManager in the corresponding round (as per the LIP-89 spec);
  - Force the vote counting logic to behave differently from the specification, fabricating or losing voting power, altering other users votes (apart from the override), etc;
  - Exploit the governor/treasury into running arbitrary code without a proper proposal;
  - Find any loopholes for the LivepeerGovernor to make changes to the protocol itself;
  - Distort the treasury contribution to something different than what is configured;
```

# Developer Guide

- This project is built with Hardhat. Foundry is used only for some specific fork/upgrade tests.
- All the commands below are run from the root directory.

## Install Modules

```sh
yarn
```

## Compile

```sh
yarn compile
```

## Test

### In-scope contracts tests

```sh
yarn test:audit
```

### `BondingVotes` upgrade fork test

```sh
forge test --match-contract BondingVotesStateInitialization --fork-url https://arbitrum-mainnet.infura.io/v3/$INFURA_KEY -vvv --fork-block-number 110930219
```

### All tests

```sh
yarn test
```

## Gas report

### In-scope contracts tests

```sh
yarn test:audit-gas
```

Notice that this runs all the tests from `test:audit` excluding only the unit tests.

### All gas report tests

```sh
yarn test:gas
```

Notice that this runs only the tests from `test/gas-report/*` folder. It is not a super-set of `test:audit-gas`.

## Deploy

To deploy on a live network follow the [doc/devnet.md](https://github.com/code-423n4/2023-08-livepeer/blob/main/doc/devnet.md) guide.

## Slither

```sh
slither contracts
```

Output provided on [slither.txt](https://github.com/code-423n4/2023-08-livepeer/blob/main/slither.txt).

## Misc

- Clean artifacts: `yarn clean`
- Format source files: `yarn prettier`
- Coverage report: `yarn test:coverage`

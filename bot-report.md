# Report

## Summary

### Medium Issues

Total **4 instances** over **1 issue**:

|ID|Issue|Instances|
|:--:|:---|:--:|
| [M-1](#m-1-centralization-risk-for-privileged-functions) | Centralization risk for privileged functions | 4 |

### Low Issues

Total **64 instances** over **14 issues**:

|ID|Issue|Instances|
|:--:|:---|:--:|
| [L-1](#l-1-functions-calling-contractsaddresses-with-transfer-hooks-should-be-protected-by-reentrancy-guard) | Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard | 1 |
| [L-2](#l-2-initializers-can-be-front-run) | Initializers can be front-run | 2 |
| [L-3](#l-3-upgradable-contracts-need-a-constructor-to-lock-the-implementation-contract-when-it-is-deployed) | Upgradable contracts need a constructor to lock the implementation contract when it is deployed | 2 |
| [L-4](#l-4-missing-storage-gap-for-upgradable-contracts) | Missing storage gap for upgradable contracts | 2 |
| [L-5](#l-5-missing-zero-address-check-in-initializer) | Missing zero address check in initializer | 3 |
| [L-6](#l-6-prevent-re-setting-a-state-variable-with-the-same-value) | prevent re-setting a state variable with the same value | 4 |
| [L-7](#l-7-solidity-version-0820-or-above-may-not-work-on-other-chains-due-to-push0) | Solidity version 0.8.20 or above may not work on other chains due to PUSH0 | 1 |
| [L-8](#l-8-state-variables-not-capped-at-reasonable-values) | State variables not capped at reasonable values | 8 |
| [L-9](#l-9-code-does-not-follow-the-best-practice-of-check-effects-interaction) | Code does not follow the best practice of check-effects-interaction | 5 |
| [L-10](#l-10-vulnerable-versions-of-packages-are-being-used) | Vulnerable versions of packages are being used | 2 |
| [L-11](#l-11-governance-functions-should-be-controlled-by-time-locks) | Governance functions should be controlled by time locks | 4 |
| [L-12](#l-12-the-feesrates-should-be-capped-by-smart-contracts) | The fees/rates should be capped by smart contracts | 1 |
| [L-13](#l-13-using-zero-as-a-parameter) | Using zero as a parameter | 20 |
| [L-14](#l-14-constructor--initialization-function-lacks-parameter-validation) | Constructor / initialization function lacks parameter validation | 9 |

### Non Critical Issues

Total **855 instances** over **67 issues**:

|ID|Issue|Instances|
|:--:|:---|:--:|
| [N-1](#n-1-consider-moving-msgsender-checks-to-modifiers) | Consider moving `msg.sender` checks to `modifier`s | 12 |
| [N-2](#n-2-custom-errors-has-no-error-details) | Custom errors has no error details | 1 |
| [N-3](#n-3-import-declarations-should-import-specific-identifiers-rather-than-the-whole-file) | Import declarations should import specific identifiers, rather than the whole file | 52 |
| [N-4](#n-4-visibility-of-state-variables-is-not-explicitly-defined) | Visibility of state variables is not explicitly defined | 1 |
| [N-5](#n-5-too-long-functions-should-be-refactored) | Too long functions should be refactored | 5 |
| [N-6](#n-6-redundant-inheritance-specifier) | Redundant inheritance specifier | 5 |
| [N-7](#n-7-variables-should-be-named-in-mixedcase-style) | Variables should be named in mixedCase style | 1 |
| [N-8](#n-8-names-of-privateinternal-functions-should-be-prefixed-with-an-underscore) | Names of `private`/`internal` functions should be prefixed with an underscore | 32 |
| [N-9](#n-9-names-of-privateinternal-state-variables-should-be-prefixed-with-an-underscore) | Names of `private`/`internal` state variables should be prefixed with an underscore | 6 |
| [N-10](#n-10-order-of-functions-does-not-follow-the-solidity-style-guide) | Order of functions does not follow the Solidity Style Guide | 21 |
| [N-11](#n-11-custom-errors-should-be-used-rather-than-revertrequire) | Custom errors should be used rather than `revert()`/`require()` | 28 |
| [N-12](#n-12-assertshould-be-replaced-with-require-or-revert) | `assert()` should be replaced with `require()` or `revert()` | 2 |
| [N-13](#n-13-duplicated-requirerevert-checks-should-be-refactored) | Duplicated `require()`/`revert()` checks should be refactored | 2 |
| [N-14](#n-14-convert-simple-if-statements-to-ternary-expressions) | Convert simple `if`-statements to ternary expressions | 1 |
| [N-15](#n-15-avoid-double-casting) | Avoid double casting | 1 |
| [N-16](#n-16-events-should-be-emitted-before-external-calls) | Events should be emitted before external calls | 7 |
| [N-17](#n-17-empty-function-body-without-comments) | Empty function body without comments | 2 |
| [N-18](#n-18-event-is-missing-indexed-fields) | Event is missing `indexed` fields | 8 |
| [N-19](#n-19-common-functions-should-be-refactored-to-a-common-base-contract) | Common functions should be refactored to a common base contract | 2 |
| [N-20](#n-20-imports-could-be-organized-more-systematically) | Imports could be organized more systematically | 6 |
| [N-21](#n-21-lines-are-too-long) | Lines are too long | 71 |
| [N-22](#n-22-magic-numbers-should-be-replaced-with-constants) | Magic numbers should be replaced with constants | 2 |
| [N-23](#n-23-expressions-for-constant-values-should-use-immutable-rather-than-constant) | Expressions for constant values should use `immutable` rather than `constant` | 1 |
| [N-24](#n-24-public-functions-not-called-internally-should-be-declared-external) | Public functions not called internally should be declared `external` | 20 |
| [N-25](#n-25-use-inheritdoc-for-overridden-functions) | Use `@inheritdoc` for overridden functions | 13 |
| [N-26](#n-26-natspec-documentation-for-contract-is-missing) | NatSpec documentation for contract is missing | 2 |
| [N-27](#n-27-contract-declarations-should-have-natspec-author-annotations) | Contract declarations should have NatSpec `@author` annotations | 10 |
| [N-28](#n-28-contract-declarations-should-have-natspec-title-annotations) | Contract declarations should have NatSpec `@title` annotations | 2 |
| [N-29](#n-29-event-declarations-should-have-natspec-descriptions) | Event declarations should have NatSpec descriptions | 13 |
| [N-30](#n-30-natspec-documentation-for-function-is-missing) | NatSpec documentation for function is missing | 36 |
| [N-31](#n-31-missing-natspec-param) | Missing NatSpec `@param` | 93 |
| [N-32](#n-32-public-variable-declarations-should-have-natspec-descriptions) | Public variable declarations should have NatSpec descriptions | 6 |
| [N-33](#n-33-natspec-return-is-missing) | NatSpec `@return` is missing | 49 |
| [N-34](#n-34-lib-openzeppelincontracts-upgradeable-should-be-upgraded-to-a-newer-version) | Lib @openzeppelin/contracts-upgradeable should be upgraded to a newer version | 4 |
| [N-35](#n-35-openzeppelincontracts-should-be-upgraded-to-a-newer-version) | @openzeppelin/contracts should be upgraded to a newer version | 4 |
| [N-36](#n-36-the-override-keyword-should-not-be-omitted) | The `override` keyword should not be omitted | 26 |
| [N-37](#n-37-missing-zero-address-check-in-functions-with-address-parameters) | Missing zero address check in functions with address parameters | 69 |
| [N-38](#n-38-contract-functions-should-use-an-interface) | Contract functions should use an `interface` | 45 |
| [N-39](#n-39-constants-should-be-put-on-the-left-side-of-comparisons) | Constants should be put on the left side of comparisons | 26 |
| [N-40](#n-40-else-block-not-required) | `else`-block not required | 2 |
| [N-41](#n-41-redundant-return-statement-in-a-function-with-named-return-variables) | Redundant return statement in a function with named return variables | 4 |
| [N-42](#n-42-solidity-compiler-version-is-not-fixed) | Solidity compiler version is not fixed | 1 |
| [N-43](#n-43-control-structures-do-not-follow-the-solidity-style-guide) | Control structures do not follow the Solidity Style Guide | 22 |
| [N-44](#n-44-functions-and-modifiers-should-be-named-in-mixedcase-style) | Functions and modifiers should be named in mixedCase style | 5 |
| [N-45](#n-45-order-of-contract-layout-does-not-follow-the-solidity-style-guide) | Order of contract layout does not follow the Solidity Style Guide | 4 |
| [N-46](#n-46-whitespace-in-expressions) | Whitespace in Expressions | 5 |
| [N-47](#n-47-todos-left-in-the-code) | `TODO`s left in the code | 1 |
| [N-48](#n-48-high-cyclomatic-complexity) | High cyclomatic complexity | 1 |
| [N-49](#n-49-typos) | Typos | 3 |
| [N-50](#n-50-unused-contract-variables) | Unused contract variables | 1 |
| [N-51](#n-51-unused-named-return) | Unused named return | 7 |
| [N-52](#n-52-consider-using-delete-rather-than-assigning-zero-to-clear-values) | Consider using `delete` rather than assigning zero to clear values | 5 |
| [N-53](#n-53-named-mappings-are-recommended) | Named mappings are recommended | 9 |
| [N-54](#n-54-use-typexmax-instead-of-constant-formulas-like-2n) | Use `type(X).max` instead of constant formulas like `2**n` | 1 |
| [N-55](#n-55-events-that-mark-critical-parameter-changes-should-contain-both-the-old-and-the-new-value) | Events that mark critical parameter changes should contain both the old and the new value | 11 |
| [N-56](#n-56-events-are-emitted-without-the-sender-information) | Events are emitted without the sender information | 17 |
| [N-57](#n-57-functions-with-array-parameters-should-have-length-checks-in-place) | Functions with array parameters should have length checks in place | 8 |
| [N-58](#n-58-state-variables-should-include-comments) | State variables should include comments | 1 |
| [N-59](#n-59-file-is-missing-natspec) | File is missing NatSpec | 1 |
| [N-60](#n-60-modifier-declarations-should-have-natspec-descriptions) | Modifier declarations should have NatSpec descriptions | 6 |
| [N-61](#n-61-use-the-latest-solidity-version-for-deployment) | Use the latest solidity version for deployment | 10 |
| [N-62](#n-62-consider-adding-a-blockdeny-list) | Consider adding a block/deny-list | 5 |
| [N-63](#n-63-enable-ir-based-code-generation) | Enable IR-based code generation | 1 |
| [N-64](#n-64-contracts-should-have-full-test-coverage) | Contracts should have full test coverage | 1 |
| [N-65](#n-65-large-or-complicated-code-bases-should-implement-invariant-tests) | Large or complicated code bases should implement invariant tests | 1 |
| [N-66](#n-66-top-level-declarations-should-be-separated-by-at-least-two-lines) | Top-level declarations should be separated by at least two lines | 25 |
| [N-67](#n-67-consider-adding-formal-verification-proofs) | Consider adding formal verification proofs | 10 |

### Gas Optimizations

Total **315 instances** over **33 issues**with **26380** gas saved:

|ID|Issue|Instances|Gas|
|:--:|:---|:--:|:--:|
| [G-1](#g-1-dont-use-safemath-once-the-solidity-version-is-080-or-greater) | Don't use `SafeMath` once the solidity version is 0.8.0 or greater | 2 | - |
| [G-2](#g-2-constructors-can-be-marked-as-payable-to-save-deployment-gas) | Constructors can be marked as payable to save deployment gas | 3 | 63 |
| [G-3](#g-3-unused-named-return-variables-without-optimizer-waste-gas) | Unused named return variables without optimizer waste gas | 7 | 63 |
| [G-4](#g-4-use-custom-errors-rather-than-revertrequire-strings-to-save-gas) | Use custom errors rather than `revert()`/`require()` strings to save gas | 28 | 1400 |
| [G-5](#g-5-operator--costs-more-gas-than-x--x--y-for-state-variables) | Operator `+=` costs more gas than `<x> = <x> + <y>` for state variables | 7 | 791 |
| [G-6](#g-6-avoid-updating-storage-when-the-value-hasnt-changed) | Avoid updating storage when the value hasn't changed | 4 | 3200 |
| [G-7](#g-7-multiple-accesses-of-the-same-mappingarray-keyindex-should-be-cached) | Multiple accesses of the same mapping/array key/index should be cached | 5 | 210 |
| [G-8](#g-8-state-variables-that-are-used-multiple-times-in-a-function-should-be-cached-in-stack-variables) | State variables that are used multiple times in a function should be cached in stack variables | 6 | 582 |
| [G-9](#g-9-internal-functions-only-called-once-can-be-inlined-to-save-gas) | `internal` functions only called once can be inlined to save gas | 16 | 480 |
| [G-10](#g-10-functions-that-revert-when-called-by-normal-users-can-be-marked-payable) | Functions that revert when called by normal users can be marked `payable` | 9 | 189 |
| [G-11](#g-11-operator--costs-less-gas-than-operator-) | Operator `>=`/`<=` costs less gas than operator `>`/`<` | 14 | 42 |
| [G-12](#g-12-redundant-state-variable-getters) | Redundant state variable getters | 1 | - |
| [G-13](#g-13-use-a-more-recent-version-of-solidity) | Use a more recent version of solidity | 10 | - |
| [G-14](#g-14-reduce-gas-usage-by-moving-to-solidity-0819-or-later) | Reduce gas usage by moving to Solidity 0.8.19 or later | 10 | 10000 |
| [G-15](#g-15-using-a-double-if-statement-instead-of-a-logical-and) | Using a double `if` statement instead of a logical AND(`&&`) | 7 | 210 |
| [G-16](#g-16-requirerevert-strings-longer-than-32-bytes-cost-extra-gas) | `require()`/`revert()` strings longer than 32 bytes cost extra gas | 10 | 30 |
| [G-17](#g-17-remove-or-replace-unused-state-variables) | Remove or replace unused state variables | 1 | - |
| [G-18](#g-18-using-assembly-to-check-for-zero-can-save-gas) | Using assembly to check for zero can save gas | 21 | 126 |
| [G-19](#g-19-use-assembly-to-emit-events) | Use assembly to emit events | 17 | 646 |
| [G-20](#g-20-use-assembly-to-compute-hashes-to-save-gas) | Use assembly to compute hashes to save gas | 13 | 1040 |
| [G-21](#g-21-use-assembly-to-write-addresscontract-type-storage-values) | Use `assembly` to write address/contract type storage values | 1 | 50 |
| [G-22](#g-22-use-calldata-instead-of-memory-for-immutable-arguments) | Use `calldata` instead of `memory` for immutable arguments | 2 | 600 |
| [G-23](#g-23-keccak256-hash-of-literals-should-only-be-computed-once) | `keccak256()` hash of literals should only be computed once | 13 | 546 |
| [G-24](#g-24-newer-versions-of-solidity-are-more-gas-efficient) | Newer versions of solidity are more gas efficient | 10 | - |
| [G-25](#g-25-avoid-contract-existence-checks-by-using-low-level-calls) | Avoid contract existence checks by using low level calls | 41 | 4100 |
| [G-26](#g-26-the-result-of-a-function-call-should-be-cached-rather-than-re-calling-the-function) | The result of a function call should be cached rather than re-calling the function | 13 | 1300 |
| [G-27](#g-27-duplicated-requirerevert-checks-should-be-refactored-to-a-modifier-or-function-to-save-gas) | Duplicated `require()`/`revert()` checks should be refactored to a modifier Or function to save gas | 2 | - |
| [G-28](#g-28-usage-of-intsuints-smaller-than-32-bytes-incurs-overhead) | Usage of `int`s/`uint`s smaller than 32 bytes incurs overhead | 8 | 440 |
| [G-29](#g-29-multiple-mappings-can-be-replaced-with-a-single-struct-mapping) | Multiple mappings can be replaced with a single struct mapping | 2 | 84 |
| [G-30](#g-30-multiple-mappings-with-same-keys-can-be-combined-into-a-single-struct-mapping-for-readability) | Multiple mappings with same keys can be combined into a single struct mapping for readability | 2 | - |
| [G-31](#g-31-optimize-names-to-save-gas) | Optimize names to save gas | 6 | 132 |
| [G-32](#g-32-consider-activating-via-ir-for-deploying) | Consider activating via-ir for deploying | 10 | - |
| [G-33](#g-33-use--0-or--0-for-unsigned-integer-comparison) | Use `!= 0` or `== 0` for unsigned integer comparison | 14 | 56 |

## Medium Issues

### <a name="M-1"></a>[M-1] Centralization risk for privileged functions

Contracts with privileged functions need owner/admin to be trusted not to perform malicious updates or drain funds. This may also cause a single point failure.

There are 4 instances:

- *BondingManager.sol* ( [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L155), [#L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L167), [#L176](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L176), [#L186](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L186) ):

```solidity
155:     function setUnbondingPeriod(uint64 _unbondingPeriod) external onlyControllerOwner {

167:     function setTreasuryRewardCutRate(uint256 _cutRate) external onlyControllerOwner {

176:     function setTreasuryBalanceCeiling(uint256 _ceiling) external onlyControllerOwner {

186:     function setNumActiveTranscoders(uint256 _numActiveTranscoders) external onlyControllerOwner {
```

## Low Issues

### <a name="L-1"></a>[L-1] Functions calling contracts/addresses with transfer hooks should be protected by reentrancy guard

Even if the function follows the best practice of check-effects-interaction, not using a reentrancy guard when there may be transfer hooks opens the users of this protocol up to [read-only reentrancy vulnerability](https://chainsecurity.com/curve-lp-oracle-manipulation-post-mortem/) with no way to protect them except by block-listing the entire protocol.

There is 1 instance:

- *BondingManager.sol* ( [#L285](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L285) ):

```solidity
/// @audit function `withdrawFees()`
285:         minter().trustedWithdrawETH(_recipient, _amount);
```

### <a name="L-2"></a>[L-2] Initializers can be front-run

Initializers could be front-run, allowing an attacker to either set their own values, take ownership of the contract, and in the best case forcing a re-deployment.

There are 2 instances:

- *LivepeerGovernor.sol* ( [#L54](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L54) ):

```solidity
54:     function initialize(
```

- *Treasury.sol* ( [#L16](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16) ):

```solidity
16:     function initialize(
```

### <a name="L-3"></a>[L-3] Upgradable contracts need a constructor to lock the implementation contract when it is deployed

An uninitialized contract can be taken over by an attacker. For an upgradable contract, this applies to both the proxy and its implementation contract, which may impact the proxy.
To prevent the implementation contract from being used, we should trigger the initialization in the constructor to automatically lock it when it is deployed.
For contracts that inherit `Initializable`, the `_disableInitializers()` function [is suggested to do this job](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/blob/4d9d9073b84f56fe3eea360e5067c6ffd864c43d/contracts/proxy/utils/Initializable.sol#L43-L56).

There are 2 instances:

- *GovernorCountingOverridable.sol* ( [#L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L21) ):

```solidity
/// @audit Missing constructor to initialize the implementation contract
21: abstract contract GovernorCountingOverridable is Initializable, GovernorUpgradeable {
```

- *Treasury.sol* ( [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L15) ):

```solidity
/// @audit Missing constructor to initialize the implementation contract
15: contract Treasury is Initializable, TimelockControllerUpgradeable {
```

### <a name="L-4"></a>[L-4] Missing storage gap for upgradable contracts

Each upgradable contract should include a state variable (usually named `__gap`) to provide reserved space in storage. This allows the team to freely add new state variables in the future upgrades without compromising the storage compatibility with existing deployments.

There are 2 instances:

- *LivepeerGovernor.sol* ( [#L26](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L26) ):

```solidity
26: contract LivepeerGovernor is
```

- *Treasury.sol* ( [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L15) ):

```solidity
15: contract Treasury is Initializable, TimelockControllerUpgradeable {
```

### <a name="L-5"></a>[L-5] Missing zero address check in initializer

There are 3 instances:

- *Treasury.sol* ( [#L16-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16-L21) ):

```solidity
/// @audit `proposers not checked`
/// @audit `executors not checked`
/// @audit `admin not checked`
16:     function initialize(
17:         uint256 minDelay,
18:         address[] memory proposers,
19:         address[] memory executors,
20:         address admin
21:     ) external initializer {
```

### <a name="L-6"></a>[L-6] prevent re-setting a state variable with the same value

Not only is wasteful in terms of gas, but this is especially problematic when an event is emitted and the old and new values set are the same, as listeners might not expect this kind of scenario.

There are 4 instances:

- *BondingManager.sol* ( [#L156](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L156), [#L177](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L177), [#L463](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L463), [#L1179](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1179) ):

```solidity
156:         unbondingPeriod = _unbondingPeriod;

177:         treasuryBalanceCeiling = _ceiling;

463:         currentRoundTotalActiveStake = nextRoundTotalActiveStake;

1179:         nextRoundTreasuryRewardCutRate = _cutRate;
```

### <a name="L-7"></a>[L-7] Solidity version 0.8.20 or above may not work on other chains due to PUSH0

Solidity version 0.8.20 or above uses the new [Shanghai EVM](https://blog.soliditylang.org/2023/05/10/solidity-0.8.20-release-announcement/#important-note) which introduces the PUSH0 opcode. This op code may not yet be implemented on all evm-chains or Layer2s, so deployment on these chains will fail. Consider using an earlier solidity version.

There is 1 instance:

- *IBondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L2) ):

```solidity
2: pragma solidity ^0.8.9;
```

### <a name="L-8"></a>[L-8] State variables not capped at reasonable values

Consider adding appropriate minimum/maximum value checks to ensure that the following state variables can never be used to excessively harm users, including via griefing.

There are 8 instances:

- *BondingManager.sol* ( [#L156](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L156), [#L463](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L463), [#L466](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L466), [#L1325](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1325), [#L1368](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1368), [#L1430](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1430), [#L1443](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1443) ):

```solidity
156:         unbondingPeriod = _unbondingPeriod;

463:         currentRoundTotalActiveStake = nextRoundTotalActiveStake;

466:             treasuryRewardCutRate = nextRoundTreasuryRewardCutRate;

1325:                 nextRoundTotalActiveStake = nextRoundTotalActiveStake.add(_amount);

1368:             nextRoundTotalActiveStake = nextRoundTotalActiveStake.sub(_amount);

1430:         nextRoundTotalActiveStake = pendingNextRoundTotalActiveStake;

1443:         nextRoundTotalActiveStake = nextRoundTotalActiveStake.sub(transcoderTotalStake(_transcoder));
```

- *GovernorCountingOverridable.sol* ( [#L69](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L69) ):

```solidity
69:         quota = _quota;
```

### <a name="L-9"></a>[L-9] Code does not follow the best practice of check-effects-interaction

Code should follow the best-practice of [check-effects-interaction](https://blockchain-academy.hs-mittweida.de/courses/solidity-coding-beginners-to-intermediate/lessons/solidity-11-coding-patterns/topic/checks-effects-interactions/), where state variables are updated before any external calls are made. Doing so prevents a large class of reentrancy bugs.

There are 5 instances:

- *BondingManager.sol* ( [#L897](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L897) ):

```solidity
/// @audit createReward() is called before this
897:         t.lastRewardRound = currentRound;
```

- *GovernorCountingOverridable.sol* ( [#L193](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L193), [#L202](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L202), [#L204](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L204), [#L207](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L207) ):

```solidity
/// @audit delegatedAt() is called before this
193:         delegateVoter.deductions += _weight;

/// @audit delegatedAt() is called before this
202:                 _tally.againstVotes -= _weight;

/// @audit delegatedAt() is called before this
204:                 _tally.forVotes -= _weight;

/// @audit delegatedAt() is called before this
207:                 _tally.abstainVotes -= _weight;
```

### <a name="L-10"></a>[L-10] Vulnerable versions of packages are being used

This project is using specific package versions which are vulnerable to the specific CVEs listed below. Consider switching to more recent versions of these packages that don't have these vulnerabilities.

- [CVE-2023-40014](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-40014) - **MEDIUM** - (`@openzeppelin/contracts >=4.0.0 <4.9.3`): OpenZeppelin Contracts is a library for secure smart contract development. Starting in version 4.0.0 and prior to version 4.9.3, contracts using `ERC2771Context` along with a custom trusted forwarder may see `_msgSender` return `address(0)` in calls that originate from the forwarder with calldata shorter than 20 bytes. This combination of circumstances does not appear to be common, in particular it is not the case for `MinimalForwarder` from OpenZeppelin Contracts, or any deployed forwarder the team is aware of, given that the signer address is appended to all calls that originate from these forwarders. The problem has been patched in v4.9.3.

- [CVE-2023-40014](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2023-40014) - **MEDIUM** - (`@openzeppelin/contracts-upgradeable >=4.0.0 <4.9.3`): OpenZeppelin Contracts is a library for secure smart contract development. Starting in version 4.0.0 and prior to version 4.9.3, contracts using `ERC2771Context` along with a custom trusted forwarder may see `_msgSender` return `address(0)` in calls that originate from the forwarder with calldata shorter than 20 bytes. This combination of circumstances does not appear to be common, in particular it is not the case for `MinimalForwarder` from OpenZeppelin Contracts, or any deployed forwarder the team is aware of, given that the signer address is appended to all calls that originate from these forwarders. The problem has been patched in v4.9.3.

There are 2 instances:

- Global finding

### <a name="L-11"></a>[L-11] Governance functions should be controlled by time locks

Governance functions (such as upgrading contracts, setting critical parameters) should be controlled using time locks to introduce a delay between a proposal and its execution. This gives users time to exit before a potentially dangerous or malicious operation is applied.

There are 4 instances:

- *BondingManager.sol* ( [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L155), [#L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L167), [#L176](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L176), [#L186](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L186) ):

```solidity
155:     function setUnbondingPeriod(uint64 _unbondingPeriod) external onlyControllerOwner {

167:     function setTreasuryRewardCutRate(uint256 _cutRate) external onlyControllerOwner {

176:     function setTreasuryBalanceCeiling(uint256 _ceiling) external onlyControllerOwner {

186:     function setNumActiveTranscoders(uint256 _numActiveTranscoders) external onlyControllerOwner {
```

### <a name="L-12"></a>[L-12] The fees/rates should be capped by smart contracts

The fees/rates should be required to be less than 100%, preferably at a much lower limit, so that users don't have to monitor the blockchain for changes when using the protocol.

There is 1 instance:

- *BondingManager.sol* ( [#L466](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L466) ):

```solidity
466:             treasuryRewardCutRate = nextRoundTreasuryRewardCutRate;
```

### <a name="L-13"></a>[L-13] Using zero as a parameter

Taking `0` as a valid argument in Solidity without checks can lead to severe security issues. A historical example is the infamous `0x0` address bug where numerous tokens were lost. This happens because `0` can be interpreted as an uninitialized `address`, leading to transfers to the `0x0` `address`, effectively burning tokens. Moreover, `0` as a denominator in division operations would cause a runtime exception. It's also often indicative of a logical error in the caller's code. It's important to always validate input and handle edge cases like `0` appropriately. Use `require()` statements to enforce conditions and provide clear error messages to facilitate debugging and safer code.

There are 20 instances:

- *BondingManager.sol* ( [#L199](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L199), [#L208](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L208), [#L216](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L216), [#L224](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L224), [#L233](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L233), [#L294](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L294), [#L436](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L436), [#L439](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L439), [#L875](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L875) ):

```solidity
199:         transcoderWithHint(_rewardCut, _feeShare, address(0), address(0));

208:         bondWithHint(_amount, _to, address(0), address(0), address(0), address(0));

216:         unbondWithHint(_amount, address(0), address(0));

224:         rebondWithHint(_unbondingLockId, address(0), address(0));

233:         rebondFromUnbondedWithHint(_to, _unbondingLockId, address(0), address(0));

294:         rewardWithHint(address(0), address(0));

436:                 emit TranscoderSlashed(_transcoder, address(0), penalty, 0);

439:             emit TranscoderSlashed(_transcoder, _finder, 0, 0);

875:                 _setTreasuryRewardCutRate(0);
```

- *BondingVotes.sol* ( [#L480-L485](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L480-L485) ):

```solidity
480:         (uint256 stakeWithRewards, ) = EarningsPoolLIP36.delegatorCumulativeStakeAndFees(
481:             startPool,
482:             endPool,
483:             bond.bondedAmount,
484:             0
485:         );
```

### <a name="L-14"></a>[L-14] Constructor / initialization function lacks parameter validation

Constructors and initialization functions play a critical role in contracts by setting important initial states when the contract is first deployed before the system starts. The parameters passed to the constructor and initialization functions directly affect the behavior of the contract / protocol. If incorrect parameters are provided, the system may fail to run, behave abnormally, be unstable, or lack security. Therefore, it's crucial to carefully check each parameter in the constructor and initialization functions. If an exception is found, the transaction should be rolled back.

There are 9 instances:

- *LivepeerGovernor.sol* ( [#L54-L60](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L54-L60) ):

```solidity
/// @audit `initialVotingDelay` not validated
/// @audit `initialVotingPeriod` not validated
/// @audit `initialProposalThreshold` not validated
/// @audit `initialQuorum` not validated
/// @audit `quota` not validated
54:     function initialize(
55:         uint256 initialVotingDelay,
56:         uint256 initialVotingPeriod,
57:         uint256 initialProposalThreshold,
58:         uint256 initialQuorum,
59:         uint256 quota
60:     ) public initializer {
```

- *Treasury.sol* ( [#L16-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16-L21) ):

```solidity
/// @audit `minDelay` not validated
/// @audit `proposers` not validated
/// @audit `executors` not validated
/// @audit `admin` not validated
16:     function initialize(
17:         uint256 minDelay,
18:         address[] memory proposers,
19:         address[] memory executors,
20:         address admin
21:     ) external initializer {
```

## Non Critical Issues

### <a name="N-1"></a>[N-1] Consider moving `msg.sender` checks to `modifier`s

If some functions are only allowed to be called by some specific users, consider using a modifier instead of checking with a require statement, especially if this check is done in multiple functions.

There are 12 instances:

- *BondingManager.sol* ( [#L253](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L253), [#L494](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L494), [#L499-L502](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L499-L502), [#L750](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L750), [#L801](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L801), [#L824](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L824), [#L850](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L850), [#L851-L854](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L851-L854), [#L1652](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1652), [#L1656](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1656), [#L1660](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1660) ):

```solidity
253:         require(isValidUnbondingLock(msg.sender, _unbondingLockId), "invalid unbonding lock ID");

494:         require(isRegisteredTranscoder(msg.sender), "transcoder must be registered");

499:         require(
500:             !isActiveTranscoder(msg.sender) || t.lastRewardRound == currentRound,
501:             "caller can't be active or must have already called reward for the current round"
502:         );

750:         require(delegatorStatus(msg.sender) == DelegatorStatus.Bonded, "caller must be bonded");

801:         require(delegatorStatus(msg.sender) != DelegatorStatus.Unbonded, "caller must be bonded");

824:         require(delegatorStatus(msg.sender) == DelegatorStatus.Unbonded, "caller must be unbonded");

850:         require(isActiveTranscoder(msg.sender), "caller must be an active transcoder");

851:         require(
852:             transcoders[msg.sender].lastRewardRound != currentRound,
853:             "caller has already called reward for the current round"
854:         );

1652:         require(msg.sender == controller.getContract(keccak256("TicketBroker")), "caller must be TicketBroker");

1656:         require(msg.sender == controller.getContract(keccak256("RoundsManager")), "caller must be RoundsManager");

1660:         require(msg.sender == controller.getContract(keccak256("Verifier")), "caller must be Verifier");
```

- *BondingVotes.sol* ( [#L554-L556](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L554-L556) ):

```solidity
554:         if (msg.sender != address(bondingManager())) {
555:             revert InvalidCaller(msg.sender, address(bondingManager()));
556:         }
```

### <a name="N-2"></a>[N-2] Custom errors has no error details

Consider adding parameters to the error to indicate which user or values caused the failure.

There is 1 instance:

- *GovernorCountingOverridable.sol* ( [#L23](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L23) ):

```solidity
23:     error VoteAlreadyCast();
```

### <a name="N-3"></a>[N-3] Import declarations should import specific identifiers, rather than the whole file

Using import declarations of the form `import {<identifier_name>} from "some/file.sol"` avoids polluting the symbol namespace making flattened files smaller, and speeds up compilation (but does not save any gas).

<details>
<summary>There are 52 instances (click to show):</summary>

- *BondingManager.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L4), [#L5](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L5), [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L6), [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L7), [#L8](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L8), [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L9), [#L10](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L10), [#L11](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L11), [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L12), [#L13](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L13), [#L14](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L14), [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L15), [#L17](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L17) ):

```solidity
4: import "../ManagerProxyTarget.sol";

5: import "./IBondingManager.sol";

6: import "../libraries/SortedDoublyLL.sol";

7: import "../libraries/MathUtils.sol";

8: import "../libraries/PreciseMathUtils.sol";

9: import "./libraries/EarningsPool.sol";

10: import "./libraries/EarningsPoolLIP36.sol";

11: import "../token/ILivepeerToken.sol";

12: import "../token/IMinter.sol";

13: import "../rounds/IRoundsManager.sol";

14: import "../snapshots/IMerkleSnapshot.sol";

15: import "./IBondingVotes.sol";

17: import "@openzeppelin/contracts/utils/math/SafeMath.sol";
```

- *BondingVotes.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L4), [#L5](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L5), [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L7), [#L8](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L8), [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L9), [#L11](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L11), [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L12), [#L13](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L13), [#L14](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L14) ):

```solidity
4: import "@openzeppelin/contracts/utils/Arrays.sol";

5: import "@openzeppelin/contracts/utils/math/SafeCast.sol";

7: import "./libraries/EarningsPool.sol";

8: import "./libraries/EarningsPoolLIP36.sol";

9: import "./libraries/SortedArrays.sol";

11: import "../ManagerProxyTarget.sol";

12: import "./IBondingVotes.sol";

13: import "./IBondingManager.sol";

14: import "../rounds/IRoundsManager.sol";
```

- *IBondingVotes.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L4) ):

```solidity
4: import "../treasury/IVotes.sol";
```

- *EarningsPoolLIP36.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L4), [#L5](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L5), [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L7) ):

```solidity
4: import "./EarningsPool.sol";

5: import "../../libraries/PreciseMathUtils.sol";

7: import "@openzeppelin/contracts/utils/math/SafeMath.sol";
```

- *SortedArrays.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L4), [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L6) ):

```solidity
4: import "../../libraries/MathUtils.sol";

6: import "@openzeppelin/contracts/utils/Arrays.sol";
```

- *GovernorCountingOverridable.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L4), [#L5](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L5), [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L6), [#L8](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L8), [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L9), [#L11](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L11), [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L12), [#L13](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L13), [#L14](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L14) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

5: import "@openzeppelin/contracts-upgradeable/governance/GovernorUpgradeable.sol";

6: import "@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol";

8: import "../bonding/libraries/EarningsPool.sol";

9: import "../bonding/libraries/EarningsPoolLIP36.sol";

11: import "../Manager.sol";

12: import "../IController.sol";

13: import "../rounds/IRoundsManager.sol";

14: import "./IVotes.sol";
```

- *IVotes.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L4) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol";
```

- *LivepeerGovernor.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L4), [#L5](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L5), [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L6), [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L7), [#L8](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L8), [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L9), [#L11](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L11), [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L12), [#L14](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L14), [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L15), [#L16](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L16), [#L17](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L17), [#L18](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L18) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

5: import "@openzeppelin/contracts-upgradeable/governance/GovernorUpgradeable.sol";

6: import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesUpgradeable.sol";

7: import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesQuorumFractionUpgradeable.sol";

8: import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorSettingsUpgradeable.sol";

9: import "@openzeppelin/contracts-upgradeable/governance/extensions/GovernorTimelockControlUpgradeable.sol";

11: import "../bonding/libraries/EarningsPool.sol";

12: import "../bonding/libraries/EarningsPoolLIP36.sol";

14: import "../ManagerProxyTarget.sol";

15: import "../IController.sol";

16: import "../rounds/IRoundsManager.sol";

17: import "./GovernorCountingOverridable.sol";

18: import "./Treasury.sol";
```

- *Treasury.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L4) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol";
```

</details>

### <a name="N-4"></a>[N-4] Visibility of state variables is not explicitly defined

To avoid misunderstandings and unexpected state accesses, it is recommended to explicitly define the visibility of each state variable.

There is 1 instance:

- *BondingManager.sol* ( [#L32](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L32) ):

```solidity
32:     uint256 constant MAX_FUTURE_ROUND = 2**256 - 1;
```

### <a name="N-5"></a>[N-5] Too long functions should be refactored

Functions with too many lines are difficult to understand. It is recommended to refactor complex functions into multiple shorter and easier to understand functions.

There are 5 instances:

- *BondingManager.sol* ( [#L302](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L302), [#L537](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L537), [#L679](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L679), [#L842](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L842), [#L1500](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1500) ):

```solidity
/// @audit 84 lines
302:     function updateTranscoderWithFees(

/// @audit 87 lines
537:     function bondForWithHint(

/// @audit 56 lines
679:     function transferBond(

/// @audit 59 lines
842:     function rewardWithHint(address _newPosPrev, address _newPosNext)

/// @audit 55 lines
1500:     function updateDelegatorWithEarnings(
```

### <a name="N-6"></a>[N-6] Redundant inheritance specifier

The contracts below already extend the specified contract, so there is no need to list it in the inheritance list again.

There are 5 instances:

- *GovernorCountingOverridable.sol* ( [#L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L21) ):

```solidity
/// @audit GovernorUpgradeable already extends Initializable
21: abstract contract GovernorCountingOverridable is Initializable, GovernorUpgradeable {
```

- *LivepeerGovernor.sol* ( [#L26-L34](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L26-L34) ):

```solidity
/// @audit GovernorUpgradeable already extends Initializable
/// @audit GovernorSettingsUpgradeable already extends GovernorUpgradeable
/// @audit GovernorVotesQuorumFractionUpgradeable already extends GovernorVotesUpgradeable
26: contract LivepeerGovernor is
27:     ManagerProxyTarget,
28:     Initializable,
29:     GovernorUpgradeable,
30:     GovernorSettingsUpgradeable,
31:     GovernorTimelockControlUpgradeable,
32:     GovernorVotesUpgradeable,
33:     GovernorVotesQuorumFractionUpgradeable,
34:     GovernorCountingOverridable
```

- *Treasury.sol* ( [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L15) ):

```solidity
/// @audit TimelockControllerUpgradeable already extends Initializable
15: contract Treasury is Initializable, TimelockControllerUpgradeable {
```

### <a name="N-7"></a>[N-7] Variables should be named in mixedCase style

As the [Solidity Style Guide](https://docs.soliditylang.org/en/latest/style-guide.html#naming-styles) suggests: arguments, local variables and mutable state variables should be named in mixedCase style.

There is 1 instance:

- *GovernorCountingOverridable.sol* ( [#L224](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L224) ):

```solidity
/// @audit __gap
224:     uint256[48] private __gap;
```

### <a name="N-8"></a>[N-8] Names of `private`/`internal` functions should be prefixed with an underscore

It is recommended by the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#underscore-prefix-for-non-external-functions-and-variables).

<details>
<summary>There are 32 instances (click to show):</summary>

- *BondingManager.sol* ( [#L1189-L1192](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1189-L1192), [#L1206-L1209](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1206-L1209), [#L1238-L1244](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1238-L1244), [#L1259-L1262](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1259-L1262), [#L1294-L1299](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1294-L1299), [#L1307-L1312](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1307-L1312), [#L1352-L1357](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1352-L1357), [#L1392-L1398](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1392-L1398), [#L1437](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1437), [#L1459-L1465](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1459-L1465), [#L1500-L1504](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1500-L1504), [#L1564-L1569](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1564-L1569), [#L1615](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1615), [#L1623](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1623), [#L1631](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1631), [#L1639](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1639), [#L1643](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1643), [#L1647](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1647) ):

```solidity
1189:     function cumulativeFactorsPool(Transcoder storage _transcoder, uint256 _round)
1190:         internal
1191:         view
1192:         returns (EarningsPool.Data memory pool)

1206:     function latestCumulativeFactorsPool(Transcoder storage _transcoder, uint256 _round)
1207:         internal
1208:         view
1209:         returns (EarningsPool.Data memory pool)

1238:     function delegatorCumulativeStakeAndFees(
1239:         Transcoder storage _transcoder,
1240:         uint256 _startRound,
1241:         uint256 _endRound,
1242:         uint256 _stake,
1243:         uint256 _fees
1244:     ) internal view returns (uint256 cStake, uint256 cFees) {

1259:     function pendingStakeAndFees(address _delegator, uint256 _endRound)
1260:         internal
1261:         view
1262:         returns (uint256 stake, uint256 fees)

1294:     function increaseTotalStake(
1295:         address _delegate,
1296:         uint256 _amount,
1297:         address _newPosPrev,
1298:         address _newPosNext
1299:     ) internal autoCheckpoint(_delegate) {

1307:     function increaseTotalStakeUncheckpointed(
1308:         address _delegate,
1309:         uint256 _amount,
1310:         address _newPosPrev,
1311:         address _newPosNext
1312:     ) internal {

1352:     function decreaseTotalStake(
1353:         address _delegate,
1354:         uint256 _amount,
1355:         address _newPosPrev,
1356:         address _newPosNext
1357:     ) internal autoCheckpoint(_delegate) {

1392:     function tryToJoinActiveSet(
1393:         address _transcoder,
1394:         uint256 _totalStake,
1395:         uint256 _activationRound,
1396:         address _newPosPrev,
1397:         address _newPosNext
1398:     ) internal {

1437:     function resignTranscoder(address _transcoder) internal {

1459:     function updateTranscoderWithRewards(
1460:         address _transcoder,
1461:         uint256 _rewards,
1462:         uint256 _round,
1463:         address _newPosPrev,
1464:         address _newPosNext
1465:     ) internal {

1500:     function updateDelegatorWithEarnings(
1501:         address _delegator,
1502:         uint256 _endRound,
1503:         uint256 _lastClaimRound
1504:     ) internal {

1564:     function processRebond(
1565:         address _delegator,
1566:         uint256 _unbondingLockId,
1567:         address _newPosPrev,
1568:         address _newPosNext
1569:     ) internal autoCheckpoint(_delegator) {

1615:     function livepeerToken() internal view returns (ILivepeerToken) {

1623:     function minter() internal view returns (IMinter) {

1631:     function l2Migrator() internal view returns (address) {

1639:     function roundsManager() internal view returns (IRoundsManager) {

1643:     function treasury() internal view returns (address) {

1647:     function bondingVotes() internal view returns (IBondingVotes) {
```

- *BondingVotes.sol* ( [#L387-L391](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L387-L391), [#L422-L425](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L422-L425), [#L459-L462](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L459-L462), [#L499-L502](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L499-L502), [#L520-L523](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L520-L523), [#L539](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L539), [#L546](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L546) ):

```solidity
387:     function onBondingCheckpointChanged(
388:         address _account,
389:         BondingCheckpoint memory previous,
390:         BondingCheckpoint memory current
391:     ) internal {

422:     function getBondingCheckpointAt(address _account, uint256 _round)
423:         internal
424:         view
425:         returns (BondingCheckpoint storage)

459:     function delegatorCumulativeStakeAt(BondingCheckpoint storage bond, uint256 _round)
460:         internal
461:         view
462:         returns (uint256)

499:     function getLastTranscoderRewardsEarningsPool(address _transcoder, uint256 _round)
500:         internal
501:         view
502:         returns (uint256 rewardRound, EarningsPool.Data memory pool)

520:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
521:         internal
522:         view
523:         returns (EarningsPool.Data memory pool)

539:     function bondingManager() internal view returns (IBondingManager) {

546:     function roundsManager() internal view returns (IRoundsManager) {
```

- *EarningsPoolLIP36.sol* ( [#L18-L22](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L18-L22), [#L47-L51](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L47-L51), [#L71-L76](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L71-L76) ):

```solidity
18:     function updateCumulativeFeeFactor(
19:         EarningsPool.Data storage earningsPool,
20:         EarningsPool.Data memory _prevEarningsPool,
21:         uint256 _fees
22:     ) internal {

47:     function updateCumulativeRewardFactor(
48:         EarningsPool.Data storage earningsPool,
49:         EarningsPool.Data memory _prevEarningsPool,
50:         uint256 _rewards
51:     ) internal {

71:     function delegatorCumulativeStakeAndFees(
72:         EarningsPool.Data memory _startPool,
73:         EarningsPool.Data memory _endPool,
74:         uint256 _stake,
75:         uint256 _fees
76:     ) internal pure returns (uint256 cStake, uint256 cFees) {
```

- *SortedArrays.sol* ( [#L28](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L28), [#L64](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L64) ):

```solidity
28:     function findLowerBound(uint256[] storage _array, uint256 _val) internal view returns (uint256) {

64:     function pushSorted(uint256[] storage array, uint256 val) internal {
```

- *LivepeerGovernor.sol* ( [#L101](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L101), [#L108](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L108) ):

```solidity
101:     function bondingVotes() internal view returns (IVotes) {

108:     function treasury() internal view returns (Treasury) {
```

</details>

### <a name="N-9"></a>[N-9] Names of `private`/`internal` state variables should be prefixed with an underscore

It is recommended by the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#underscore-prefix-for-non-external-functions-and-variables).

There are 6 instances:

- *BondingManager.sol* ( [#L32](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L32), [#L84](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L84), [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L85), [#L95](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L95) ):

```solidity
32:     uint256 constant MAX_FUTURE_ROUND = 2**256 - 1;

84:     mapping(address => Delegator) private delegators;

85:     mapping(address => Transcoder) private transcoders;

95:     SortedDoublyLL.Data private transcoderPool;
```

- *BondingVotes.sol* ( [#L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L78), [#L82](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L82) ):

```solidity
78:     mapping(address => BondingCheckpointsByRound) private bondingCheckpoints;

82:     TotalActiveStakeByRound private totalStakeCheckpoints;
```

### <a name="N-10"></a>[N-10] Order of functions does not follow the Solidity Style Guide

According to the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#order-of-functions), functions should be grouped according to their visibility and ordered: `constructor`, `receive`, `fallback`, `external`, `public`, `internal`, `private`. Within a grouping, place the view and pure functions last.

<details>
<summary>There are 21 instances (click to show):</summary>

- *BondingManager.sol* ( [#L1259-L1262](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1259-L1262), [#L1294-L1299](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1294-L1299), [#L1307-L1312](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1307-L1312), [#L1352-L1357](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1352-L1357), [#L1392-L1398](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1392-L1398), [#L1437](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1437), [#L1459-L1465](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1459-L1465), [#L1500-L1504](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1500-L1504), [#L1564-L1569](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1564-L1569), [#L1591-L1595](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1591-L1595), [#L1663](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1663), [#L1667](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1667) ):

```solidity
/// @audit ↓↓ Out of order with `increaseTotalStake()`
1259:     function pendingStakeAndFees(address _delegator, uint256 _endRound)
1260:         internal
1261:         view
1262:         returns (uint256 stake, uint256 fees)

/// @audit ↑↑ Out of order with `pendingStakeAndFees()`
1294:     function increaseTotalStake(
1295:         address _delegate,
1296:         uint256 _amount,
1297:         address _newPosPrev,
1298:         address _newPosNext
1299:     ) internal autoCheckpoint(_delegate) {

/// @audit ↑↑ Out of order with `increaseTotalStake()`
1307:     function increaseTotalStakeUncheckpointed(
1308:         address _delegate,
1309:         uint256 _amount,
1310:         address _newPosPrev,
1311:         address _newPosNext
1312:     ) internal {

/// @audit ↑↑ Out of order with `increaseTotalStakeUncheckpointed()`
1352:     function decreaseTotalStake(
1353:         address _delegate,
1354:         uint256 _amount,
1355:         address _newPosPrev,
1356:         address _newPosNext
1357:     ) internal autoCheckpoint(_delegate) {

/// @audit ↑↑ Out of order with `decreaseTotalStake()`
1392:     function tryToJoinActiveSet(
1393:         address _transcoder,
1394:         uint256 _totalStake,
1395:         uint256 _activationRound,
1396:         address _newPosPrev,
1397:         address _newPosNext
1398:     ) internal {

/// @audit ↑↑ Out of order with `tryToJoinActiveSet()`
1437:     function resignTranscoder(address _transcoder) internal {

/// @audit ↑↑ Out of order with `resignTranscoder()`
1459:     function updateTranscoderWithRewards(
1460:         address _transcoder,
1461:         uint256 _rewards,
1462:         uint256 _round,
1463:         address _newPosPrev,
1464:         address _newPosNext
1465:     ) internal {

/// @audit ↑↑ Out of order with `updateTranscoderWithRewards()`
1500:     function updateDelegatorWithEarnings(
1501:         address _delegator,
1502:         uint256 _endRound,
1503:         uint256 _lastClaimRound
1504:     ) internal {

/// @audit ↑↑ Out of order with `updateDelegatorWithEarnings()`
1564:     function processRebond(
1565:         address _delegator,
1566:         uint256 _unbondingLockId,
1567:         address _newPosPrev,
1568:         address _newPosNext
1569:     ) internal autoCheckpoint(_delegator) {

/// @audit ↑↑ Out of order with `processRebond()`
1591:     function _checkpointBondingState(
1592:         address _owner,
1593:         Delegator storage _delegator,
1594:         Transcoder storage _transcoder
1595:     ) internal {

/// @audit ↓↓ Out of order with `_autoClaimEarnings()`
1663:     function _currentRoundInitialized() internal view {

/// @audit ↑↑ Out of order with `_currentRoundInitialized()`
1667:     function _autoClaimEarnings(address _delegator) internal {
```

- *BondingVotes.sol* ( [#L137](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L137), [#L145](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L145), [#L233-L240](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L233-L240), [#L258-L266](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L258-L266), [#L303](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L303) ):

```solidity
/// @audit ↓↓ Out of order with `CLOCK_MODE()`
137:     function clock() public view returns (uint48) {

/// @audit ↑↑ Out of order with `clock()`
145:     function CLOCK_MODE() external pure returns (string memory) {

/// @audit ↓↓ Out of order with `checkpointBondingState()`
233:     function delegateBySig(
234:         address,
235:         uint256,
236:         uint256,
237:         uint8,
238:         bytes32,
239:         bytes32
240:     ) external pure {

/// @audit ↑↑ Out of order with `delegateBySig()`
258:     function checkpointBondingState(
259:         address _account,
260:         uint256 _startRound,
261:         uint256 _bondedAmount,
262:         address _delegateAddress,
263:         uint256 _delegatedAmount,
264:         uint256 _lastClaimRound,
265:         uint256 _lastRewardRound
266:     ) external virtual onlyBondingManager {

/// @audit ↑↑ Out of order with `checkpointBondingState()`
303:     function checkpointTotalActiveStake(uint256 _totalStake, uint256 _round) external virtual onlyBondingManager {
```

- *GovernorCountingOverridable.sol* ( [#L68](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L68), [#L76](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L76), [#L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L118), [#L130-L136](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L130-L136), [#L174-L180](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L174-L180), [#L217](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L217) ):

```solidity
/// @audit ↓↓ Out of order with `COUNTING_MODE()`
68:     function __GovernorCountingOverridable_init_unchained(uint256 _quota) internal onlyInitializing {

/// @audit ↑↑ Out of order with `__GovernorCountingOverridable_init_unchained()`
76:     function COUNTING_MODE() public pure virtual override returns (string memory) {

/// @audit ↓↓ Out of order with `_countVote()`
118:     function _voteSucceeded(uint256 _proposalId) internal view virtual override returns (bool) {

/// @audit ↑↑ Out of order with `_voteSucceeded()`
130:     function _countVote(
131:         uint256 _proposalId,
132:         address _account,
133:         uint8 _supportInt,
134:         uint256 _weight,
135:         bytes memory // params
136:     ) internal virtual override {

/// @audit ↑↑ Out of order with `_countVote()`
174:     function _handleVoteOverrides(
175:         uint256 _proposalId,
176:         ProposalTally storage _tally,
177:         ProposalVoterState storage _voter,
178:         address _account,
179:         uint256 _weight
180:     ) internal returns (uint256) {

/// @audit ↑↑ Out of order with `_handleVoteOverrides()`
217:     function votes() public view virtual returns (IVotes);
```

- *LivepeerGovernor.sol* ( [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L85), [#L94](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L94), [#L108](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L108), [#L114-L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L114-L118), [#L132-L138](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L132-L138), [#L142-L147](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L142-L147), [#L151-L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L151-L155), [#L160-L164](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L160-L164) ):

```solidity
/// @audit ↓↓ Out of order with `bumpGovernorVotesTokenAddress()`
85:     function votes() public view override returns (IVotes) {

/// @audit ↑↑ Out of order with `votes()`
94:     function bumpGovernorVotesTokenAddress() external {

/// @audit ↓↓ Out of order with `proposalThreshold()`
108:     function treasury() internal view returns (Treasury) {

/// @audit ↑↑ Out of order with `treasury()`
114:     function proposalThreshold()
115:         public
116:         view
117:         override(GovernorUpgradeable, GovernorSettingsUpgradeable)
118:         returns (uint256)

/// @audit ↓↓ Out of order with `_cancel()`
132:     function _execute(
133:         uint256 proposalId,
134:         address[] memory targets,
135:         uint256[] memory values,
136:         bytes[] memory calldatas,
137:         bytes32 descriptionHash
138:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) {

/// @audit ↑↑ Out of order with `_execute()`
142:     function _cancel(
143:         address[] memory targets,
144:         uint256[] memory values,
145:         bytes[] memory calldatas,
146:         bytes32 descriptionHash
147:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (uint256) {

/// @audit ↓↓ Out of order with `supportsInterface()`
151:     function _executor()
152:         internal
153:         view
154:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
155:         returns (address)

/// @audit ↑↑ Out of order with `_executor()`
160:     function supportsInterface(bytes4 interfaceId)
161:         public
162:         view
163:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
164:         returns (bool)
```

</details>

### <a name="N-11"></a>[N-11] Custom errors should be used rather than `revert()`/`require()`

Custom errors are available from solidity version 0.8.4. Custom errors are more easily processed in try-catch blocks, and are easier to re-use and maintain.

<details>
<summary>There are 28 instances (click to show):</summary>

- *BondingManager.sol* ( [#L253](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L253), [#L254-L257](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L254-L257), [#L279](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L279), [#L281](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L281), [#L310](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L310), [#L491](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L491), [#L492](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L492), [#L493](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L493), [#L494](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L494), [#L499-L502](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L499-L502), [#L563](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L563), [#L565](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L565), [#L582](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L582), [#L606](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L606), [#L722](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L722), [#L750](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L750), [#L754](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L754), [#L755](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L755), [#L801](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L801), [#L824](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L824), [#L850](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L850), [#L851-L854](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L851-L854), [#L1177](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1177), [#L1573](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1573), [#L1652](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1652), [#L1656](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1656), [#L1660](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1660), [#L1664](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1664) ):

```solidity
253:         require(isValidUnbondingLock(msg.sender, _unbondingLockId), "invalid unbonding lock ID");

254:         require(
255:             lock.withdrawRound <= roundsManager().currentRound(),
256:             "withdraw round must be before or equal to the current round"
257:         );

279:         require(_recipient != address(0), "invalid recipient");

281:         require(fees >= _amount, "insufficient fees to withdraw");

310:         require(isRegisteredTranscoder(_transcoder), "transcoder must be registered");

491:         require(!roundsManager().currentRoundLocked(), "can't update transcoder params, current round is locked");

492:         require(MathUtils.validPerc(_rewardCut), "invalid rewardCut percentage");

493:         require(MathUtils.validPerc(_feeShare), "invalid feeShare percentage");

494:         require(isRegisteredTranscoder(msg.sender), "transcoder must be registered");

499:         require(
500:             !isActiveTranscoder(msg.sender) || t.lastRewardRound == currentRound,
501:             "caller can't be active or must have already called reward for the current round"
502:         );

563:                 require(_to != _owner, "INVALID_DELEGATE");

565:                 require(currentDelegate == _to, "INVALID_DELEGATE_CHANGE");

582:             require(!isRegisteredTranscoder(_owner), "registered transcoders can't delegate towards other addresses");

606:         require(delegationAmount > 0, "delegation amount must be greater than 0");

722:             require(oldDelDelegate != _delegator, "INVALID_DELEGATOR");

750:         require(delegatorStatus(msg.sender) == DelegatorStatus.Bonded, "caller must be bonded");

754:         require(_amount > 0, "unbond amount must be greater than 0");

755:         require(_amount <= del.bondedAmount, "amount is greater than bonded amount");

801:         require(delegatorStatus(msg.sender) != DelegatorStatus.Unbonded, "caller must be bonded");

824:         require(delegatorStatus(msg.sender) == DelegatorStatus.Unbonded, "caller must be unbonded");

850:         require(isActiveTranscoder(msg.sender), "caller must be an active transcoder");

851:         require(
852:             transcoders[msg.sender].lastRewardRound != currentRound,
853:             "caller has already called reward for the current round"
854:         );

1177:         require(PreciseMathUtils.validPerc(_cutRate), "_cutRate is invalid precise percentage");

1573:         require(isValidUnbondingLock(_delegator, _unbondingLockId), "invalid unbonding lock ID");

1652:         require(msg.sender == controller.getContract(keccak256("TicketBroker")), "caller must be TicketBroker");

1656:         require(msg.sender == controller.getContract(keccak256("RoundsManager")), "caller must be RoundsManager");

1660:         require(msg.sender == controller.getContract(keccak256("Verifier")), "caller must be Verifier");

1664:         require(roundsManager().currentRoundInitialized(), "current round is not initialized");
```

</details>

### <a name="N-12"></a>[N-12] `assert()` should be replaced with `require()` or `revert()`

In versions of Solidity prior to 0.8.0, when encountering an assert all the remaining gas will be consumed.
Even after solidity 0.8.0, the assert function is still not recommended, as described in the [documentation](https://docs.soliditylang.org/en/v0.8.20/control-structures.html#panic-via-assert-and-error-via-require):
> Assert should only be used to test for internal errors, and to check invariants. Properly functioning code should never create a Panic, not even on invalid external input. If this happens, then there is a bug in your contract which you should fix.

There are 2 instances:

- *SortedArrays.sol* ( [#L41](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L41) ):

```solidity
41:         assert(upperIdx < len);
```

- *GovernorCountingOverridable.sol* ( [#L206](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L206) ):

```solidity
206:                 assert(delegateSupport == VoteType.Abstain);
```

### <a name="N-13"></a>[N-13] Duplicated `require()`/`revert()` checks should be refactored

Refactoring duplicate `require()`/`revert()` checks into a modifier or function can make the code more concise, readable and maintainable, and less likely to make errors or omissions when modifying the `require()` or `revert()`.

There are 2 instances:

- *BondingVotes.sol* ( [#L327](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L327) ):

```solidity
/// @audit Duplicated on line 428
327:             revert FutureLookup(_round, clock() + 1);
```

### <a name="N-14"></a>[N-14] Convert simple `if`-statements to ternary expressions

Converting some if statements to ternaries (such as `z = (a < b) ? x : y`) can make the code more concise and easier to read.

There is 1 instance:

- *BondingVotes.sol* ( [#L374-L381](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L374-L381) ):

```solidity
374:         } else if (isTranscoder) {
375:             // Address is a registered transcoder so we use its delegated amount. This includes self and delegated stake
376:             // as well as any accrued rewards, even unclaimed ones
377:             amount = bond.delegatedAmount;
378:         } else {
379:             // Address is NOT a registered transcoder so we calculate its cumulative stake for the voting power
380:             amount = delegatorCumulativeStakeAt(bond, _round);
381:         }
```

### <a name="N-15"></a>[N-15] Avoid double casting

Double type casting should be avoided in Solidity contracts to prevent unintended consequences and ensure accurate data representation. Performing multiple type casts in succession can lead to unexpected truncation, rounding errors, or loss of precision, potentially compromising the contract's functionality and reliability. Furthermore, double type casting can make the code less readable and harder to maintain, increasing the likelihood of errors and misunderstandings during development and debugging. To ensure precise and consistent data handling, developers should use appropriate data types and avoid unnecessary or excessive type casting, promoting a more robust and dependable contract execution.

There is 1 instance:

- *LivepeerGovernor.sol* ( [#L109](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L109) ):

```solidity
109:         return Treasury(payable(controller.getContract(keccak256("Treasury"))));
```

### <a name="N-16"></a>[N-16] Events should be emitted before external calls

Ensure that events follow the best practice of check-effects-interaction, and are emitted before external calls.

There are 7 instances:

- *BondingManager.sol* ( [#L267](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L267), [#L287](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L287), [#L436](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L436), [#L439](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L439), [#L619](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L619), [#L889](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L889), [#L899](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L899) ):

```solidity
/// @audit trustedTransferTokens() is called before this emit
267:         emit WithdrawStake(msg.sender, _unbondingLockId, amount, withdrawRound);

/// @audit trustedWithdrawETH() is called before this emit
287:         emit WithdrawFees(msg.sender, _recipient, _amount);

/// @audit trustedBurnTokens() is called before this emit
436:                 emit TranscoderSlashed(_transcoder, address(0), penalty, 0);

/// @audit trustedBurnTokens() is called before this emit
439:             emit TranscoderSlashed(_transcoder, _finder, 0, 0);

/// @audit transferFrom() is called before this emit
619:         emit Bond(_to, currentDelegate, _owner, _amount, del.bondedAmount);

/// @audit createReward() is called before this emit
889:             emit TreasuryReward(msg.sender, trsry, treasuryRewards);

/// @audit createReward() is called before this emit
899:         emit Reward(msg.sender, transcoderRewards);
```

### <a name="N-17"></a>[N-17] Empty function body without comments

Empty function body in solidity is not recommended, at least add some comments to the body.

There are 2 instances:

- *BondingManager.sol* ( [#L149](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L149) ):

```solidity
149:     constructor(address _controller) Manager(_controller) {}
```

- *BondingVotes.sol* ( [#L107](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L107) ):

```solidity
107:     constructor(address _controller) Manager(_controller) {}
```

### <a name="N-18"></a>[N-18] Event is missing `indexed` fields

Index event fields makes the field more quickly accessible to [off-chain tools](https://ethereum.stackexchange.com/questions/40396/can-somebody-please-explain-the-concept-of-event-indexing) that parse events. However, note that each indexed field costs extra gas during emission, so it's not necessarily best to index the maximum allowed per event (three fields). Each event should use three indexed fields if there are three or more fields, and gas usage is not particularly of concern for the events in question. If there are fewer than three fields, all of the fields should be indexed.

There are 8 instances:

- *IBondingManager.sol* ( [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L12), [#L14](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L14), [#L22-L28](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L22-L28), [#L29](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L29), [#L30-L36](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L30-L36), [#L37](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L37), [#L38](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L38) ):

```solidity
12:     event TranscoderSlashed(address indexed transcoder, address finder, uint256 penalty, uint256 finderReward);

14:     event TreasuryReward(address indexed transcoder, address treasury, uint256 amount);

22:     event Unbond(
23:         address indexed delegate,
24:         address indexed delegator,
25:         uint256 unbondingLockId,
26:         uint256 amount,
27:         uint256 withdrawRound
28:     );

29:     event Rebond(address indexed delegate, address indexed delegator, uint256 unbondingLockId, uint256 amount);

30:     event TransferBond(
31:         address indexed oldDelegator,
32:         address indexed newDelegator,
33:         uint256 oldUnbondingLockId,
34:         uint256 newUnbondingLockId,
35:         uint256 amount
36:     );

37:     event WithdrawStake(address indexed delegator, uint256 unbondingLockId, uint256 amount, uint256 withdrawRound);

38:     event WithdrawFees(address indexed delegator, address recipient, uint256 amount);
```

- *IBondingVotes.sol* ( [#L27](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L27) ):

```solidity
27:     event DelegatorBondedAmountChanged(address indexed delegate, uint256 previousBondedAmount, uint256 newBondedAmount);
```

### <a name="N-19"></a>[N-19] Common functions should be refactored to a common base contract

The functions below have the same implementation as is seen in other files. The functions should be refactored into functions of a common base contract.

There are 2 instances:

- *BondingManager.sol* ( [#L1639-L1641](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1639-L1641) ):

```solidity
/// @audit Seen on line 546 in contracts/bonding/BondingVotes.sol
1639:     function roundsManager() internal view returns (IRoundsManager) {
1640:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));
1641:     }
```

- *BondingVotes.sol* ( [#L546-L548](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L546-L548) ):

```solidity
/// @audit Seen on line 1639 in contracts/bonding/BondingManager.sol
546:     function roundsManager() internal view returns (IRoundsManager) {
547:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));
548:     }
```

### <a name="N-20"></a>[N-20] Imports could be organized more systematically

The contract's interface should be imported first, followed by each of the interfaces it uses, followed by all other files. The examples below do not follow this layout.

There are 6 instances:

- *BondingManager.sol* ( [#L5](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L5), [#L11](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L11) ):

```solidity
/// @audit Out of order with the prev import️ ⬆
5: import "./IBondingManager.sol";

/// @audit Out of order with the prev import️ ⬆
11: import "../token/ILivepeerToken.sol";
```

- *BondingVotes.sol* ( [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L12) ):

```solidity
/// @audit Out of order with the prev import️ ⬆
12: import "./IBondingVotes.sol";
```

- *GovernorCountingOverridable.sol* ( [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L6), [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L12) ):

```solidity
/// @audit Out of order with the prev import️ ⬆
6: import "@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol";

/// @audit Out of order with the prev import️ ⬆
12: import "../IController.sol";
```

- *LivepeerGovernor.sol* ( [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L15) ):

```solidity
/// @audit Out of order with the prev import️ ⬆
15: import "../IController.sol";
```

### <a name="N-21"></a>[N-21] Lines are too long

The [solidity style guide](https://docs.soliditylang.org/en/v0.8.17/style-guide.html#maximum-line-length) recommends a maximum line length of 120 characters. Lines of code that are longer than 120 should be wrapped.

<details>
<summary>There are 71 instances (click to show):</summary>

- *BondingManager.sol* ( [#L47](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L47), [#L48](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L48), [#L141](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L141), [#L142](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L142), [#L220](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L220), [#L324](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L324), [#L325](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L325), [#L335](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L335), [#L336](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L336), [#L337](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L337), [#L345](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L345), [#L379](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L379), [#L381](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L381), [#L460](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L460), [#L475](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L475), [#L476](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L476), [#L477](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L477), [#L478](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L478), [#L523](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L523), [#L524](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L524), [#L525](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L525), [#L527](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L527), [#L546](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L546), [#L621](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L621), [#L626](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L626), [#L627](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L627), [#L628](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L628), [#L629](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L629), [#L631](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L631), [#L670](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L670), [#L687](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L687), [#L737](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L737), [#L738](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L738), [#L739](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L739), [#L740](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L740), [#L787](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L787), [#L789](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L789), [#L790](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L790), [#L791](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L791), [#L808](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L808), [#L810](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L810), [#L811](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L811), [#L812](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L812), [#L835](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L835), [#L836](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L836), [#L837](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L837), [#L838](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L838), [#L865](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L865), [#L983](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L983), [#L1024](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1024), [#L1236](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1236), [#L1327](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1327), [#L1329](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1329), [#L1370](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1370), [#L1372](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1372), [#L1387](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1387), [#L1412](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1412), [#L1414](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1414), [#L1438](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1438), [#L1440](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1440), [#L1483](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1483), [#L1484](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1484), [#L1485](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1485), [#L1537](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1537), [#L1557](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1557) ):

```solidity
47:         uint256 cumulativeRewards; // The transcoder's cumulative rewards (earned via the its active staked rewards and its reward cut).

48:         uint256 cumulativeFees; // The transcoder's cumulative fees (earned via the its active staked rewards and its fee share)

141:      * @notice BondingManager constructor. Only invokes constructor of base Manager contract with provided Controller address

142:      * @dev This constructor will not initialize any state variables besides `controller`. The following setter functions

220:      * @notice Rebond tokens for an unbonding lock to a delegator's current delegate while a delegator is in the Bonded or Pending status

324:         // if transcoder hasn't called 'reward()' for '_round' its 'transcoderFeeShare', 'transcoderRewardCut' and 'totalStake'

325:         // on the 'EarningsPool' for '_round' would not be initialized and the fee distribution wouldn't happen as expected

335:             // If reward() has not been called yet in the current round, then the transcoder's activeCumulativeRewards has not

336:             // yet been set in for the round. When the transcoder calls reward() its activeCumulativeRewards will be set to its

337:             // current cumulativeRewards. So, we can just use the transcoder's cumulativeRewards here because this will become

345:             // retroactively calculate what its cumulativeRewardFactor would have been for 'currentRound - 1' (cfr. previous lastRewardRound for transcoder)

379:         // The cumulativeFeeFactor is used to calculate fees for all delegators including the transcoder (self-delegated)

381:         // the earnings claiming algorithm and instead that amount is accounted for in the transcoder's cumulativeFees field

460:      * @notice Called during round initialization to set the total active stake for the round. Only callable by the RoundsManager

475:      * @notice Sets commission rates as a transcoder and if the caller is not in the transcoder pool tries to add it using an optional list hint

476:      * @dev Percentages are represented as numerators of fractions over MathUtils.PERC_DIVISOR. If the caller is going to be added to the pool, the

477:      * caller can provide an optional hint for the insertion position in the pool via the `_newPosPrev` and `_newPosNext` params. A linear search will

478:      * be executed starting at the hint to find the correct position - in the best case, the hint is the correct position so no search is executed.

523:      * @dev If the caller is decreasing the stake of its old delegate in the transcoder pool, the caller can provide an optional hint

524:      * for the insertion position of the old delegate via the `_oldDelegateNewPosPrev` and `_oldDelegateNewPosNext` params.

525:      * If the caller is delegating to a delegate that is in the transcoder pool, the caller can provide an optional hint for the

527:      * In both cases, a linear search will be executed starting at the hint to find the correct position. In the best case, the hint

546:         // the `autoClaimEarnings` modifier has been replaced with its internal function as a `Stack too deep` error work-around

621:         // the `autoCheckpoint` modifier has been replaced with its internal function as a `Stack too deep` error work-around

626:      * @notice Delegates stake towards a specific address and updates the transcoder pool using optional list hints if needed

627:      * @dev If the caller is decreasing the stake of its old delegate in the transcoder pool, the caller can provide an optional hint

628:      * for the insertion position of the old delegate via the `_oldDelegateNewPosPrev` and `_oldDelegateNewPosNext` params.

629:      * If the caller is delegating to a delegate that is in the transcoder pool, the caller can provide an optional hint for the

631:      * In both cases, a linear search will be executed starting at the hint to find the correct position. In the best case, the hint

670:      * In both cases, a linear search will be executed starting at the hint to find the correct position. In the best case, the hint

687:         // the `autoClaimEarnings` modifier has been replaced with its internal function as a `Stack too deep` error work-around

737:      * @notice Unbond an amount of the delegator's bonded stake and updates the transcoder pool using an optional list hint if needed

738:      * @dev If the caller remains in the transcoder pool, the caller can provide an optional hint for its insertion position in the

739:      * pool via the `_newPosPrev` and `_newPosNext` params. A linear search will be executed starting at the hint to find the correct position.

740:      * In the best case, the hint is the correct position so no search is executed. See SortedDoublyLL.sol details on list hints

787:      * @notice Rebond tokens for an unbonding lock to a delegator's current delegate while a delegator is in the Bonded or Pending status and updates

789:      * @dev If the delegate is in the transcoder pool, the caller can provide an optional hint for the delegate's insertion position in the

790:      * pool via the `_newPosPrev` and `_newPosNext` params. A linear search will be executed starting at the hint to find the correct position.

791:      * In the best case, the hint is the correct position so no search is executed. See SortedDoublyLL.sol details on list hints

808:      * @notice Rebond tokens for an unbonding lock to a delegate while a delegator is in the Unbonded status and updates the transcoder pool using

810:      * @dev If the delegate joins the transcoder pool, the caller can provide an optional hint for the delegate's insertion position in the

811:      * pool via the `_newPosPrev` and `_newPosNext` params. A linear search will be executed starting at the hint to find the correct position.

812:      * In the best case, the hint is the correct position so no search is executed. See SortedDoublyLL.sol for details on list hints

835:      * @notice Mint token rewards for an active transcoder and its delegators and update the transcoder pool using an optional list hint if needed

836:      * @dev If the caller is in the transcoder pool, the caller can provide an optional hint for its insertion position in the

837:      * pool via the `_newPosPrev` and `_newPosNext` params. A linear search will be executed starting at the hint to find the correct position.

838:      * In the best case, the hint is the correct position so no search is executed. See SortedDoublyLL.sol for details on list hints

865:         // 'updateTrancoderWithRewards()' will set the update round to 'currentRound +1' so this synchronization shouldn't occur frequently

983:      * @return cumulativeRewards Transcoder's cumulative rewards (earned via its active staked rewards and its reward cut)

1024:      * @return cumulativeRewardFactor The cumulative reward factor for delegator rewards calculation (only used after LIP-36)

1236:      * @return cStake , cFees where cStake is the delegator's cumulative stake including earned rewards and cFees is the delegator's cumulative fees including earned fees

1327:                 // currStake (the transcoder's delegatedAmount field) will reflect the transcoder's stake from lastActiveStakeUpdateRound

1329:                 // The current active total stake is set to currStake to ensure that the value can be used in updateTranscoderWithRewards()

1370:             // currStake (the transcoder's delegatedAmount field) will reflect the transcoder's stake from lastActiveStakeUpdateRound

1372:             // The current active total stake is set to currStake to ensure that the value can be used in updateTranscoderWithRewards()

1387:      * @dev Tries to add a transcoder to active transcoder pool, evicts the active transcoder with the lowest stake if the pool is full

1412:             // Not zeroing 'Transcoder.lastActiveStakeUpdateRound' saves gas (5k when transcoder is evicted and 20k when transcoder is reinserted)

1414:             // Not zeroing the stake on the current round's 'EarningsPool' saves gas and should have no side effects as long as

1438:         // Not zeroing 'Transcoder.lastActiveStakeUpdateRound' saves gas (5k when transcoder is evicted and 20k when transcoder is reinserted)

1440:         // Not zeroing the stake on the current round's 'EarningsPool' saves gas and should have no side effects as long as

1483:         // The cumulativeRewardFactor is used to calculate rewards for all delegators including the transcoder (self-delegated)

1484:         // Note that delegatorsRewards includes transcoderRewardStakeRewards, but no delegator will claim that amount using

1485:         // the earnings claiming algorithm and instead that amount is accounted for in the transcoder's cumulativeRewards field

1537:                 // activeCumulativeRewards is not cleared here because the next reward() call will set it to cumulativeRewards

1557:      * @dev Update the state of a delegator and its delegate by processing a rebond using an unbonding lock and update the transcoder pool with an optional
```

- *BondingVotes.sol* ( [#L67](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L67), [#L104](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L104) ):

```solidity
67:      * given round, look for the checkpoint in the {data}} and if it's zero ensure the round was actually checkpointed on

104:      * @notice BondingVotes constructor. Only invokes constructor of base Manager contract with provided Controller address
```

- *IBondingManager.sol* ( [#L49](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L49), [#L54](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L54) ):

```solidity
49:     // These event signatures can be used to construct the appropriate topic hashes to filter for past logs corresponding

54:     // event TranscoderUpdate(address indexed transcoder, uint256 pendingRewardCut, uint256 pendingFeeShare, uint256 pendingPricePerSegment, bool registered);
```

- *EarningsPoolLIP36.sol* ( [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L15), [#L44](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L44) ):

```solidity
15:      * @param _prevEarningsPool In-memory EarningsPool.Data struct that stores the previous cumulative reward and fee factors

44:      * @param _prevEarningsPool Storage pointer to EarningsPool.Data struct that stores the previous cumulative reward factor
```

</details>

### <a name="N-22"></a>[N-22] Magic numbers should be replaced with constants

Magic numbers are hard-coded values in code that can make it difficult for developers and maintainers to understand the code, and can also cause confusion or errors. To improve the readability and maintainability of code, it is recommended to replace magic numbers with constants that have good readability.

There are 2 instances:

- *BondingVotes.sol* ( [#L130](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L130) ):

```solidity
/// @audit 18
130:         return 18;
```

- *GovernorCountingOverridable.sol* ( [#L224](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L224) ):

```solidity
/// @audit 48
224:     uint256[48] private __gap;
```

### <a name="N-23"></a>[N-23] Expressions for constant values should use `immutable` rather than `constant`

While it doesn't save any gas because the compiler knows that developers often make this mistake, it's still best to use the right tool for the task at hand. There is a difference between `constant` variables and `immutable` variables, and they should each be used in their appropriate contexts. `constants` should be used for literal values written into the code, and `immutable` variables should be used for expressions, or values calculated in, or passed into the constructor.

There is 1 instance:

- *BondingManager.sol* ( [#L32](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L32) ):

```solidity
32:     uint256 constant MAX_FUTURE_ROUND = 2**256 - 1;
```

### <a name="N-24"></a>[N-24] Public functions not called internally should be declared `external`

If desired, sub contracts can change the visibility from `external` to `public` by [overriding](https://docs.soliditylang.org/en/v0.8.20/contracts.html#function-overriding) the functions of their parents.

<details>
<summary>There are 20 instances (click to show):</summary>

- *BondingManager.sol* ( [#L679-L686](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L679-L686), [#L908](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L908), [#L923](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L923), [#L946](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L946), [#L987-L1001](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L987-L1001), [#L1027-L1036](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1027-L1036), [#L1058-L1069](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1058-L1069), [#L1089-L1092](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1089-L1092), [#L1103](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1103), [#L1111](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1111), [#L1119](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1119), [#L1128](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1128), [#L1136](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1136) ):

```solidity
679:     function transferBond(
680:         address _delegator,
681:         uint256 _amount,
682:         address _oldDelegateNewPosPrev,
683:         address _oldDelegateNewPosNext,
684:         address _newDelegateNewPosPrev,
685:         address _newDelegateNewPosNext
686:     ) public whenSystemNotPaused currentRoundInitialized {

908:     function pendingStake(address _delegator, uint256 _endRound) public view returns (uint256) {

923:     function pendingFees(address _delegator, uint256 _endRound) public view returns (uint256) {

946:     function transcoderStatus(address _transcoder) public view returns (TranscoderStatus) {

987:     function getTranscoder(address _transcoder)
988:         public
989:         view
990:         returns (
991:             uint256 lastRewardRound,
992:             uint256 rewardCut,
993:             uint256 feeShare,
994:             uint256 lastActiveStakeUpdateRound,
995:             uint256 activationRound,
996:             uint256 deactivationRound,
997:             uint256 activeCumulativeRewards,
998:             uint256 cumulativeRewards,
999:             uint256 cumulativeFees,
1000:             uint256 lastFeeRound
1001:         )

1027:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
1028:         public
1029:         view
1030:         returns (
1031:             uint256 totalStake,
1032:             uint256 transcoderRewardCut,
1033:             uint256 transcoderFeeShare,
1034:             uint256 cumulativeRewardFactor,
1035:             uint256 cumulativeFeeFactor
1036:         )

1058:     function getDelegator(address _delegator)
1059:         public
1060:         view
1061:         returns (
1062:             uint256 bondedAmount,
1063:             uint256 fees,
1064:             address delegateAddress,
1065:             uint256 delegatedAmount,
1066:             uint256 startRound,
1067:             uint256 lastClaimRound,
1068:             uint256 nextUnbondingLockId
1069:         )

1089:     function getDelegatorUnbondingLock(address _delegator, uint256 _unbondingLockId)
1090:         public
1091:         view
1092:         returns (uint256 amount, uint256 withdrawRound)

1103:     function getTranscoderPoolMaxSize() public view returns (uint256) {

1111:     function getTranscoderPoolSize() public view returns (uint256) {

1119:     function getFirstTranscoderInPool() public view returns (address) {

1128:     function getNextTranscoderInPool(address _transcoder) public view returns (address) {

1136:     function getTotalBonded() public view returns (uint256) {
```

- *GovernorCountingOverridable.sol* ( [#L76](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L76), [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L83) ):

```solidity
76:     function COUNTING_MODE() public pure virtual override returns (string memory) {

83:     function hasVoted(uint256 _proposalId, address _account) public view virtual override returns (bool) {
```

- *LivepeerGovernor.sol* ( [#L54-L60](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L54-L60), [#L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L78), [#L114-L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L114-L118), [#L123-L127](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L123-L127), [#L160-L164](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L160-L164) ):

```solidity
54:     function initialize(
55:         uint256 initialVotingDelay,
56:         uint256 initialVotingPeriod,
57:         uint256 initialProposalThreshold,
58:         uint256 initialQuorum,
59:         uint256 quota
60:     ) public initializer {

78:     function quorumDenominator() public view virtual override returns (uint256) {

114:     function proposalThreshold()
115:         public
116:         view
117:         override(GovernorUpgradeable, GovernorSettingsUpgradeable)
118:         returns (uint256)

123:     function state(uint256 proposalId)
124:         public
125:         view
126:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
127:         returns (ProposalState)

160:     function supportsInterface(bytes4 interfaceId)
161:         public
162:         view
163:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
164:         returns (bool)
```

</details>

### <a name="N-25"></a>[N-25] Use `@inheritdoc` for overridden functions

<details>
<summary>There are 13 instances (click to show):</summary>

- *GovernorCountingOverridable.sol* ( [#L72-L76](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L72-L76), [#L80-L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L80-L83), [#L104-L107](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L104-L107), [#L115-L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L115-L118), [#L127-L136](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L127-L136) ):

```solidity
72:     /**
73:      * @dev See {IGovernor-COUNTING_MODE}.
74:      */
75:     // solhint-disable-next-line func-name-mixedcase
76:     function COUNTING_MODE() public pure virtual override returns (string memory) {

80:     /**
81:      * @dev See {IGovernor-hasVoted}.
82:      */
83:     function hasVoted(uint256 _proposalId, address _account) public view virtual override returns (bool) {

104:     /**
105:      * @dev See {Governor-_quorumReached}.
106:      */
107:     function _quorumReached(uint256 _proposalId) internal view virtual override returns (bool) {

115:     /**
116:      * @dev See {Governor-_voteSucceeded}. In this module, the forVotes must be at least QUOTA of the total votes.
117:      */
118:     function _voteSucceeded(uint256 _proposalId) internal view virtual override returns (bool) {

127:     /**
128:      * @dev See {Governor-_countVote}. In this module, the support follows the `VoteType` enum (from Governor Bravo).
129:      */
130:     function _countVote(
131:         uint256 _proposalId,
132:         address _account,
133:         uint8 _supportInt,
134:         uint256 _weight,
135:         bytes memory // params
136:     ) internal virtual override {
```

- *LivepeerGovernor.sol* ( [#L74-L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L74-L78), [#L82-L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L82-L85), [#L114-L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L114-L118), [#L123-L127](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L123-L127), [#L132-L138](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L132-L138), [#L142-L147](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L142-L147), [#L151-L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L151-L155), [#L160-L164](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L160-L164) ):

```solidity
74:     /**
75:      * @dev Overrides the quorum denominator from the GovernorVotesQuorumFractionUpgradeable extension. We use
76:      * MathUtils.PERC_DIVISOR so that our quorum numerator is a valid MathUtils fraction.
77:      */
78:     function quorumDenominator() public view virtual override returns (uint256) {

82:     /**
83:      * @dev See {GovernorCountingOverridable-votes}.
84:      */
85:     function votes() public view override returns (IVotes) {

114:     function proposalThreshold()
115:         public
116:         view
117:         override(GovernorUpgradeable, GovernorSettingsUpgradeable)
118:         returns (uint256)

123:     function state(uint256 proposalId)
124:         public
125:         view
126:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
127:         returns (ProposalState)

132:     function _execute(
133:         uint256 proposalId,
134:         address[] memory targets,
135:         uint256[] memory values,
136:         bytes[] memory calldatas,
137:         bytes32 descriptionHash
138:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) {

142:     function _cancel(
143:         address[] memory targets,
144:         uint256[] memory values,
145:         bytes[] memory calldatas,
146:         bytes32 descriptionHash
147:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (uint256) {

151:     function _executor()
152:         internal
153:         view
154:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
155:         returns (address)

160:     function supportsInterface(bytes4 interfaceId)
161:         public
162:         view
163:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
164:         returns (bool)
```

</details>

### <a name="N-26"></a>[N-26] NatSpec documentation for contract is missing

e.g. `@dev` or `@notice`, and it must appear above the contract definition braces in order to be identified by the compiler as NatSpec.

There are 2 instances:

- *EarningsPoolLIP36.sol* ( [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L9) ):

```solidity
9: library EarningsPoolLIP36 {
```

- *IVotes.sol* ( [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L6) ):

```solidity
6: interface IVotes is IERC5805Upgradeable {
```

### <a name="N-27"></a>[N-27] Contract declarations should have NatSpec `@author` annotations

There are 10 instances:

- *BondingManager.sol* ( [#L23](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L23) ):

```solidity
23: contract BondingManager is ManagerProxyTarget, IBondingManager {
```

- *BondingVotes.sol* ( [#L20](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L20) ):

```solidity
20: contract BondingVotes is ManagerProxyTarget, IBondingVotes {
```

- *IBondingManager.sol* ( [#L8](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L8) ):

```solidity
8: interface IBondingManager {
```

- *IBondingVotes.sol* ( [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L9) ):

```solidity
9: interface IBondingVotes is IVotes {
```

- *EarningsPoolLIP36.sol* ( [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L9) ):

```solidity
9: library EarningsPoolLIP36 {
```

- *SortedArrays.sol* ( [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L12) ):

```solidity
12: library SortedArrays {
```

- *GovernorCountingOverridable.sol* ( [#L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L21) ):

```solidity
21: abstract contract GovernorCountingOverridable is Initializable, GovernorUpgradeable {
```

- *IVotes.sol* ( [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L6) ):

```solidity
6: interface IVotes is IERC5805Upgradeable {
```

- *LivepeerGovernor.sol* ( [#L26](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L26) ):

```solidity
26: contract LivepeerGovernor is
```

- *Treasury.sol* ( [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L15) ):

```solidity
15: contract Treasury is Initializable, TimelockControllerUpgradeable {
```

### <a name="N-28"></a>[N-28] Contract declarations should have NatSpec `@title` annotations

Some contract definitions have an incomplete NatSpec: add a `@title` notation to describe the contract to improve the code documentation.

There are 2 instances:

- *EarningsPoolLIP36.sol* ( [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L9) ):

```solidity
9: library EarningsPoolLIP36 {
```

- *IVotes.sol* ( [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L6) ):

```solidity
6: interface IVotes is IERC5805Upgradeable {
```

### <a name="N-29"></a>[N-29] Event declarations should have NatSpec descriptions

There are 13 instances:

- *IBondingManager.sol* ( [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L9), [#L10](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L10), [#L11](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L11), [#L12](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L12), [#L13](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L13), [#L14](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L14), [#L15-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L15-L21), [#L22-L28](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L22-L28), [#L29](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L29), [#L30-L36](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L30-L36), [#L37](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L37), [#L38](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L38), [#L39-L46](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L39-L46) ):

```solidity
9:     event TranscoderUpdate(address indexed transcoder, uint256 rewardCut, uint256 feeShare);

10:     event TranscoderActivated(address indexed transcoder, uint256 activationRound);

11:     event TranscoderDeactivated(address indexed transcoder, uint256 deactivationRound);

12:     event TranscoderSlashed(address indexed transcoder, address finder, uint256 penalty, uint256 finderReward);

13:     event Reward(address indexed transcoder, uint256 amount);

14:     event TreasuryReward(address indexed transcoder, address treasury, uint256 amount);

15:     event Bond(
16:         address indexed newDelegate,
17:         address indexed oldDelegate,
18:         address indexed delegator,
19:         uint256 additionalAmount,
20:         uint256 bondedAmount
21:     );

22:     event Unbond(
23:         address indexed delegate,
24:         address indexed delegator,
25:         uint256 unbondingLockId,
26:         uint256 amount,
27:         uint256 withdrawRound
28:     );

29:     event Rebond(address indexed delegate, address indexed delegator, uint256 unbondingLockId, uint256 amount);

30:     event TransferBond(
31:         address indexed oldDelegator,
32:         address indexed newDelegator,
33:         uint256 oldUnbondingLockId,
34:         uint256 newUnbondingLockId,
35:         uint256 amount
36:     );

37:     event WithdrawStake(address indexed delegator, uint256 unbondingLockId, uint256 amount, uint256 withdrawRound);

38:     event WithdrawFees(address indexed delegator, address recipient, uint256 amount);

39:     event EarningsClaimed(
40:         address indexed delegate,
41:         address indexed delegator,
42:         uint256 rewards,
43:         uint256 fees,
44:         uint256 startRound,
45:         uint256 endRound
46:     );
```

### <a name="N-30"></a>[N-30] NatSpec documentation for function is missing

It is recommended that Solidity contracts are fully annotated using NatSpec for all public interfaces (everything in the ABI). It is clearly stated in the Solidity official documentation.
In complex projects such as DeFi, the interpretation of all functions and their arguments and returns is important for code readability and auditability.

<details>
<summary>There are 36 instances (click to show):</summary>

- *BondingManager.sol* ( [#L1643](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1643), [#L1647](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1647), [#L1651](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1651), [#L1655](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1655), [#L1659](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1659), [#L1663](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1663), [#L1667](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1667) ):

```solidity
1643:     function treasury() internal view returns (address) {

1647:     function bondingVotes() internal view returns (IBondingVotes) {

1651:     function _onlyTicketBroker() internal view {

1655:     function _onlyRoundsManager() internal view {

1659:     function _onlyVerifier() internal view {

1663:     function _currentRoundInitialized() internal view {

1667:     function _autoClaimEarnings(address _delegator) internal {
```

- *IBondingManager.sol* ( [#L59](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L59), [#L65](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L65), [#L72](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L72), [#L75](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L75), [#L77](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L77), [#L79](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L79), [#L81](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L81), [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L83), [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L85) ):

```solidity
59:     function updateTranscoderWithFees(

65:     function slashTranscoder(

72:     function setCurrentRoundTotalActiveStake() external;

75:     function getTranscoderPoolSize() external view returns (uint256);

77:     function transcoderTotalStake(address _transcoder) external view returns (uint256);

79:     function isActiveTranscoder(address _transcoder) external view returns (bool);

81:     function getTotalBonded() external view returns (uint256);

83:     function nextRoundTotalActiveStake() external view returns (uint256);

85:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
```

- *IBondingVotes.sol* ( [#L31](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L31), [#L41](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L41), [#L45](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L45), [#L47](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L47), [#L49](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L49) ):

```solidity
31:     function checkpointBondingState(

41:     function checkpointTotalActiveStake(uint256 _totalStake, uint256 _round) external;

45:     function hasCheckpoint(address _account) external view returns (bool);

47:     function getTotalActiveStakeAt(uint256 _round) external view returns (uint256);

49:     function getBondingStateAt(address _account, uint256 _round)
```

- *GovernorCountingOverridable.sol* ( [#L64](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L64), [#L68](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L68) ):

```solidity
64:     function __GovernorCountingOverridable_init(uint256 _quota) internal onlyInitializing {

68:     function __GovernorCountingOverridable_init_unchained(uint256 _quota) internal onlyInitializing {
```

- *IVotes.sol* ( [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L7), [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L9), [#L13](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L13), [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L15), [#L17](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L17) ):

```solidity
7:     function totalSupply() external view returns (uint256);

9:     function delegatedAt(address account, uint256 timepoint) external returns (address);

13:     function name() external view returns (string memory);

15:     function symbol() external view returns (string memory);

17:     function decimals() external view returns (uint8);
```

- *LivepeerGovernor.sol* ( [#L54](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L54), [#L114](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L114), [#L123](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L123), [#L132](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L132), [#L142](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L142), [#L151](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L151), [#L160](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L160) ):

```solidity
54:     function initialize(

114:     function proposalThreshold()

123:     function state(uint256 proposalId)

132:     function _execute(

142:     function _cancel(

151:     function _executor()

160:     function supportsInterface(bytes4 interfaceId)
```

- *Treasury.sol* ( [#L16](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16) ):

```solidity
16:     function initialize(
```

</details>

### <a name="N-31"></a>[N-31] Missing NatSpec `@param`

Some functions have an incomplete NatSpec: add a `@param` notation to describe the function parameters to improve the code documentation.

<details>
<summary>There are 93 instances (click to show):</summary>

- *BondingManager.sol* ( [#L130](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L130), [#L135](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L135), [#L273](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L273), [#L302-L306](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L302-L306), [#L1176](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1176), [#L1294-L1299](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1294-L1299), [#L1307-L1312](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1307-L1312), [#L1352-L1357](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1352-L1357), [#L1392-L1398](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1392-L1398), [#L1437](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1437), [#L1591-L1595](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1591-L1595), [#L1667](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1667) ):

```solidity
/// @audit Missing @param for `_delegator`
130:     modifier autoClaimEarnings(address _delegator) {

/// @audit Missing @param for `_account`
135:     modifier autoCheckpoint(address _account) {

/// @audit Missing @param for `_recipient`, `_amount`
273:     function withdrawFees(address payable _recipient, uint256 _amount)

/// @audit Missing @param for `_round`
302:     function updateTranscoderWithFees(
303:         address _transcoder,
304:         uint256 _fees,
305:         uint256 _round
306:     ) external whenSystemNotPaused onlyTicketBroker {

/// @audit Missing @param for `_cutRate`
1176:     function _setTreasuryRewardCutRate(uint256 _cutRate) internal {

/// @audit Missing @param for `_newPosPrev`, `_newPosNext`
1294:     function increaseTotalStake(
1295:         address _delegate,
1296:         uint256 _amount,
1297:         address _newPosPrev,
1298:         address _newPosNext
1299:     ) internal autoCheckpoint(_delegate) {

/// @audit Missing @param for `_delegate`, `_amount`, `_newPosPrev`, `_newPosNext`
1307:     function increaseTotalStakeUncheckpointed(
1308:         address _delegate,
1309:         uint256 _amount,
1310:         address _newPosPrev,
1311:         address _newPosNext
1312:     ) internal {

/// @audit Missing @param for `_newPosPrev`, `_newPosNext`
1352:     function decreaseTotalStake(
1353:         address _delegate,
1354:         uint256 _amount,
1355:         address _newPosPrev,
1356:         address _newPosNext
1357:     ) internal autoCheckpoint(_delegate) {

/// @audit Missing @param for `_newPosPrev`, `_newPosNext`
1392:     function tryToJoinActiveSet(
1393:         address _transcoder,
1394:         uint256 _totalStake,
1395:         uint256 _activationRound,
1396:         address _newPosPrev,
1397:         address _newPosNext
1398:     ) internal {

/// @audit Missing @param for `_transcoder`
1437:     function resignTranscoder(address _transcoder) internal {

/// @audit Missing @param for `_owner`, `_delegator`, `_transcoder`
1591:     function _checkpointBondingState(
1592:         address _owner,
1593:         Delegator storage _delegator,
1594:         Transcoder storage _transcoder
1595:     ) internal {

/// @audit Missing @param for `_delegator`
1667:     function _autoClaimEarnings(address _delegator) internal {
```

- *BondingVotes.sol* ( [#L95](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L95), [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L155), [#L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L167), [#L194](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L194), [#L205](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L205), [#L218](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L218), [#L315](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L315), [#L387-L391](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L387-L391), [#L520](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L520) ):

```solidity
/// @audit Missing @param for `_round`
95:     modifier onlyPastRounds(uint256 _round) {

/// @audit Missing @param for `_account`
155:     function getVotes(address _account) external view returns (uint256) {

/// @audit Missing @param for `_account`, `_round`
167:     function getPastVotes(address _account, uint256 _round) external view onlyPastRounds(_round) returns (uint256) {

/// @audit Missing @param for `_round`
194:     function getPastTotalSupply(uint256 _round) external view onlyPastRounds(_round) returns (uint256) {

/// @audit Missing @param for `_account`
205:     function delegates(address _account) external view returns (address) {

/// @audit Missing @param for `_account`, `_round`
218:     function delegatedAt(address _account, uint256 _round) external view onlyPastRounds(_round) returns (address) {

/// @audit Missing @param for `_account`
315:     function hasCheckpoint(address _account) public view returns (bool) {

/// @audit Missing @param for `_account`, `previous`, `current`
387:     function onBondingCheckpointChanged(
388:         address _account,
389:         BondingCheckpoint memory previous,
390:         BondingCheckpoint memory current
391:     ) internal {

/// @audit Missing @param for `_transcoder`, `_round`
520:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
```

- *IBondingManager.sol* ( [#L59-L63](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L59-L63), [#L65-L70](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L65-L70), [#L77](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L77), [#L79](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L79), [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L85) ):

```solidity
/// @audit Missing @param for `_transcoder`, `_fees`, `_round`
59:     function updateTranscoderWithFees(
60:         address _transcoder,
61:         uint256 _fees,
62:         uint256 _round
63:     ) external;

/// @audit Missing @param for `_transcoder`, `_finder`, `_slashAmount`, `_finderFee`
65:     function slashTranscoder(
66:         address _transcoder,
67:         address _finder,
68:         uint256 _slashAmount,
69:         uint256 _finderFee
70:     ) external;

/// @audit Missing @param for `_transcoder`
77:     function transcoderTotalStake(address _transcoder) external view returns (uint256);

/// @audit Missing @param for `_transcoder`
79:     function isActiveTranscoder(address _transcoder) external view returns (bool);

/// @audit Missing @param for `_transcoder`, `_round`
85:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
```

- *IBondingVotes.sol* ( [#L31-L39](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L31-L39), [#L41](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L41), [#L45](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L45), [#L47](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L47), [#L49](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L49) ):

```solidity
/// @audit Missing @param for `_account`, `_startRound`, `_bondedAmount`, `_delegateAddress`, `_delegatedAmount`, `_lastClaimRound`, `_lastRewardRound`
31:     function checkpointBondingState(
32:         address _account,
33:         uint256 _startRound,
34:         uint256 _bondedAmount,
35:         address _delegateAddress,
36:         uint256 _delegatedAmount,
37:         uint256 _lastClaimRound,
38:         uint256 _lastRewardRound
39:     ) external;

/// @audit Missing @param for `_totalStake`, `_round`
41:     function checkpointTotalActiveStake(uint256 _totalStake, uint256 _round) external;

/// @audit Missing @param for `_account`
45:     function hasCheckpoint(address _account) external view returns (bool);

/// @audit Missing @param for `_round`
47:     function getTotalActiveStakeAt(uint256 _round) external view returns (uint256);

/// @audit Missing @param for `_account`, `_round`
49:     function getBondingStateAt(address _account, uint256 _round)
```

- *GovernorCountingOverridable.sol* ( [#L64](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L64), [#L68](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L68), [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L83), [#L90](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L90), [#L107](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L107), [#L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L118), [#L130-L136](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L130-L136) ):

```solidity
/// @audit Missing @param for `_quota`
64:     function __GovernorCountingOverridable_init(uint256 _quota) internal onlyInitializing {

/// @audit Missing @param for `_quota`
68:     function __GovernorCountingOverridable_init_unchained(uint256 _quota) internal onlyInitializing {

/// @audit Missing @param for `_proposalId`, `_account`
83:     function hasVoted(uint256 _proposalId, address _account) public view virtual override returns (bool) {

/// @audit Missing @param for `_proposalId`
90:     function proposalVotes(uint256 _proposalId)

/// @audit Missing @param for `_proposalId`
107:     function _quorumReached(uint256 _proposalId) internal view virtual override returns (bool) {

/// @audit Missing @param for `_proposalId`
118:     function _voteSucceeded(uint256 _proposalId) internal view virtual override returns (bool) {

/// @audit Missing @param for `_proposalId`, `_account`, `_supportInt`, `_weight`
130:     function _countVote(
131:         uint256 _proposalId,
132:         address _account,
133:         uint8 _supportInt,
134:         uint256 _weight,
135:         bytes memory // params
136:     ) internal virtual override {
```

- *IVotes.sol* ( [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L9) ):

```solidity
/// @audit Missing @param for `account`, `timepoint`
9:     function delegatedAt(address account, uint256 timepoint) external returns (address);
```

- *LivepeerGovernor.sol* ( [#L43](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L43), [#L54-L60](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L54-L60), [#L123](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L123), [#L132-L138](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L132-L138), [#L142-L147](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L142-L147), [#L160](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L160) ):

```solidity
/// @audit Missing @param for `_controller`
43:     constructor(address _controller) Manager(_controller) {

/// @audit Missing @param for `initialVotingDelay`, `initialVotingPeriod`, `initialProposalThreshold`, `initialQuorum`, `quota`
54:     function initialize(
55:         uint256 initialVotingDelay,
56:         uint256 initialVotingPeriod,
57:         uint256 initialProposalThreshold,
58:         uint256 initialQuorum,
59:         uint256 quota
60:     ) public initializer {

/// @audit Missing @param for `proposalId`
123:     function state(uint256 proposalId)

/// @audit Missing @param for `proposalId`, `targets`, `values`, `calldatas`, `descriptionHash`
132:     function _execute(
133:         uint256 proposalId,
134:         address[] memory targets,
135:         uint256[] memory values,
136:         bytes[] memory calldatas,
137:         bytes32 descriptionHash
138:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) {

/// @audit Missing @param for `targets`, `values`, `calldatas`, `descriptionHash`
142:     function _cancel(
143:         address[] memory targets,
144:         uint256[] memory values,
145:         bytes[] memory calldatas,
146:         bytes32 descriptionHash
147:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (uint256) {

/// @audit Missing @param for `interfaceId`
160:     function supportsInterface(bytes4 interfaceId)
```

- *Treasury.sol* ( [#L16-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16-L21) ):

```solidity
/// @audit Missing @param for `minDelay`, `proposers`, `executors`, `admin`
16:     function initialize(
17:         uint256 minDelay,
18:         address[] memory proposers,
19:         address[] memory executors,
20:         address admin
21:     ) external initializer {
```

</details>

### <a name="N-32"></a>[N-32] Public variable declarations should have NatSpec descriptions

There are 6 instances:

- *BondingManager.sol* ( [#L35](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L35), [#L88](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L88), [#L90](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L90), [#L98](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L98), [#L100](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L100), [#L103](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L103) ):

```solidity
35:     uint64 public unbondingPeriod;

88:     uint256 public currentRoundTotalActiveStake;

90:     uint256 public nextRoundTotalActiveStake;

98:     uint256 public treasuryRewardCutRate;

100:     uint256 public nextRoundTreasuryRewardCutRate;

103:     uint256 public treasuryBalanceCeiling;
```

### <a name="N-33"></a>[N-33] NatSpec `@return` is missing

It is recommended that Solidity contracts are fully annotated using NatSpec

<details>
<summary>There are 49 instances (click to show):</summary>

- *BondingManager.sol* ( [#L1184-L1192](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1184-L1192), [#L1643](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1643), [#L1647](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1647) ):

```solidity
1184:     /**
1185:      * @notice Return an EarningsPool.Data struct with cumulative factors for a given round that are rescaled if needed
1186:      * @param _transcoder Storage pointer to a transcoder struct
1187:      * @param _round The round to fetch the cumulative factors for
1188:      */
1189:     function cumulativeFactorsPool(Transcoder storage _transcoder, uint256 _round)
1190:         internal
1191:         view
1192:         returns (EarningsPool.Data memory pool)

1643:     function treasury() internal view returns (address) {

1647:     function bondingVotes() internal view returns (IBondingVotes) {
```

- *BondingVotes.sol* ( [#L112-L115](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L112-L115), [#L119-L122](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L119-L122), [#L126-L129](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L126-L129), [#L133-L137](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L133-L137), [#L141-L145](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L141-L145), [#L149-L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L149-L155), [#L160-L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L160-L167), [#L172-L181](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L172-L181), [#L185-L194](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L185-L194), [#L198-L205](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L198-L205), [#L210-L218](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L210-L218), [#L312-L315](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L312-L315), [#L321-L325](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L321-L325), [#L517-L523](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L517-L523), [#L536-L539](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L536-L539), [#L543-L546](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L543-L546) ):

```solidity
112:     /**
113:      * @notice Returns the name of the virtual token implemented by this.
114:      */
115:     function name() external pure returns (string memory) {

119:     /**
120:      * @notice Returns the symbol of the token underlying the voting power.
121:      */
122:     function symbol() external pure returns (string memory) {

126:     /**
127:      * @notice Returns the decimals places of the token underlying the voting.
128:      */
129:     function decimals() external pure returns (uint8) {

133:     /**
134:      * @notice Clock is set to match the current round, which is the checkpointing
135:      *  method implemented here.
136:      */
137:     function clock() public view returns (uint48) {

141:     /**
142:      * @notice Machine-readable description of the clock as specified in EIP-6372.
143:      */
144:     // solhint-disable-next-line func-name-mixedcase
145:     function CLOCK_MODE() external pure returns (string memory) {

149:     /**
150:      * @notice Returns the current amount of votes that `_account` has.
151:      * @dev Keep in mind that since this function should return the votes at the end of the current round, we need to
152:      * fetch the bonding state at the next round instead. That because the bonding state reflects the active stake in
153:      * the current round, which is the snapshotted stake from the end of the previous round.
154:      */
155:     function getVotes(address _account) external view returns (uint256) {

160:     /**
161:      * @notice Returns the amount of votes that `_account` had at a specific moment in the past. If the `clock()` is
162:      * configured to use block numbers, this will return the value at the end of the corresponding block.
163:      * @dev Keep in mind that since this function should return the votes at the end of the _round (or timepoint in OZ
164:      * terms), we need to fetch the bonding state at the next round instead. That because the bonding state reflects the
165:      * active stake in the current round, which is the snapshotted stake from the end of the previous round.
166:      */
167:     function getPastVotes(address _account, uint256 _round) external view onlyPastRounds(_round) returns (uint256) {

172:     /**
173:      * @notice Returns the current total supply of votes available.
174:      * @dev This value is the sum of all *active* stake, which is not necessarily the sum of all voting power.
175:      * Bonded stake that is not part of the top 100 active transcoder set is still given voting power, but is not
176:      * considered here.
177:      * @dev Keep in mind that since this function should return the votes at the end of the current round, we need to
178:      * fetch the total active stake at the next round instead. That because the active stake in the current round is the
179:      * snapshotted stake from the end of the previous round.
180:      */
181:     function totalSupply() external view returns (uint256) {

185:     /**
186:      * @notice Returns the total supply of votes available at a specific round in the past.
187:      * @dev This value is the sum of all *active* stake, which is not necessarily the sum of all voting power.
188:      * Bonded stake that is not part of the top 100 active transcoder set is still given voting power, but is not
189:      * considered here.
190:      * @dev Keep in mind that since this function should return the votes at the end of the _round (or timepoint in OZ
191:      * terms), we need to fetch the total active stake at the next round instead. That because the active stake in the
192:      * current round is the snapshotted stake from the end of the previous round.
193:      */
194:     function getPastTotalSupply(uint256 _round) external view onlyPastRounds(_round) returns (uint256) {

198:     /**
199:      * @notice Returns the delegate that _account has chosen. This means the delegated transcoder address in case of
200:      * delegators, and the account's own address for transcoders (self-delegated).
201:      * @dev Keep in mind that since this function should return the delegate at the end of the current round, we need to
202:      * fetch the bonding state at the next round instead. That because the bonding state reflects the active stake in
203:      * the current round, or the snapshotted stake from the end of the previous round.
204:      */
205:     function delegates(address _account) external view returns (address) {

210:     /**
211:      * @notice Returns the delegate that _account had chosen in a specific round in the past.
212:      * @dev This is an addition to the IERC5805 interface to support our custom vote counting logic that allows
213:      * delegators to override their transcoders votes. See {GovernorCountingOverridable-_handleVoteOverrides}.
214:      * @dev Keep in mind that since this function should return the delegate at the end of the _round (or timepoint in
215:      * OZ terms), we need to fetch the bonding state at the next round instead. That because the bonding state reflects
216:      * the active stake in the current round, which is the snapshotted stake from the end of the previous round.
217:      */
218:     function delegatedAt(address _account, uint256 _round) external view onlyPastRounds(_round) returns (address) {

312:     /**
313:      * @notice Returns whether an account already has any checkpoint.
314:      */
315:     function hasCheckpoint(address _account) public view returns (bool) {

321:     /**
322:      * @dev Gets the checkpointed total active stake at a given round.
323:      * @param _round The round for which we want to get the total active stake.
324:      */
325:     function getTotalActiveStakeAt(uint256 _round) public view virtual returns (uint256) {

517:     /**
518:      * @dev Proxy for {BondingManager-getTranscoderEarningsPoolForRound} that returns an EarningsPool.Data struct.
519:      */
520:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
521:         internal
522:         view
523:         returns (EarningsPool.Data memory pool)

536:     /**
537:      * @dev Return BondingManager interface
538:      */
539:     function bondingManager() internal view returns (IBondingManager) {

543:     /**
544:      * @dev Return IRoundsManager interface
545:      */
546:     function roundsManager() internal view returns (IRoundsManager) {
```

- *IBondingManager.sol* ( [#L75](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L75), [#L77](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L77), [#L79](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L79), [#L81](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L81), [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L83), [#L85-L94](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L85-L94) ):

```solidity
75:     function getTranscoderPoolSize() external view returns (uint256);

77:     function transcoderTotalStake(address _transcoder) external view returns (uint256);

79:     function isActiveTranscoder(address _transcoder) external view returns (bool);

81:     function getTotalBonded() external view returns (uint256);

83:     function nextRoundTotalActiveStake() external view returns (uint256);

85:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
86:         external
87:         view
88:         returns (
89:             uint256 totalStake,
90:             uint256 transcoderRewardCut,
91:             uint256 transcoderFeeShare,
92:             uint256 cumulativeRewardFactor,
93:             uint256 cumulativeFeeFactor
94:         );
```

- *IBondingVotes.sol* ( [#L45](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L45), [#L47](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L47), [#L49-L52](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L49-L52) ):

```solidity
45:     function hasCheckpoint(address _account) external view returns (bool);

47:     function getTotalActiveStakeAt(uint256 _round) external view returns (uint256);

49:     function getBondingStateAt(address _account, uint256 _round)
50:         external
51:         view
52:         returns (uint256 amount, address delegateAddress);
```

- *GovernorCountingOverridable.sol* ( [#L72-L76](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L72-L76), [#L80-L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L80-L83), [#L87-L98](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L87-L98), [#L104-L107](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L104-L107), [#L115-L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L115-L118), [#L162-L180](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L162-L180), [#L214-L217](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L214-L217) ):

```solidity
72:     /**
73:      * @dev See {IGovernor-COUNTING_MODE}.
74:      */
75:     // solhint-disable-next-line func-name-mixedcase
76:     function COUNTING_MODE() public pure virtual override returns (string memory) {

80:     /**
81:      * @dev See {IGovernor-hasVoted}.
82:      */
83:     function hasVoted(uint256 _proposalId, address _account) public view virtual override returns (bool) {

87:     /**
88:      * @dev Accessor to the internal vote counts.
89:      */
90:     function proposalVotes(uint256 _proposalId)
91:         public
92:         view
93:         virtual
94:         returns (
95:             uint256 againstVotes,
96:             uint256 forVotes,
97:             uint256 abstainVotes
98:         )

104:     /**
105:      * @dev See {Governor-_quorumReached}.
106:      */
107:     function _quorumReached(uint256 _proposalId) internal view virtual override returns (bool) {

115:     /**
116:      * @dev See {Governor-_voteSucceeded}. In this module, the forVotes must be at least QUOTA of the total votes.
117:      */
118:     function _voteSucceeded(uint256 _proposalId) internal view virtual override returns (bool) {

162:     /**
163:      * @notice Handles vote overrides that delegators can make to their
164:      * corresponding delegated transcoder votes. Usually only the transcoders
165:      * vote on proposals, but any delegator can change their part of the vote.
166:      * This tracks past votes and deduction on separate mappings in order to
167:      * calculate the effective voting power of each vote.
168:      * @param _proposalId ID of the proposal being voted on
169:      * @param _tally struct where the vote totals are tallied on
170:      * @param _voter struct where the specific voter state is tracked
171:      * @param _account current user making a vote
172:      * @param _weight voting weight of the user making the vote
173:      */
174:     function _handleVoteOverrides(
175:         uint256 _proposalId,
176:         ProposalTally storage _tally,
177:         ProposalVoterState storage _voter,
178:         address _account,
179:         uint256 _weight
180:     ) internal returns (uint256) {

214:     /**
215:      * @dev Implement in inheriting contract to provide the voting power provider.
216:      */
217:     function votes() public view virtual returns (IVotes);
```

- *IVotes.sol* ( [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L7), [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L9), [#L13](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L13), [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L15), [#L17](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L17) ):

```solidity
7:     function totalSupply() external view returns (uint256);

9:     function delegatedAt(address account, uint256 timepoint) external returns (address);

13:     function name() external view returns (string memory);

15:     function symbol() external view returns (string memory);

17:     function decimals() external view returns (uint8);
```

- *LivepeerGovernor.sol* ( [#L74-L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L74-L78), [#L82-L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L82-L85), [#L98-L101](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L98-L101), [#L105-L108](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L105-L108), [#L114-L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L114-L118), [#L123-L127](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L123-L127), [#L142-L147](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L142-L147), [#L151-L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L151-L155), [#L160-L164](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L160-L164) ):

```solidity
74:     /**
75:      * @dev Overrides the quorum denominator from the GovernorVotesQuorumFractionUpgradeable extension. We use
76:      * MathUtils.PERC_DIVISOR so that our quorum numerator is a valid MathUtils fraction.
77:      */
78:     function quorumDenominator() public view virtual override returns (uint256) {

82:     /**
83:      * @dev See {GovernorCountingOverridable-votes}.
84:      */
85:     function votes() public view override returns (IVotes) {

98:     /**
99:      * @dev Returns the BondingVotes contract address from the controller.
100:      */
101:     function bondingVotes() internal view returns (IVotes) {

105:     /**
106:      * @dev Returns the Treasury contract address from the controller.
107:      */
108:     function treasury() internal view returns (Treasury) {

114:     function proposalThreshold()
115:         public
116:         view
117:         override(GovernorUpgradeable, GovernorSettingsUpgradeable)
118:         returns (uint256)

123:     function state(uint256 proposalId)
124:         public
125:         view
126:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
127:         returns (ProposalState)

142:     function _cancel(
143:         address[] memory targets,
144:         uint256[] memory values,
145:         bytes[] memory calldatas,
146:         bytes32 descriptionHash
147:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (uint256) {

151:     function _executor()
152:         internal
153:         view
154:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
155:         returns (address)

160:     function supportsInterface(bytes4 interfaceId)
161:         public
162:         view
163:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
164:         returns (bool)
```

</details>

### <a name="N-34"></a>[N-34] Lib @openzeppelin/contracts-upgradeable should be upgraded to a newer version

These contracts import contracts from `@openzeppelin/contracts-upgradeable`, but they are not using [the latest version](https://github.com/OpenZeppelin/openzeppelin-contracts-upgradeable/releases).

There are 4 instances:

- *GovernorCountingOverridable.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L4) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
```

- *IVotes.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L4) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol";
```

- *LivepeerGovernor.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L4) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
```

- *Treasury.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L4) ):

```solidity
4: import "@openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol";
```

### <a name="N-35"></a>[N-35] @openzeppelin/contracts should be upgraded to a newer version

These contracts import contracts from `@openzeppelin/contracts`, but they are not using [the latest version](https://github.com/OpenZeppelin/openzeppelin-contracts/releases).

There are 4 instances:

- *BondingManager.sol* ( [#L17](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L17) ):

```solidity
17: import "@openzeppelin/contracts/utils/math/SafeMath.sol";
```

- *BondingVotes.sol* ( [#L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L4) ):

```solidity
4: import "@openzeppelin/contracts/utils/Arrays.sol";
```

- *EarningsPoolLIP36.sol* ( [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L7) ):

```solidity
7: import "@openzeppelin/contracts/utils/math/SafeMath.sol";
```

- *SortedArrays.sol* ( [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L6) ):

```solidity
6: import "@openzeppelin/contracts/utils/Arrays.sol";
```

### <a name="N-36"></a>[N-36] The `override` keyword should not be omitted

Although the `override` keyword is not required when overriding an interface function after Solidity 0.8.8, it is recommended not to omit it for code clarity, ease of maintenance and to avoid misunderstandings.

<details>
<summary>There are 26 instances (click to show):</summary>

- *BondingManager.sol* ( [#L302-L306](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L302-L306), [#L394-L399](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L394-L399), [#L462](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L462), [#L937](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L937), [#L1027-L1036](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1027-L1036), [#L1111](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1111), [#L1136](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1136), [#L1145](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1145) ):

```solidity
302:     function updateTranscoderWithFees(
303:         address _transcoder,
304:         uint256 _fees,
305:         uint256 _round
306:     ) external whenSystemNotPaused onlyTicketBroker {

394:     function slashTranscoder(
395:         address _transcoder,
396:         address _finder,
397:         uint256 _slashAmount,
398:         uint256 _finderFee
399:     ) external whenSystemNotPaused onlyVerifier autoClaimEarnings(_transcoder) autoCheckpoint(_transcoder) {

462:     function setCurrentRoundTotalActiveStake() external onlyRoundsManager {

937:     function transcoderTotalStake(address _transcoder) public view returns (uint256) {

1027:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
1028:         public
1029:         view
1030:         returns (
1031:             uint256 totalStake,
1032:             uint256 transcoderRewardCut,
1033:             uint256 transcoderFeeShare,
1034:             uint256 cumulativeRewardFactor,
1035:             uint256 cumulativeFeeFactor
1036:         )

1111:     function getTranscoderPoolSize() public view returns (uint256) {

1136:     function getTotalBonded() public view returns (uint256) {

1145:     function isActiveTranscoder(address _transcoder) public view returns (bool) {
```

- *BondingVotes.sol* ( [#L115](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L115), [#L122](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L122), [#L129](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L129), [#L137](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L137), [#L145](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L145), [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L155), [#L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L167), [#L181](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L181), [#L194](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L194), [#L205](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L205), [#L218](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L218), [#L226](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L226), [#L233-L240](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L233-L240), [#L258-L266](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L258-L266), [#L303](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L303), [#L315](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L315), [#L325](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L325), [#L361-L365](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L361-L365) ):

```solidity
115:     function name() external pure returns (string memory) {

122:     function symbol() external pure returns (string memory) {

129:     function decimals() external pure returns (uint8) {

137:     function clock() public view returns (uint48) {

145:     function CLOCK_MODE() external pure returns (string memory) {

155:     function getVotes(address _account) external view returns (uint256) {

167:     function getPastVotes(address _account, uint256 _round) external view onlyPastRounds(_round) returns (uint256) {

181:     function totalSupply() external view returns (uint256) {

194:     function getPastTotalSupply(uint256 _round) external view onlyPastRounds(_round) returns (uint256) {

205:     function delegates(address _account) external view returns (address) {

218:     function delegatedAt(address _account, uint256 _round) external view onlyPastRounds(_round) returns (address) {

226:     function delegate(address) external pure {

233:     function delegateBySig(
234:         address,
235:         uint256,
236:         uint256,
237:         uint8,
238:         bytes32,
239:         bytes32
240:     ) external pure {

258:     function checkpointBondingState(
259:         address _account,
260:         uint256 _startRound,
261:         uint256 _bondedAmount,
262:         address _delegateAddress,
263:         uint256 _delegatedAmount,
264:         uint256 _lastClaimRound,
265:         uint256 _lastRewardRound
266:     ) external virtual onlyBondingManager {

303:     function checkpointTotalActiveStake(uint256 _totalStake, uint256 _round) external virtual onlyBondingManager {

315:     function hasCheckpoint(address _account) public view returns (bool) {

325:     function getTotalActiveStakeAt(uint256 _round) public view virtual returns (uint256) {

361:     function getBondingStateAt(address _account, uint256 _round)
362:         public
363:         view
364:         virtual
365:         returns (uint256 amount, address delegateAddress)
```

</details>

### <a name="N-37"></a>[N-37] Missing zero address check in functions with address parameters

Adding a zero address check for each address type parameter can prevent errors.

<details>
<summary>There are 69 instances (click to show):</summary>

- *BondingManager.sol* ( [#L130](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L130), [#L207](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L207), [#L232](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L232), [#L302-L306](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L302-L306), [#L485-L490](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L485-L490), [#L537-L545](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L537-L545), [#L640-L647](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L640-L647), [#L679-L686](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L679-L686), [#L745-L749](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L745-L749), [#L796-L800](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L796-L800), [#L818-L823](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L818-L823), [#L842](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L842), [#L908](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L908), [#L923](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L923), [#L937](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L937), [#L946](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L946), [#L956](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L956), [#L987](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L987), [#L1027](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1027), [#L1058](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1058), [#L1089](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1089), [#L1128](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1128), [#L1145](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1145), [#L1167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1167), [#L1307-L1312](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1307-L1312), [#L1352-L1357](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1352-L1357), [#L1392-L1398](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1392-L1398), [#L1437](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1437), [#L1564-L1569](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1564-L1569), [#L1667](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1667) ):

```solidity
/// @audit `_delegator not checked`
130:     modifier autoClaimEarnings(address _delegator) {

/// @audit `_to not checked`
207:     function bond(uint256 _amount, address _to) external {

/// @audit `_to not checked`
232:     function rebondFromUnbonded(address _to, uint256 _unbondingLockId) external {

/// @audit `_transcoder not checked`
302:     function updateTranscoderWithFees(
303:         address _transcoder,
304:         uint256 _fees,
305:         uint256 _round
306:     ) external whenSystemNotPaused onlyTicketBroker {

/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
485:     function transcoderWithHint(
486:         uint256 _rewardCut,
487:         uint256 _feeShare,
488:         address _newPosPrev,
489:         address _newPosNext
490:     ) public whenSystemNotPaused currentRoundInitialized {

/// @audit `_oldDelegateNewPosPrev not checked`
/// @audit `_oldDelegateNewPosNext not checked`
/// @audit `_currDelegateNewPosPrev not checked`
/// @audit `_currDelegateNewPosNext not checked`
537:     function bondForWithHint(
538:         uint256 _amount,
539:         address _owner,
540:         address _to,
541:         address _oldDelegateNewPosPrev,
542:         address _oldDelegateNewPosNext,
543:         address _currDelegateNewPosPrev,
544:         address _currDelegateNewPosNext
545:     ) public whenSystemNotPaused currentRoundInitialized {

/// @audit `_to not checked`
/// @audit `_oldDelegateNewPosPrev not checked`
/// @audit `_oldDelegateNewPosNext not checked`
/// @audit `_currDelegateNewPosPrev not checked`
/// @audit `_currDelegateNewPosNext not checked`
640:     function bondWithHint(
641:         uint256 _amount,
642:         address _to,
643:         address _oldDelegateNewPosPrev,
644:         address _oldDelegateNewPosNext,
645:         address _currDelegateNewPosPrev,
646:         address _currDelegateNewPosNext
647:     ) public {

/// @audit `_oldDelegateNewPosPrev not checked`
/// @audit `_oldDelegateNewPosNext not checked`
/// @audit `_newDelegateNewPosPrev not checked`
/// @audit `_newDelegateNewPosNext not checked`
679:     function transferBond(
680:         address _delegator,
681:         uint256 _amount,
682:         address _oldDelegateNewPosPrev,
683:         address _oldDelegateNewPosNext,
684:         address _newDelegateNewPosPrev,
685:         address _newDelegateNewPosNext
686:     ) public whenSystemNotPaused currentRoundInitialized {

/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
745:     function unbondWithHint(
746:         uint256 _amount,
747:         address _newPosPrev,
748:         address _newPosNext
749:     ) public whenSystemNotPaused currentRoundInitialized autoClaimEarnings(msg.sender) autoCheckpoint(msg.sender) {

/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
796:     function rebondWithHint(
797:         uint256 _unbondingLockId,
798:         address _newPosPrev,
799:         address _newPosNext
800:     ) public whenSystemNotPaused currentRoundInitialized autoClaimEarnings(msg.sender) {

/// @audit `_to not checked`
/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
818:     function rebondFromUnbondedWithHint(
819:         address _to,
820:         uint256 _unbondingLockId,
821:         address _newPosPrev,
822:         address _newPosNext
823:     ) public whenSystemNotPaused currentRoundInitialized autoClaimEarnings(msg.sender) {

/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
842:     function rewardWithHint(address _newPosPrev, address _newPosNext)

/// @audit `_delegator not checked`
908:     function pendingStake(address _delegator, uint256 _endRound) public view returns (uint256) {

/// @audit `_delegator not checked`
923:     function pendingFees(address _delegator, uint256 _endRound) public view returns (uint256) {

/// @audit `_transcoder not checked`
937:     function transcoderTotalStake(address _transcoder) public view returns (uint256) {

/// @audit `_transcoder not checked`
946:     function transcoderStatus(address _transcoder) public view returns (TranscoderStatus) {

/// @audit `_delegator not checked`
956:     function delegatorStatus(address _delegator) public view returns (DelegatorStatus) {

/// @audit `_transcoder not checked`
987:     function getTranscoder(address _transcoder)

/// @audit `_transcoder not checked`
1027:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)

/// @audit `_delegator not checked`
1058:     function getDelegator(address _delegator)

/// @audit `_delegator not checked`
1089:     function getDelegatorUnbondingLock(address _delegator, uint256 _unbondingLockId)

/// @audit `_transcoder not checked`
1128:     function getNextTranscoderInPool(address _transcoder) public view returns (address) {

/// @audit `_transcoder not checked`
1145:     function isActiveTranscoder(address _transcoder) public view returns (bool) {

/// @audit `_delegator not checked`
1167:     function isValidUnbondingLock(address _delegator, uint256 _unbondingLockId) public view returns (bool) {

/// @audit `_delegate not checked`
/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
1307:     function increaseTotalStakeUncheckpointed(
1308:         address _delegate,
1309:         uint256 _amount,
1310:         address _newPosPrev,
1311:         address _newPosNext
1312:     ) internal {

/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
1352:     function decreaseTotalStake(
1353:         address _delegate,
1354:         uint256 _amount,
1355:         address _newPosPrev,
1356:         address _newPosNext
1357:     ) internal autoCheckpoint(_delegate) {

/// @audit `_transcoder not checked`
/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
1392:     function tryToJoinActiveSet(
1393:         address _transcoder,
1394:         uint256 _totalStake,
1395:         uint256 _activationRound,
1396:         address _newPosPrev,
1397:         address _newPosNext
1398:     ) internal {

/// @audit `_transcoder not checked`
1437:     function resignTranscoder(address _transcoder) internal {

/// @audit `_newPosPrev not checked`
/// @audit `_newPosNext not checked`
1564:     function processRebond(
1565:         address _delegator,
1566:         uint256 _unbondingLockId,
1567:         address _newPosPrev,
1568:         address _newPosNext
1569:     ) internal autoCheckpoint(_delegator) {

/// @audit `_delegator not checked`
1667:     function _autoClaimEarnings(address _delegator) internal {
```

- *BondingVotes.sol* ( [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L155), [#L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L167), [#L205](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L205), [#L218](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L218), [#L226](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L226), [#L233-L240](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L233-L240), [#L258-L266](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L258-L266), [#L315](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L315), [#L422](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L422), [#L520](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L520) ):

```solidity
/// @audit `_account not checked`
155:     function getVotes(address _account) external view returns (uint256) {

/// @audit `_account not checked`
167:     function getPastVotes(address _account, uint256 _round) external view onlyPastRounds(_round) returns (uint256) {

/// @audit `_account not checked`
205:     function delegates(address _account) external view returns (address) {

/// @audit `_account not checked`
218:     function delegatedAt(address _account, uint256 _round) external view onlyPastRounds(_round) returns (address) {

/// @audit ` not checked`
226:     function delegate(address) external pure {

/// @audit ` not checked`
233:     function delegateBySig(
234:         address,
235:         uint256,
236:         uint256,
237:         uint8,
238:         bytes32,
239:         bytes32
240:     ) external pure {

/// @audit `_delegateAddress not checked`
258:     function checkpointBondingState(
259:         address _account,
260:         uint256 _startRound,
261:         uint256 _bondedAmount,
262:         address _delegateAddress,
263:         uint256 _delegatedAmount,
264:         uint256 _lastClaimRound,
265:         uint256 _lastRewardRound
266:     ) external virtual onlyBondingManager {

/// @audit `_account not checked`
315:     function hasCheckpoint(address _account) public view returns (bool) {

/// @audit `_account not checked`
422:     function getBondingCheckpointAt(address _account, uint256 _round)

/// @audit `_transcoder not checked`
520:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
```

- *GovernorCountingOverridable.sol* ( [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L83), [#L130-L136](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L130-L136) ):

```solidity
/// @audit `_account not checked`
83:     function hasVoted(uint256 _proposalId, address _account) public view virtual override returns (bool) {

/// @audit `_account not checked`
130:     function _countVote(
131:         uint256 _proposalId,
132:         address _account,
133:         uint8 _supportInt,
134:         uint256 _weight,
135:         bytes memory // params
136:     ) internal virtual override {
```

- *LivepeerGovernor.sol* ( [#L132-L138](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L132-L138), [#L142-L147](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L142-L147) ):

```solidity
/// @audit `targets not checked`
132:     function _execute(
133:         uint256 proposalId,
134:         address[] memory targets,
135:         uint256[] memory values,
136:         bytes[] memory calldatas,
137:         bytes32 descriptionHash
138:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) {

/// @audit `targets not checked`
142:     function _cancel(
143:         address[] memory targets,
144:         uint256[] memory values,
145:         bytes[] memory calldatas,
146:         bytes32 descriptionHash
147:     ) internal override(GovernorUpgradeable, GovernorTimelockControlUpgradeable) returns (uint256) {
```

- *Treasury.sol* ( [#L16-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16-L21) ):

```solidity
/// @audit `proposers not checked`
/// @audit `executors not checked`
/// @audit `admin not checked`
16:     function initialize(
17:         uint256 minDelay,
18:         address[] memory proposers,
19:         address[] memory executors,
20:         address admin
21:     ) external initializer {
```

</details>

### <a name="N-38"></a>[N-38] Contract functions should use an `interface`

All `external`/`public` functions should extend an `interface`. This is useful to make sure that the whole API is extracted.

<details>
<summary>There are 45 instances (click to show):</summary>

- *BondingManager.sol* ( [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L155), [#L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L167), [#L176](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L176), [#L186](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L186), [#L198](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L198), [#L207](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L207), [#L215](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L215), [#L223](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L223), [#L232](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L232), [#L241](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L241), [#L249](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L249), [#L273-L278](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L273-L278), [#L293](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L293), [#L447-L452](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L447-L452), [#L485-L490](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L485-L490), [#L537-L545](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L537-L545), [#L640-L647](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L640-L647), [#L679-L686](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L679-L686), [#L745-L749](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L745-L749), [#L796-L800](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L796-L800), [#L818-L823](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L818-L823), [#L842-L847](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L842-L847), [#L908](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L908), [#L923](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L923), [#L946](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L946), [#L956](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L956), [#L987-L990](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L987-L990), [#L1058-L1061](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1058-L1061), [#L1089-L1092](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1089-L1092), [#L1103](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1103), [#L1119](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1119), [#L1128](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1128), [#L1156](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1156), [#L1167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1167) ):

```solidity
155:     function setUnbondingPeriod(uint64 _unbondingPeriod) external onlyControllerOwner {

167:     function setTreasuryRewardCutRate(uint256 _cutRate) external onlyControllerOwner {

176:     function setTreasuryBalanceCeiling(uint256 _ceiling) external onlyControllerOwner {

186:     function setNumActiveTranscoders(uint256 _numActiveTranscoders) external onlyControllerOwner {

198:     function transcoder(uint256 _rewardCut, uint256 _feeShare) external {

207:     function bond(uint256 _amount, address _to) external {

215:     function unbond(uint256 _amount) external {

223:     function rebond(uint256 _unbondingLockId) external {

232:     function rebondFromUnbonded(address _to, uint256 _unbondingLockId) external {

241:     function checkpointBondingState(address _account) external {

249:     function withdrawStake(uint256 _unbondingLockId) external whenSystemNotPaused currentRoundInitialized {

273:     function withdrawFees(address payable _recipient, uint256 _amount)
274:         external
275:         whenSystemNotPaused
276:         currentRoundInitialized
277:         autoClaimEarnings(msg.sender)
278:     {

293:     function reward() external {

447:     function claimEarnings(uint256 _endRound)
448:         external
449:         whenSystemNotPaused
450:         currentRoundInitialized
451:         autoCheckpoint(msg.sender)
452:     {

485:     function transcoderWithHint(
486:         uint256 _rewardCut,
487:         uint256 _feeShare,
488:         address _newPosPrev,
489:         address _newPosNext
490:     ) public whenSystemNotPaused currentRoundInitialized {

537:     function bondForWithHint(
538:         uint256 _amount,
539:         address _owner,
540:         address _to,
541:         address _oldDelegateNewPosPrev,
542:         address _oldDelegateNewPosNext,
543:         address _currDelegateNewPosPrev,
544:         address _currDelegateNewPosNext
545:     ) public whenSystemNotPaused currentRoundInitialized {

640:     function bondWithHint(
641:         uint256 _amount,
642:         address _to,
643:         address _oldDelegateNewPosPrev,
644:         address _oldDelegateNewPosNext,
645:         address _currDelegateNewPosPrev,
646:         address _currDelegateNewPosNext
647:     ) public {

679:     function transferBond(
680:         address _delegator,
681:         uint256 _amount,
682:         address _oldDelegateNewPosPrev,
683:         address _oldDelegateNewPosNext,
684:         address _newDelegateNewPosPrev,
685:         address _newDelegateNewPosNext
686:     ) public whenSystemNotPaused currentRoundInitialized {

745:     function unbondWithHint(
746:         uint256 _amount,
747:         address _newPosPrev,
748:         address _newPosNext
749:     ) public whenSystemNotPaused currentRoundInitialized autoClaimEarnings(msg.sender) autoCheckpoint(msg.sender) {

796:     function rebondWithHint(
797:         uint256 _unbondingLockId,
798:         address _newPosPrev,
799:         address _newPosNext
800:     ) public whenSystemNotPaused currentRoundInitialized autoClaimEarnings(msg.sender) {

818:     function rebondFromUnbondedWithHint(
819:         address _to,
820:         uint256 _unbondingLockId,
821:         address _newPosPrev,
822:         address _newPosNext
823:     ) public whenSystemNotPaused currentRoundInitialized autoClaimEarnings(msg.sender) {

842:     function rewardWithHint(address _newPosPrev, address _newPosNext)
843:         public
844:         whenSystemNotPaused
845:         currentRoundInitialized
846:         autoCheckpoint(msg.sender)
847:     {

908:     function pendingStake(address _delegator, uint256 _endRound) public view returns (uint256) {

923:     function pendingFees(address _delegator, uint256 _endRound) public view returns (uint256) {

946:     function transcoderStatus(address _transcoder) public view returns (TranscoderStatus) {

956:     function delegatorStatus(address _delegator) public view returns (DelegatorStatus) {

987:     function getTranscoder(address _transcoder)
988:         public
989:         view
990:         returns (

1058:     function getDelegator(address _delegator)
1059:         public
1060:         view
1061:         returns (

1089:     function getDelegatorUnbondingLock(address _delegator, uint256 _unbondingLockId)
1090:         public
1091:         view
1092:         returns (uint256 amount, uint256 withdrawRound)

1103:     function getTranscoderPoolMaxSize() public view returns (uint256) {

1119:     function getFirstTranscoderInPool() public view returns (address) {

1128:     function getNextTranscoderInPool(address _transcoder) public view returns (address) {

1156:     function isRegisteredTranscoder(address _transcoder) public view returns (bool) {

1167:     function isValidUnbondingLock(address _delegator, uint256 _unbondingLockId) public view returns (bool) {
```

- *GovernorCountingOverridable.sol* ( [#L76](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L76), [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L83), [#L90-L94](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L90-L94), [#L217](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L217) ):

```solidity
76:     function COUNTING_MODE() public pure virtual override returns (string memory) {

83:     function hasVoted(uint256 _proposalId, address _account) public view virtual override returns (bool) {

90:     function proposalVotes(uint256 _proposalId)
91:         public
92:         view
93:         virtual
94:         returns (

217:     function votes() public view virtual returns (IVotes);
```

- *LivepeerGovernor.sol* ( [#L54-L60](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L54-L60), [#L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L78), [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L85), [#L94](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L94), [#L114-L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L114-L118), [#L123-L127](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L123-L127) ):

```solidity
54:     function initialize(
55:         uint256 initialVotingDelay,
56:         uint256 initialVotingPeriod,
57:         uint256 initialProposalThreshold,
58:         uint256 initialQuorum,
59:         uint256 quota
60:     ) public initializer {

78:     function quorumDenominator() public view virtual override returns (uint256) {

85:     function votes() public view override returns (IVotes) {

94:     function bumpGovernorVotesTokenAddress() external {

114:     function proposalThreshold()
115:         public
116:         view
117:         override(GovernorUpgradeable, GovernorSettingsUpgradeable)
118:         returns (uint256)

123:     function state(uint256 proposalId)
124:         public
125:         view
126:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
127:         returns (ProposalState)
```

- *Treasury.sol* ( [#L16-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16-L21) ):

```solidity
16:     function initialize(
17:         uint256 minDelay,
18:         address[] memory proposers,
19:         address[] memory executors,
20:         address admin
21:     ) external initializer {
```

</details>

### <a name="N-39"></a>[N-39] Constants should be put on the left side of comparisons

Putting constants on the left side of comparison statements is a best practice known as [Yoda conditions](https://en.wikipedia.org/wiki/Yoda_conditions).
Although solidity's static typing system prevents accidental assignments within conditionals, adopting this practice can improve code readability and consistency, especially when working across multiple languages.

<details>
<summary>There are 26 instances (click to show):</summary>

- *BondingManager.sol* ( [#L279](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L279), [#L343](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L343), [#L424](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L424), [#L595](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L595), [#L599](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L599), [#L719](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L719), [#L719](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L719), [#L769](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L769), [#L959](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L959), [#L1215](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1215), [#L1221](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1221), [#L1512](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1512), [#L1520](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1520), [#L1527](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1527) ):

```solidity
/// @audit put `address(0)` on the left
279:         require(_recipient != address(0), "invalid recipient");

/// @audit put `0` on the left
343:         if (prevEarningsPool.cumulativeRewardFactor == 0 && lastRewardRound == currentRound) {

/// @audit put `address(0)` on the left
424:             if (_finder != address(0)) {

/// @audit put `0` on the left
595:             if (currPool.cumulativeRewardFactor == 0) {

/// @audit put `0` on the left
599:             if (currPool.cumulativeFeeFactor == 0) {

/// @audit put `address(0)` on the left
719:         if (newDel.delegateAddress == address(0) && newDel.bondedAmount == 0) {

/// @audit put `0` on the left
719:         if (newDel.delegateAddress == address(0) && newDel.bondedAmount == 0) {

/// @audit put `0` on the left
769:         if (del.bondedAmount == 0) {

/// @audit put `0` on the left
959:         if (del.bondedAmount == 0) {

/// @audit put `0` on the left
1215:         if (pool.cumulativeRewardFactor == 0 && lastRewardRound < _round) {

/// @audit put `0` on the left
1221:         if (pool.cumulativeFeeFactor == 0 && lastFeeRound < _round) {

/// @audit put `address(0)` on the left
1512:         if (del.delegateAddress != address(0)) {

/// @audit put `0` on the left
1520:             if (endEarningsPool.cumulativeRewardFactor == 0) {

/// @audit put `0` on the left
1527:             if (endEarningsPool.cumulativeFeeFactor == 0) {
```

- *BondingVotes.sol* ( [#L98](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L98), [#L337](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L337), [#L372](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L372), [#L510](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L510) ):

```solidity
/// @audit put `0` on the left
98:             revert FutureLookup(_round, currentRound == 0 ? 0 : currentRound - 1);

/// @audit put `0` on the left
337:         if (upper == 0) {

/// @audit put `0` on the left
372:         if (bond.bondedAmount == 0) {

/// @audit put `0` on the left
510:             if (pool.cumulativeRewardFactor == 0) {
```

- *EarningsPoolLIP36.sol* ( [#L24](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L24), [#L29](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L29), [#L52](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L52), [#L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L78), [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L83) ):

```solidity
/// @audit put `0` on the left
24:         uint256 prevCumulativeRewardFactor = _prevEarningsPool.cumulativeRewardFactor != 0

/// @audit put `0` on the left
29:         if (earningsPool.cumulativeFeeFactor == 0) {

/// @audit put `0` on the left
52:         uint256 prevCumulativeRewardFactor = _prevEarningsPool.cumulativeRewardFactor != 0

/// @audit put `0` on the left
78:         if (_startPool.cumulativeRewardFactor == 0) {

/// @audit put `0` on the left
83:         if (_endPool.cumulativeRewardFactor == 0) {
```

- *SortedArrays.sol* ( [#L30](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L30), [#L49](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L49), [#L65](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L65) ):

```solidity
/// @audit put `0` on the left
30:         if (len == 0) {

/// @audit put `0` on the left
49:         if (upperIdx == 0) {

/// @audit put `0` on the left
65:         if (array.length == 0) {
```

</details>

### <a name="N-40"></a>[N-40] `else`-block not required

One level of nesting can be removed by not having an `else` block when the `if`-block always jumps at the end. For example:
```solidity
if (condition) {
    body1...
    return x;
} else {
    body2...
}
```
can be changed to:
```solidity
if (condition) {
    body1...
    return x;
}
body2...
```

There are 2 instances:

- *BondingManager.sol* ( [#L962-L965](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L962-L965) ):

```solidity
962:         } else if (del.startRound > roundsManager().currentRound()) {
963:             // Delegator round start is in the future
964:             return DelegatorStatus.Pending;
965:         } else {
```

- *BondingVotes.sol* ( [#L341-L345](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L341-L345) ):

```solidity
341:         } else if (upper < initializedRounds.length) {
342:             // Use the checkpoint from the next initialized round, which got the next total active stake checkpointed.
343:             uint256 nextInitedRound = initializedRounds[upper];
344:             return totalStakeCheckpoints.data[nextInitedRound];
345:         } else {
```

### <a name="N-41"></a>[N-41] Redundant return statement in a function with named return variables

Because the return variable (or its default value) has been assigned, explicit return at the end of the function is unnecessary, as it is returned automatically.

There are 4 instances:

- *BondingManager.sol* ( [#L1189-L1198](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1189-L1198), [#L1206-L1226](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1206-L1226), [#L1286](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1286) ):

```solidity
1189:     function cumulativeFactorsPool(Transcoder storage _transcoder, uint256 _round)
1190:         internal
1191:         view
1192:         returns (EarningsPool.Data memory pool)
1193:     {
1194:         pool.cumulativeRewardFactor = _transcoder.earningsPoolPerRound[_round].cumulativeRewardFactor;
1195:         pool.cumulativeFeeFactor = _transcoder.earningsPoolPerRound[_round].cumulativeFeeFactor;
1196: 
1197:         return pool;
1198:     }

1206:     function latestCumulativeFactorsPool(Transcoder storage _transcoder, uint256 _round)
1207:         internal
1208:         view
1209:         returns (EarningsPool.Data memory pool)
1210:     {
1211:         pool = cumulativeFactorsPool(_transcoder, _round);
1212: 
1213:         uint256 lastRewardRound = _transcoder.lastRewardRound;
1214:         // Only use the cumulativeRewardFactor for lastRewardRound if lastRewardRound is before _round
1215:         if (pool.cumulativeRewardFactor == 0 && lastRewardRound < _round) {
1216:             pool.cumulativeRewardFactor = cumulativeFactorsPool(_transcoder, lastRewardRound).cumulativeRewardFactor;
1217:         }
1218: 
1219:         uint256 lastFeeRound = _transcoder.lastFeeRound;
1220:         // Only use the cumulativeFeeFactor for lastFeeRound if lastFeeRound is before _round
1221:         if (pool.cumulativeFeeFactor == 0 && lastFeeRound < _round) {
1222:             pool.cumulativeFeeFactor = cumulativeFactorsPool(_transcoder, lastFeeRound).cumulativeFeeFactor;
1223:         }
1224: 
1225:         return pool;
1226:     }

1286:         return (stake, fees);
```

- *EarningsPoolLIP36.sol* ( [#L97](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L97) ):

```solidity
97:         return (cStake, cFees);
```

### <a name="N-42"></a>[N-42] Solidity compiler version is not fixed

To prevent the actual contracts deployed from behaving differently depending on the compiler version, it is recommended to use a fixed solidity version.

There is 1 instance:

- *IBondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L2) ):

```solidity
2: pragma solidity ^0.8.9;
```

### <a name="N-43"></a>[N-43] Control structures do not follow the Solidity Style Guide

Refer to the [Solidity style guide - Control Structures](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#control-structures).

<details>
<summary>There are 22 instances (click to show):</summary>

- *BondingManager.sol* ( [#L273-L278](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L273-L278), [#L447-L452](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L447-L452), [#L842-L847](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L842-L847), [#L947](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L947), [#L987-L1002](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L987-L1002), [#L1027-L1037](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1027-L1037), [#L1058-L1070](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1058-L1070), [#L1089-L1093](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1089-L1093), [#L1189-L1193](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1189-L1193), [#L1206-L1210](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1206-L1210), [#L1259-L1263](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1259-L1263) ):

```solidity
273:     function withdrawFees(address payable _recipient, uint256 _amount)
274:         external
275:         whenSystemNotPaused
276:         currentRoundInitialized
277:         autoClaimEarnings(msg.sender)
278:     {

447:     function claimEarnings(uint256 _endRound)
448:         external
449:         whenSystemNotPaused
450:         currentRoundInitialized
451:         autoCheckpoint(msg.sender)
452:     {

842:     function rewardWithHint(address _newPosPrev, address _newPosNext)
843:         public
844:         whenSystemNotPaused
845:         currentRoundInitialized
846:         autoCheckpoint(msg.sender)
847:     {

947:         if (isRegisteredTranscoder(_transcoder)) return TranscoderStatus.Registered;

987:     function getTranscoder(address _transcoder)
988:         public
989:         view
990:         returns (
991:             uint256 lastRewardRound,
992:             uint256 rewardCut,
993:             uint256 feeShare,
994:             uint256 lastActiveStakeUpdateRound,
995:             uint256 activationRound,
996:             uint256 deactivationRound,
997:             uint256 activeCumulativeRewards,
998:             uint256 cumulativeRewards,
999:             uint256 cumulativeFees,
1000:             uint256 lastFeeRound
1001:         )
1002:     {

1027:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
1028:         public
1029:         view
1030:         returns (
1031:             uint256 totalStake,
1032:             uint256 transcoderRewardCut,
1033:             uint256 transcoderFeeShare,
1034:             uint256 cumulativeRewardFactor,
1035:             uint256 cumulativeFeeFactor
1036:         )
1037:     {

1058:     function getDelegator(address _delegator)
1059:         public
1060:         view
1061:         returns (
1062:             uint256 bondedAmount,
1063:             uint256 fees,
1064:             address delegateAddress,
1065:             uint256 delegatedAmount,
1066:             uint256 startRound,
1067:             uint256 lastClaimRound,
1068:             uint256 nextUnbondingLockId
1069:         )
1070:     {

1089:     function getDelegatorUnbondingLock(address _delegator, uint256 _unbondingLockId)
1090:         public
1091:         view
1092:         returns (uint256 amount, uint256 withdrawRound)
1093:     {

1189:     function cumulativeFactorsPool(Transcoder storage _transcoder, uint256 _round)
1190:         internal
1191:         view
1192:         returns (EarningsPool.Data memory pool)
1193:     {

1206:     function latestCumulativeFactorsPool(Transcoder storage _transcoder, uint256 _round)
1207:         internal
1208:         view
1209:         returns (EarningsPool.Data memory pool)
1210:     {

1259:     function pendingStakeAndFees(address _delegator, uint256 _endRound)
1260:         internal
1261:         view
1262:         returns (uint256 stake, uint256 fees)
1263:     {
```

- *BondingVotes.sol* ( [#L361-L366](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L361-L366), [#L422-L426](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L422-L426), [#L459-L463](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L459-L463), [#L499-L503](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L499-L503), [#L520-L524](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L520-L524) ):

```solidity
361:     function getBondingStateAt(address _account, uint256 _round)
362:         public
363:         view
364:         virtual
365:         returns (uint256 amount, address delegateAddress)
366:     {

422:     function getBondingCheckpointAt(address _account, uint256 _round)
423:         internal
424:         view
425:         returns (BondingCheckpoint storage)
426:     {

459:     function delegatorCumulativeStakeAt(BondingCheckpoint storage bond, uint256 _round)
460:         internal
461:         view
462:         returns (uint256)
463:     {

499:     function getLastTranscoderRewardsEarningsPool(address _transcoder, uint256 _round)
500:         internal
501:         view
502:         returns (uint256 rewardRound, EarningsPool.Data memory pool)
503:     {

520:     function getTranscoderEarningsPoolForRound(address _transcoder, uint256 _round)
521:         internal
522:         view
523:         returns (EarningsPool.Data memory pool)
524:     {
```

- *GovernorCountingOverridable.sol* ( [#L90-L99](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L90-L99) ):

```solidity
90:     function proposalVotes(uint256 _proposalId)
91:         public
92:         view
93:         virtual
94:         returns (
95:             uint256 againstVotes,
96:             uint256 forVotes,
97:             uint256 abstainVotes
98:         )
99:     {
```

- *LivepeerGovernor.sol* ( [#L26-L35](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L26-L35), [#L114-L119](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L114-L119), [#L123-L128](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L123-L128), [#L151-L156](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L151-L156), [#L160-L165](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L160-L165) ):

```solidity
26: contract LivepeerGovernor is
27:     ManagerProxyTarget,
28:     Initializable,
29:     GovernorUpgradeable,
30:     GovernorSettingsUpgradeable,
31:     GovernorTimelockControlUpgradeable,
32:     GovernorVotesUpgradeable,
33:     GovernorVotesQuorumFractionUpgradeable,
34:     GovernorCountingOverridable
35: {

114:     function proposalThreshold()
115:         public
116:         view
117:         override(GovernorUpgradeable, GovernorSettingsUpgradeable)
118:         returns (uint256)
119:     {

123:     function state(uint256 proposalId)
124:         public
125:         view
126:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
127:         returns (ProposalState)
128:     {

151:     function _executor()
152:         internal
153:         view
154:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
155:         returns (address)
156:     {

160:     function supportsInterface(bytes4 interfaceId)
161:         public
162:         view
163:         override(GovernorUpgradeable, GovernorTimelockControlUpgradeable)
164:         returns (bool)
165:     {
```

</details>

### <a name="N-44"></a>[N-44] Functions and modifiers should be named in mixedCase style

As the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.21/style-guide.html#function-names) suggests: functions and modifiers should be named in mixedCase style.

There are 5 instances:

- *BondingManager.sol* ( [#L1631](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1631) ):

```solidity
1631:     function l2Migrator() internal view returns (address) {
```

- *BondingVotes.sol* ( [#L145](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L145) ):

```solidity
145:     function CLOCK_MODE() external pure returns (string memory) {
```

- *GovernorCountingOverridable.sol* ( [#L64](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L64), [#L68](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L68), [#L76](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L76) ):

```solidity
64:     function __GovernorCountingOverridable_init(uint256 _quota) internal onlyInitializing {

68:     function __GovernorCountingOverridable_init_unchained(uint256 _quota) internal onlyInitializing {

76:     function COUNTING_MODE() public pure virtual override returns (string memory) {
```

### <a name="N-45"></a>[N-45] Order of contract layout does not follow the Solidity Style Guide

As suggested by the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.20/style-guide.html#order-of-layout):
- Layout contract elements in the following order: `pragma statements`, `import statements`, `interfaces`, `libraries`, `contracts`.
- Inside each contract, library or interface, use the following order: `type declarations`, `state variables`, `events`, `errors`, `modifiers`, `functions`.

There are 4 instances:

- *BondingManager.sol* ( [#L53](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L53) ):

```solidity
/// @audit ↑ Out of order with var unbondingPeriod
53:     enum TranscoderStatus {
```

- *IBondingVotes.sol* ( [#L27](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L27) ):

```solidity
/// @audit ↑ Out of order with error MustCallBondingManager
27:     event DelegatorBondedAmountChanged(address indexed delegate, uint256 previousBondedAmount, uint256 newBondedAmount);
```

- *GovernorCountingOverridable.sol* ( [#L28](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L28), [#L224](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L224) ):

```solidity
/// @audit ↑ Out of order with error VoteAlreadyCast
28:     enum VoteType {

/// @audit ↑ Out of order with function votes()
224:     uint256[48] private __gap;
```

### <a name="N-46"></a>[N-46] Whitespace in Expressions

See the [Whitespace in Expressions](https://docs.soliditylang.org/en/latest/style-guide.html#whitespace-in-expressions) section of the Solidity Style Guide.

There are 5 instances:

- *BondingManager.sol* ( [#L913](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L913) ):

```solidity
/// @audit Whitespace inside parenthesis
913:         (uint256 stake, ) = pendingStakeAndFees(_delegator, endRound);
```

- *BondingVotes.sol* ( [#L156](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L156), [#L168](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L168), [#L480](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L480) ):

```solidity
/// @audit Whitespace inside parenthesis
156:         (uint256 amount, ) = getBondingStateAt(_account, clock() + 1);

/// @audit Whitespace inside parenthesis
168:         (uint256 amount, ) = getBondingStateAt(_account, _round + 1);

/// @audit Whitespace inside parenthesis
480:         (uint256 stakeWithRewards, ) = EarningsPoolLIP36.delegatorCumulativeStakeAndFees(
```

- *GovernorCountingOverridable.sol* ( [#L119](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L119) ):

```solidity
/// @audit Whitespace inside parenthesis
119:         (uint256 againstVotes, uint256 forVotes, ) = proposalVotes(_proposalId);
```

### <a name="N-47"></a>[N-47] `TODO`s left in the code

TODOs may signal that a feature is missing or not ready for audit, consider resolving the issue and removing the TODO comment

There is 1 instance:

- *IBondingManager.sol* ( [#L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L6) ):

```solidity
6:  * TODO: switch to interface type
```

### <a name="N-48"></a>[N-48] High cyclomatic complexity

Consider breaking down these blocks into more manageable units, by splitting things into utility functions, by reducing nesting, and by using early returns.

There is 1 instance:

- *BondingManager.sol* ( [#L537-L623](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L537-L623) ):

```solidity
537:     function bondForWithHint(
538:         uint256 _amount,
539:         address _owner,
540:         address _to,
541:         address _oldDelegateNewPosPrev,
542:         address _oldDelegateNewPosNext,
543:         address _currDelegateNewPosPrev,
544:         address _currDelegateNewPosNext
545:     ) public whenSystemNotPaused currentRoundInitialized {
546:         // the `autoClaimEarnings` modifier has been replaced with its internal function as a `Stack too deep` error work-around
547:         _autoClaimEarnings(_owner);
548:         Delegator storage del = delegators[_owner];
549: 
550:         uint256 currentRound = roundsManager().currentRound();
551:         // Amount to delegate
552:         uint256 delegationAmount = _amount;
553:         // Current delegate
554:         address currentDelegate = del.delegateAddress;
555:         // Current bonded amount
556:         uint256 currentBondedAmount = del.bondedAmount;
557: 
558:         // Requirements for a third party caller that is not the L2Migrator
559:         if (msg.sender != _owner && msg.sender != l2Migrator()) {
560:             // Does not trigger self-delegation
561:             // Does not change the delegate if it is already non-null
......
599:             if (currPool.cumulativeFeeFactor == 0) {
600:                 currPool.cumulativeFeeFactor = cumulativeFactorsPool(newDelegate, newDelegate.lastFeeRound)
601:                     .cumulativeFeeFactor;
602:             }
603:         }
604: 
605:         // cannot delegate to someone without having bonded stake
606:         require(delegationAmount > 0, "delegation amount must be greater than 0");
607:         // Update delegate
608:         del.delegateAddress = _to;
609:         // Update bonded amount
610:         del.bondedAmount = currentBondedAmount.add(_amount);
611: 
612:         increaseTotalStake(_to, delegationAmount, _currDelegateNewPosPrev, _currDelegateNewPosNext);
613: 
614:         if (_amount > 0) {
615:             // Transfer the LPT to the Minter
616:             livepeerToken().transferFrom(msg.sender, address(minter()), _amount);
617:         }
618: 
619:         emit Bond(_to, currentDelegate, _owner, _amount, del.bondedAmount);
620: 
621:         // the `autoCheckpoint` modifier has been replaced with its internal function as a `Stack too deep` error work-around
622:         _checkpointBondingState(_owner, del, transcoders[_owner]);
623:     }
```

### <a name="N-49"></a>[N-49] Typos

There are 3 instances:

- *BondingManager.sol* ( [#L30](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L30), [#L34](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L34) ):

```solidity
/// @audit Occurances
30:     // Occurances are replaced at compile time

/// @audit withdrawl
34:     // Time between unbonding and possible withdrawl in rounds
```

- *BondingVotes.sol* ( [#L475](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L475) ):

```solidity
/// @audit wil
475:             // If the transcoder hasn't called reward() since the last time the delegator claimed earnings, there wil be
```

### <a name="N-50"></a>[N-50] Unused contract variables

The following state variables are defined but not used.
It is recommended to check the code for logical omissions that cause them not to be used. If it's determined that they are not needed anywhere, it's best to remove them from the codebase to improve code clarity and minimize confusion.

There is 1 instance:

- *GovernorCountingOverridable.sol* ( [#L224](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L224) ):

```solidity
224:     uint256[48] private __gap;
```

### <a name="N-51"></a>[N-51] Unused named return

Declaring named returns, but not using them, is confusing to the reader. Consider either completely removing them (by declaring just the type without a name), or remove the return statement and do a variable assignment. This would improve the readability of the code, and it may also help reduce regressions during future code refactors.

There are 7 instances:

- *BondingManager.sol* ( [#L1089-L1092](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1089-L1092), [#L1238-L1244](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1238-L1244) ):

```solidity
/// @audit amount
/// @audit withdrawRound
1089:     function getDelegatorUnbondingLock(address _delegator, uint256 _unbondingLockId)
1090:         public
1091:         view
1092:         returns (uint256 amount, uint256 withdrawRound)

/// @audit cStake
/// @audit cFees
1238:     function delegatorCumulativeStakeAndFees(
1239:         Transcoder storage _transcoder,
1240:         uint256 _startRound,
1241:         uint256 _endRound,
1242:         uint256 _stake,
1243:         uint256 _fees
1244:     ) internal view returns (uint256 cStake, uint256 cFees) {
```

- *GovernorCountingOverridable.sol* ( [#L90-L98](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L90-L98) ):

```solidity
/// @audit againstVotes
/// @audit forVotes
/// @audit abstainVotes
90:     function proposalVotes(uint256 _proposalId)
91:         public
92:         view
93:         virtual
94:         returns (
95:             uint256 againstVotes,
96:             uint256 forVotes,
97:             uint256 abstainVotes
98:         )
```

### <a name="N-52"></a>[N-52] Consider using `delete` rather than assigning zero to clear values

The `delete` keyword more closely matches the semantics of what is being done, and draws more attention to the changing of state, which may lead to a more thorough audit of its associated logic.

There are 5 instances:

- *BondingManager.sol* ( [#L771](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L771), [#L773](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L773), [#L1535](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1535), [#L1536](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1536) ):

```solidity
771:             del.delegateAddress = address(0);

773:             del.startRound = 0;

1535:                 t.cumulativeFees = 0;

1536:                 t.cumulativeRewards = 0;
```

- *BondingVotes.sol* ( [#L373](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L373) ):

```solidity
373:             amount = 0;
```

### <a name="N-53"></a>[N-53] Named mappings are recommended

[Named mappings](https://docs.soliditylang.org/en/v0.8.18/types.html#mapping-types) (with syntax `mapping(KeyType KeyName? => ValueType ValueName?)`) are recommended.It can make the mapping variables clearer, more readable and easier to maintain.

There are 9 instances:

- *BondingManager.sol* ( [#L42](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L42), [#L67](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L67), [#L84](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L84), [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L85) ):

```solidity
42:         mapping(uint256 => EarningsPool.Data) earningsPoolPerRound; // Mapping of round => earnings pool for the round

67:         mapping(uint256 => UnbondingLock) unbondingLocks; // Mapping of unbonding lock ID => unbonding lock

84:     mapping(address => Delegator) private delegators;

85:     mapping(address => Transcoder) private transcoders;
```

- *BondingVotes.sol* ( [#L61](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L61), [#L72](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L72), [#L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L78) ):

```solidity
61:         mapping(uint256 => BondingCheckpoint) data;

72:         mapping(uint256 => uint256) data;

78:     mapping(address => BondingCheckpointsByRound) private bondingCheckpoints;
```

- *GovernorCountingOverridable.sol* ( [#L52](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L52), [#L56](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L56) ):

```solidity
52:         mapping(address => ProposalVoterState) voters;

56:     mapping(uint256 => ProposalTally) private _proposalTallies;
```

### <a name="N-54"></a>[N-54] Use `type(X).max` instead of constant formulas like `2**n`

Earlier versions of solidity can use `uint<n>(-1)` instead. Expressions `2**n -1` can often be rewritten to accommodate the change (e.g. by using a `>` instead of a `>=`, which will also saves gas).

There is 1 instance:

- *BondingManager.sol* ( [#L32](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L32) ):

```solidity
32:     uint256 constant MAX_FUTURE_ROUND = 2**256 - 1;
```

### <a name="N-55"></a>[N-55] Events that mark critical parameter changes should contain both the old and the new value

This should especially be done if the new value is not required to be different from the old value.

There are 11 instances:

- *BondingManager.sol* ( [#L158](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L158), [#L179](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L179), [#L189](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L189), [#L468](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L468), [#L517](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L517), [#L1181](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1181), [#L1420](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1420), [#L1431](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1431), [#L1541-L1548](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1541-L1548) ):

```solidity
158:         emit ParameterUpdate("unbondingPeriod");

179:         emit ParameterUpdate("treasuryBalanceCeiling");

189:         emit ParameterUpdate("numActiveTranscoders");

468:             emit ParameterUpdate("treasuryRewardCutRate");

517:         emit TranscoderUpdate(msg.sender, _rewardCut, _feeShare);

1181:         emit ParameterUpdate("nextRoundTreasuryRewardCutRate");

1420:             emit TranscoderDeactivated(lastTranscoder, _activationRound);

1431:         emit TranscoderActivated(_transcoder, _activationRound);

1541:         emit EarningsClaimed(
1542:             del.delegateAddress,
1543:             _delegator,
1544:             currentBondedAmount.sub(del.bondedAmount),
1545:             currentFees.sub(del.fees),
1546:             startRound,
1547:             _endRound
1548:         );
```

- *BondingVotes.sol* ( [#L404](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L404), [#L410](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L410) ):

```solidity
404:             emit DelegateVotesChanged(_account, previousDelegateVotes, currentDelegateVotes);

410:             emit DelegatorBondedAmountChanged(_account, previous.bondedAmount, current.bondedAmount);
```

### <a name="N-56"></a>[N-56] Events are emitted without the sender information

When an action is triggered based on a user's action, not being able to filter based on who triggered the action makes event processing a lot more cumbersome. Including the `msg.sender` the events of these types of action will make events much more useful to end users, especially when `msg.sender` is not `tx.origin`.

There are 17 instances:

- *BondingManager.sol* ( [#L158](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L158), [#L179](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L179), [#L189](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L189), [#L431](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L431), [#L436](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L436), [#L439](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L439), [#L468](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L468), [#L619](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L619), [#L1181](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1181), [#L1420](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1420), [#L1431](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1431), [#L1446](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1446), [#L1541-L1548](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1541-L1548), [#L1584](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1584) ):

```solidity
158:         emit ParameterUpdate("unbondingPeriod");

179:         emit ParameterUpdate("treasuryBalanceCeiling");

189:         emit ParameterUpdate("numActiveTranscoders");

431:                 emit TranscoderSlashed(_transcoder, _finder, penalty, finderAmount);

436:                 emit TranscoderSlashed(_transcoder, address(0), penalty, 0);

439:             emit TranscoderSlashed(_transcoder, _finder, 0, 0);

468:             emit ParameterUpdate("treasuryRewardCutRate");

619:         emit Bond(_to, currentDelegate, _owner, _amount, del.bondedAmount);

1181:         emit ParameterUpdate("nextRoundTreasuryRewardCutRate");

1420:             emit TranscoderDeactivated(lastTranscoder, _activationRound);

1431:         emit TranscoderActivated(_transcoder, _activationRound);

1446:         emit TranscoderDeactivated(_transcoder, deactivationRound);

1541:         emit EarningsClaimed(
1542:             del.delegateAddress,
1543:             _delegator,
1544:             currentBondedAmount.sub(del.bondedAmount),
1545:             currentFees.sub(del.fees),
1546:             startRound,
1547:             _endRound
1548:         );

1584:         emit Rebond(del.delegateAddress, _delegator, _unbondingLockId, amount);
```

- *BondingVotes.sol* ( [#L395](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L395), [#L404](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L404), [#L410](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L410) ):

```solidity
395:             emit DelegateChanged(_account, previousDelegate, newDelegate);

404:             emit DelegateVotesChanged(_account, previousDelegateVotes, currentDelegateVotes);

410:             emit DelegatorBondedAmountChanged(_account, previous.bondedAmount, current.bondedAmount);
```

### <a name="N-57"></a>[N-57] Functions with array parameters should have length checks in place

There are 8 instances:

- *LivepeerGovernor.sol* ( [#L132-L136](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L132-L136), [#L142-L145](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L142-L145) ):

```solidity
/// @audit targets
/// @audit values
/// @audit calldatas
132:     function _execute(
133:         uint256 proposalId,
134:         address[] memory targets,
135:         uint256[] memory values,
136:         bytes[] memory calldatas,

/// @audit targets
/// @audit values
/// @audit calldatas
142:     function _cancel(
143:         address[] memory targets,
144:         uint256[] memory values,
145:         bytes[] memory calldatas,
```

- *Treasury.sol* ( [#L16-L19](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16-L19) ):

```solidity
/// @audit proposers
/// @audit executors
16:     function initialize(
17:         uint256 minDelay,
18:         address[] memory proposers,
19:         address[] memory executors,
```

### <a name="N-58"></a>[N-58] State variables should include comments

Consider adding some comments on critical state variables to explain what they are supposed to do: this will help for future code reviews.

There is 1 instance:

- *BondingManager.sol* ( [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L85) ):

```solidity
85:     mapping(address => Transcoder) private transcoders;
```

### <a name="N-59"></a>[N-59] File is missing NatSpec

It is recommended that Solidity contracts are fully annotated using NatSpec

There is 1 instance:

- [*IVotes.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol)

### <a name="N-60"></a>[N-60] Modifier declarations should have NatSpec descriptions

There are 6 instances:

- *BondingManager.sol* ( [#L106](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L106), [#L112](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L112), [#L118](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L118), [#L124](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L124), [#L130](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L130), [#L135](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L135) ):

```solidity
106:     modifier onlyTicketBroker() {

112:     modifier onlyRoundsManager() {

118:     modifier onlyVerifier() {

124:     modifier currentRoundInitialized() {

130:     modifier autoClaimEarnings(address _delegator) {

135:     modifier autoCheckpoint(address _account) {
```

### <a name="N-61"></a>[N-61] Use the latest solidity version for deployment

Upgrading to a newer Solidity release can optimize gas usage, take advantage of new features and improve overall contract efficiency. Where possible, based on compatibility requirements, it is recommended to use newer/latest solidity version to take advantage of the latest optimizations and features.

There are 10 instances:

- *BondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *BondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L2) ):

```solidity
2: pragma solidity ^0.8.9;
```

- *EarningsPoolLIP36.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *SortedArrays.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *GovernorCountingOverridable.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *LivepeerGovernor.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *Treasury.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

### <a name="N-62"></a>[N-62] Consider adding a block/deny-list

Doing so will significantly increase centralization, but will help to prevent hackers from using stolen tokens

There are 5 instances:

- *BondingManager.sol* ( [#L23](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L23) ):

```solidity
23: contract BondingManager is ManagerProxyTarget, IBondingManager {
```

- *BondingVotes.sol* ( [#L20](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L20) ):

```solidity
20: contract BondingVotes is ManagerProxyTarget, IBondingVotes {
```

- *GovernorCountingOverridable.sol* ( [#L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L21) ):

```solidity
21: abstract contract GovernorCountingOverridable is Initializable, GovernorUpgradeable {
```

- *LivepeerGovernor.sol* ( [#L26-L35](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L26-L35) ):

```solidity
26: contract LivepeerGovernor is
27:     ManagerProxyTarget,
28:     Initializable,
29:     GovernorUpgradeable,
30:     GovernorSettingsUpgradeable,
31:     GovernorTimelockControlUpgradeable,
32:     GovernorVotesUpgradeable,
33:     GovernorVotesQuorumFractionUpgradeable,
34:     GovernorCountingOverridable
35: {
```

- *Treasury.sol* ( [#L15](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L15) ):

```solidity
15: contract Treasury is Initializable, TimelockControllerUpgradeable {
```

### <a name="N-63"></a>[N-63] Enable IR-based code generation

The IR-based code generator was introduced with an aim to not only allow code generation to be more transparent and auditable but also to enable more powerful optimization passes that span across functions.
You can enable it on the command line using `--via-ir` or with the option `{"viaIR": true}`.
This will take longer to compile, but you can just simple test it before deploying and if you got a better benchmark then you can add --via-ir to your deploy command
More on: https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html

There is 1 instance:

- Global finding

### <a name="N-64"></a>[N-64] Contracts should have full test coverage

While 100% code coverage does not guarantee that there are no bugs, it often will catch easy-to-find bugs, and will ensure that there are fewer regressions when the code invariably has to be modified. Furthermore, in order to get full coverage, code authors will often have to re-organize their code so that it is more modular, so that each component can be tested separately, which reduces interdependencies between modules and layers, and makes for code that is easier to reason about and audit.

There is 1 instance:

- Global finding

### <a name="N-65"></a>[N-65] Large or complicated code bases should implement invariant tests

This includes: large code bases, or code with lots of inline-assembly, complicated math, or complicated interactions between multiple contracts.
Invariant fuzzers such as Echidna require the test writer to come up with invariants which should not be violated under any circumstances, and the fuzzer tests various inputs and function calls to ensure that the invariants always hold.
Even code with 100% code coverage can still have bugs due to the order of the operations a user performs, and invariant fuzzers may help significantly.

There is 1 instance:

- Global finding

### <a name="N-66"></a>[N-66] Top-level declarations should be separated by at least two lines

<details>
<summary>There are 25 instances (click to show):</summary>

- *BondingManager.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L2-L4), [#L133-L135](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L133-L135), [#L1641-L1643](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1641-L1643), [#L1645-L1647](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1645-L1647), [#L1649-L1651](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1649-L1651), [#L1653-L1655](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1653-L1655), [#L1657-L1659](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1657-L1659), [#L1661-L1663](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1661-L1663), [#L1665-L1667](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1665-L1667) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "../ManagerProxyTarget.sol";

133:     }
134: 
135:     modifier autoCheckpoint(address _account) {

1641:     }
1642: 
1643:     function treasury() internal view returns (address) {

1645:     }
1646: 
1647:     function bondingVotes() internal view returns (IBondingVotes) {

1649:     }
1650: 
1651:     function _onlyTicketBroker() internal view {

1653:     }
1654: 
1655:     function _onlyRoundsManager() internal view {

1657:     }
1658: 
1659:     function _onlyVerifier() internal view {

1661:     }
1662: 
1663:     function _currentRoundInitialized() internal view {

1665:     }
1666: 
1667:     function _autoClaimEarnings(address _delegator) internal {
```

- *BondingVotes.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L2-L4) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "@openzeppelin/contracts/utils/Arrays.sol";
```

- *IBondingVotes.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L2-L4) ):

```solidity
2: pragma solidity ^0.8.9;
3: 
4: import "../treasury/IVotes.sol";
```

- *EarningsPoolLIP36.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L2-L4), [#L7-L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L7-L9) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "./EarningsPool.sol";

7: import "@openzeppelin/contracts/utils/math/SafeMath.sol";
8: 
9: library EarningsPoolLIP36 {
```

- *SortedArrays.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L2-L4) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "../../libraries/MathUtils.sol";
```

- *GovernorCountingOverridable.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L2-L4), [#L66-L68](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L66-L68) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

66:     }
67: 
68:     function __GovernorCountingOverridable_init_unchained(uint256 _quota) internal onlyInitializing {
```

- *IVotes.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L2-L4), [#L4-L6](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L4-L6) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol";

4: import "@openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol";
5: 
6: interface IVotes is IERC5805Upgradeable {
```

- *LivepeerGovernor.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L2-L4), [#L121-L123](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L121-L123), [#L130-L132](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L130-L132), [#L140-L142](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L140-L142), [#L149-L151](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L149-L151), [#L158-L160](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L158-L160) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

121:     }
122: 
123:     function state(uint256 proposalId)

130:     }
131: 
132:     function _execute(

140:     }
141: 
142:     function _cancel(

149:     }
150: 
151:     function _executor()

158:     }
159: 
160:     function supportsInterface(bytes4 interfaceId)
```

- *Treasury.sol* ( [#L2-L4](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L2-L4) ):

```solidity
2: pragma solidity 0.8.9;
3: 
4: import "@openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol";
```

</details>

### <a name="N-67"></a>[N-67] Consider adding formal verification proofs

Formal verification is the act of proving or disproving the correctness of intended algorithms underlying a system with respect to a certain formal specification/property/invariant, using formal methods of mathematics.

Some tools that are currently available to perform these tests on smart contracts are [SMTChecker](https://docs.soliditylang.org/en/latest/smtchecker.html) and [Certora Prover](https://www.certora.com/).

There are 10 instances:

- [*BondingManager.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol)

- [*BondingVotes.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol)

- [*IBondingManager.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol)

- [*IBondingVotes.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol)

- [*EarningsPoolLIP36.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol)

- [*SortedArrays.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol)

- [*GovernorCountingOverridable.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol)

- [*IVotes.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol)

- [*LivepeerGovernor.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol)

- [*Treasury.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol)

## Gas Optimizations

### <a name="G-1"></a>[G-1] Don't use `SafeMath` once the solidity version is 0.8.0 or greater

Solidity 0.8.0 introduces internal overflow checks, so using `SafeMath` is redundant and adds overhead.

There are 2 instances:

- *BondingManager.sol* ( [#L17](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L17) ):

```solidity
17: import "@openzeppelin/contracts/utils/math/SafeMath.sol";
```

- *EarningsPoolLIP36.sol* ( [#L7](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L7) ):

```solidity
7: import "@openzeppelin/contracts/utils/math/SafeMath.sol";
```

### <a name="G-2"></a>[G-2] Constructors can be marked as payable to save deployment gas

Payable functions cost less gas to execute, because the compiler does not have to add extra checks to ensure that no payment is provided. A constructor can be safely marked as payable, because only the deployer would be able to pass funds, and the project itself would not pass any funds.

There are 3 instances:

- *BondingManager.sol* ( [#L149](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L149) ):

```solidity
149:     constructor(address _controller) Manager(_controller) {}
```

- *BondingVotes.sol* ( [#L107](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L107) ):

```solidity
107:     constructor(address _controller) Manager(_controller) {}
```

- *LivepeerGovernor.sol* ( [#L43](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L43) ):

```solidity
43:     constructor(address _controller) Manager(_controller) {
```

### <a name="G-3"></a>[G-3] Unused named return variables without optimizer waste gas

Consider changing the variable to be an unnamed one, since the variable is never assigned, nor is it returned by name. If the optimizer is not turned on, leaving the code as it is will also waste gas for the stack variable.

There are 7 instances:

- *BondingManager.sol* ( [#L1089-L1092](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1089-L1092), [#L1238-L1244](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1238-L1244) ):

```solidity
/// @audit amount
/// @audit withdrawRound
1089:     function getDelegatorUnbondingLock(address _delegator, uint256 _unbondingLockId)
1090:         public
1091:         view
1092:         returns (uint256 amount, uint256 withdrawRound)

/// @audit cStake
/// @audit cFees
1238:     function delegatorCumulativeStakeAndFees(
1239:         Transcoder storage _transcoder,
1240:         uint256 _startRound,
1241:         uint256 _endRound,
1242:         uint256 _stake,
1243:         uint256 _fees
1244:     ) internal view returns (uint256 cStake, uint256 cFees) {
```

- *GovernorCountingOverridable.sol* ( [#L90-L98](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L90-L98) ):

```solidity
/// @audit againstVotes
/// @audit forVotes
/// @audit abstainVotes
90:     function proposalVotes(uint256 _proposalId)
91:         public
92:         view
93:         virtual
94:         returns (
95:             uint256 againstVotes,
96:             uint256 forVotes,
97:             uint256 abstainVotes
98:         )
```

### <a name="G-4"></a>[G-4] Use custom errors rather than `revert()`/`require()` strings to save gas

Custom errors are available from solidity version 0.8.4. Custom errors save [**~50 gas**](https://gist.github.com/IllIllI000/ad1bd0d29a0101b25e57c293b4b0c746) each time they're hit by [avoiding having to allocate and store the revert string](https://blog.soliditylang.org/2021/04/21/custom-errors/#errors-in-depth). Not defining the strings also save deployment gas.

<details>
<summary>There are 28 instances (click to show):</summary>

- *BondingManager.sol* ( [#L253](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L253), [#L254-L257](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L254-L257), [#L279](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L279), [#L281](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L281), [#L310](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L310), [#L491](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L491), [#L492](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L492), [#L493](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L493), [#L494](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L494), [#L499-L502](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L499-L502), [#L563](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L563), [#L565](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L565), [#L582](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L582), [#L606](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L606), [#L722](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L722), [#L750](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L750), [#L754](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L754), [#L755](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L755), [#L801](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L801), [#L824](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L824), [#L850](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L850), [#L851-L854](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L851-L854), [#L1177](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1177), [#L1573](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1573), [#L1652](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1652), [#L1656](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1656), [#L1660](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1660), [#L1664](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1664) ):

```solidity
253:         require(isValidUnbondingLock(msg.sender, _unbondingLockId), "invalid unbonding lock ID");

254:         require(
255:             lock.withdrawRound <= roundsManager().currentRound(),
256:             "withdraw round must be before or equal to the current round"
257:         );

279:         require(_recipient != address(0), "invalid recipient");

281:         require(fees >= _amount, "insufficient fees to withdraw");

310:         require(isRegisteredTranscoder(_transcoder), "transcoder must be registered");

491:         require(!roundsManager().currentRoundLocked(), "can't update transcoder params, current round is locked");

492:         require(MathUtils.validPerc(_rewardCut), "invalid rewardCut percentage");

493:         require(MathUtils.validPerc(_feeShare), "invalid feeShare percentage");

494:         require(isRegisteredTranscoder(msg.sender), "transcoder must be registered");

499:         require(
500:             !isActiveTranscoder(msg.sender) || t.lastRewardRound == currentRound,
501:             "caller can't be active or must have already called reward for the current round"
502:         );

563:                 require(_to != _owner, "INVALID_DELEGATE");

565:                 require(currentDelegate == _to, "INVALID_DELEGATE_CHANGE");

582:             require(!isRegisteredTranscoder(_owner), "registered transcoders can't delegate towards other addresses");

606:         require(delegationAmount > 0, "delegation amount must be greater than 0");

722:             require(oldDelDelegate != _delegator, "INVALID_DELEGATOR");

750:         require(delegatorStatus(msg.sender) == DelegatorStatus.Bonded, "caller must be bonded");

754:         require(_amount > 0, "unbond amount must be greater than 0");

755:         require(_amount <= del.bondedAmount, "amount is greater than bonded amount");

801:         require(delegatorStatus(msg.sender) != DelegatorStatus.Unbonded, "caller must be bonded");

824:         require(delegatorStatus(msg.sender) == DelegatorStatus.Unbonded, "caller must be unbonded");

850:         require(isActiveTranscoder(msg.sender), "caller must be an active transcoder");

851:         require(
852:             transcoders[msg.sender].lastRewardRound != currentRound,
853:             "caller has already called reward for the current round"
854:         );

1177:         require(PreciseMathUtils.validPerc(_cutRate), "_cutRate is invalid precise percentage");

1573:         require(isValidUnbondingLock(_delegator, _unbondingLockId), "invalid unbonding lock ID");

1652:         require(msg.sender == controller.getContract(keccak256("TicketBroker")), "caller must be TicketBroker");

1656:         require(msg.sender == controller.getContract(keccak256("RoundsManager")), "caller must be RoundsManager");

1660:         require(msg.sender == controller.getContract(keccak256("Verifier")), "caller must be Verifier");

1664:         require(roundsManager().currentRoundInitialized(), "current round is not initialized");
```

</details>

### <a name="G-5"></a>[G-5] Operator `+=` costs more gas than `<x> = <x> + <y>` for state variables

Using the `+=` like operator instead of plus-equals saves **[113 gas](https://gist.github.com/IllIllI000/cbbfb267425b898e5be734d4008d4fe8)**.

There are 7 instances:

- *GovernorCountingOverridable.sol* ( [#L154](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L154), [#L156](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L156), [#L158](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L158), [#L193](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L193), [#L202](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L202), [#L204](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L204), [#L207](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L207) ):

```solidity
154:             tally.againstVotes += _weight;

156:             tally.forVotes += _weight;

158:             tally.abstainVotes += _weight;

193:         delegateVoter.deductions += _weight;

202:                 _tally.againstVotes -= _weight;

204:                 _tally.forVotes -= _weight;

207:                 _tally.abstainVotes -= _weight;
```

### <a name="G-6"></a>[G-6] Avoid updating storage when the value hasn't changed

Manipulating storage in solidity is gas-intensive. It can be optimized by avoiding unnecessary storage updates when the new value equals the existing value.
If the old value is equal to the new value, not re-storing the value will avoid a Gsreset (**2900 gas**), potentially at the expense of a Gcoldsload (**2100 gas**) or a Gwarmaccess (**100 gas**).

There are 4 instances:

- *BondingManager.sol* ( [#L156](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L156), [#L177](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L177), [#L463](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L463), [#L1179](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1179) ):

```solidity
156:         unbondingPeriod = _unbondingPeriod;

177:         treasuryBalanceCeiling = _ceiling;

463:         currentRoundTotalActiveStake = nextRoundTotalActiveStake;

1179:         nextRoundTreasuryRewardCutRate = _cutRate;
```

### <a name="G-7"></a>[G-7] Multiple accesses of the same mapping/array key/index should be cached

The instances below point to the second+ access of a value inside a mapping/array, within a function. Caching a mapping's value in a local `storage` or `calldata` variable when the value is accessed [multiple times](https://gist.github.com/IllIllI000/ec23a57daa30a8f8ca8b9681c8ccefb0), saves **~42 gas per access** due to not having to recalculate the key's keccak256 hash (Gkeccak256 - **30 gas**) and that calculation's associated stack operations. Caching an array's struct avoids recalculating the array offsets into memory/calldata

There are 5 instances:

- *BondingManager.sol* ( [#L280](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L280), [#L400](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L400), [#L415](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L415), [#L827](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L827), [#L852](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L852) ):

```solidity
/// @audit `delegators[msg.sender]` is also accessed on line 282
280:         uint256 fees = delegators[msg.sender].fees;

/// @audit `delegators[_transcoder]` is also accessed on line 403
400:         Delegator storage del = delegators[_transcoder];

/// @audit `delegators[del.delegateAddress]` is also accessed on line 415
415:                 delegators[del.delegateAddress].delegatedAmount = delegators[del.delegateAddress].delegatedAmount.sub(

/// @audit `delegators[msg.sender]` is also accessed on line 829
827:         delegators[msg.sender].startRound = roundsManager().currentRound().add(1);

/// @audit `transcoders[msg.sender]` is also accessed on line 856
852:             transcoders[msg.sender].lastRewardRound != currentRound,
```

### <a name="G-8"></a>[G-8] State variables that are used multiple times in a function should be cached in stack variables

When performing multiple operations on a state variable in a function, it is recommended to cache it first. Either multiple reads or multiple writes to a state variable can save gas by caching it on the stack.
Caching of a state variable replaces each Gwarmaccess (100 gas) with a much cheaper stack read. Other less obvious fixes/optimizations include having local memory caches of state variable structs, or having local caches of state variable contracts/addresses.
*Saves 100 gas per instance*.

There are 6 instances:

- *BondingManager.sol* ( [#L462](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L462), [#L842](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L842) ):

```solidity
/// @audit nextRoundTreasuryRewardCutRate: 2 reads
462:     function setCurrentRoundTotalActiveStake() external onlyRoundsManager {

/// @audit treasuryBalanceCeiling: 2 reads
842:     function rewardWithHint(address _newPosPrev, address _newPosNext)
```

- *BondingVotes.sol* ( [#L325](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L325) ):

```solidity
/// @audit totalStakeCheckpoints.data: 2 reads
325:     function getTotalActiveStakeAt(uint256 _round) public view virtual returns (uint256) {
```

### <a name="G-9"></a>[G-9] `internal` functions only called once can be inlined to save gas

If an `internal` function is only used once, there is no need to modularize it, unless the function calling it would otherwise be too long and complex. Not inlining costs 20 to 40 gas because of two extra JUMP instructions and additional stack operations needed for function calls.

<details>
<summary>There are 16 instances (click to show):</summary>

- *BondingManager.sol* ( [#L1459-L1465](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1459-L1465), [#L1631](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1631), [#L1651](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1651), [#L1655](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1655), [#L1659](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1659), [#L1663](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1663) ):

```solidity
1459:     function updateTranscoderWithRewards(
1460:         address _transcoder,
1461:         uint256 _rewards,
1462:         uint256 _round,
1463:         address _newPosPrev,
1464:         address _newPosNext
1465:     ) internal {

1631:     function l2Migrator() internal view returns (address) {

1651:     function _onlyTicketBroker() internal view {

1655:     function _onlyRoundsManager() internal view {

1659:     function _onlyVerifier() internal view {

1663:     function _currentRoundInitialized() internal view {
```

- *BondingVotes.sol* ( [#L387-L391](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L387-L391), [#L459-L462](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L459-L462), [#L499-L502](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L499-L502), [#L546](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L546), [#L553](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L553) ):

```solidity
387:     function onBondingCheckpointChanged(
388:         address _account,
389:         BondingCheckpoint memory previous,
390:         BondingCheckpoint memory current
391:     ) internal {

459:     function delegatorCumulativeStakeAt(BondingCheckpoint storage bond, uint256 _round)
460:         internal
461:         view
462:         returns (uint256)

499:     function getLastTranscoderRewardsEarningsPool(address _transcoder, uint256 _round)
500:         internal
501:         view
502:         returns (uint256 rewardRound, EarningsPool.Data memory pool)

546:     function roundsManager() internal view returns (IRoundsManager) {

553:     function _onlyBondingManager() internal view {
```

- *GovernorCountingOverridable.sol* ( [#L64](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L64), [#L68](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L68), [#L174-L180](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L174-L180) ):

```solidity
64:     function __GovernorCountingOverridable_init(uint256 _quota) internal onlyInitializing {

68:     function __GovernorCountingOverridable_init_unchained(uint256 _quota) internal onlyInitializing {

174:     function _handleVoteOverrides(
175:         uint256 _proposalId,
176:         ProposalTally storage _tally,
177:         ProposalVoterState storage _voter,
178:         address _account,
179:         uint256 _weight
180:     ) internal returns (uint256) {
```

- *LivepeerGovernor.sol* ( [#L101](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L101), [#L108](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L108) ):

```solidity
101:     function bondingVotes() internal view returns (IVotes) {

108:     function treasury() internal view returns (Treasury) {
```

</details>

### <a name="G-10"></a>[G-10] Functions that revert when called by normal users can be marked `payable`

If a function modifier such as `onlyOwner` is used, the function will revert if a normal user tries to pay the function. Marking the function as `payable` will lower the gas cost for legitimate callers because the compiler will not include checks for whether a payment was provided.
The extra opcodes avoided are: 
`CALLVALUE(2), DUP1(3), ISZERO(3), PUSH2(3), JUMPI(10), PUSH1(3), DUP1(3), REVERT(0), JUMPDEST(1), POP(2)` 
which cost an average of about 21 gas per call to the function, in addition to the extra deployment cost.

There are 9 instances:

- *BondingManager.sol* ( [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L155), [#L167](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L167), [#L176](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L176), [#L186](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L186), [#L302-L306](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L302-L306), [#L394-L399](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L394-L399), [#L462](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L462) ):

```solidity
155:     function setUnbondingPeriod(uint64 _unbondingPeriod) external onlyControllerOwner {

167:     function setTreasuryRewardCutRate(uint256 _cutRate) external onlyControllerOwner {

176:     function setTreasuryBalanceCeiling(uint256 _ceiling) external onlyControllerOwner {

186:     function setNumActiveTranscoders(uint256 _numActiveTranscoders) external onlyControllerOwner {

302:     function updateTranscoderWithFees(
303:         address _transcoder,
304:         uint256 _fees,
305:         uint256 _round
306:     ) external whenSystemNotPaused onlyTicketBroker {

394:     function slashTranscoder(
395:         address _transcoder,
396:         address _finder,
397:         uint256 _slashAmount,
398:         uint256 _finderFee
399:     ) external whenSystemNotPaused onlyVerifier autoClaimEarnings(_transcoder) autoCheckpoint(_transcoder) {

462:     function setCurrentRoundTotalActiveStake() external onlyRoundsManager {
```

- *BondingVotes.sol* ( [#L258-L266](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L258-L266), [#L303](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L303) ):

```solidity
258:     function checkpointBondingState(
259:         address _account,
260:         uint256 _startRound,
261:         uint256 _bondedAmount,
262:         address _delegateAddress,
263:         uint256 _delegatedAmount,
264:         uint256 _lastClaimRound,
265:         uint256 _lastRewardRound
266:     ) external virtual onlyBondingManager {

303:     function checkpointTotalActiveStake(uint256 _totalStake, uint256 _round) external virtual onlyBondingManager {
```

### <a name="G-11"></a>[G-11] Operator `>=`/`<=` costs less gas than operator `>`/`<`

The compiler uses opcodes `GT` and `ISZERO` for code that uses `>`, but only requires `LT` for `>=`. A similar behavior applies for `>`, which uses opcodes `LT` and `ISZERO`, but only requires `GT` for `<=`. It can [save **3 gas**](https://gist.github.com/IllIllI000/3dc79d25acccfa16dee4e83ffdc6ffde) for each.
It should be converted to the `<=`/`>=` equivalent when comparing against integer literals.

There are 14 instances:

- *BondingManager.sol* ( [#L402](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L402), [#L576](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L576), [#L606](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L606), [#L614](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L614), [#L754](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L754), [#L871](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L871), [#L873](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L873), [#L884](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L884), [#L1158](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1158), [#L1169](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1169) ):

```solidity
402:         if (del.bondedAmount > 0) {

576:         } else if (currentBondedAmount > 0 && currentDelegate != _to) {

606:         require(delegationAmount > 0, "delegation amount must be greater than 0");

614:         if (_amount > 0) {

754:         require(_amount > 0, "unbond amount must be greater than 0");

871:         if (treasuryBalanceCeiling > 0) {

873:             if (treasuryBalance >= treasuryBalanceCeiling && nextRoundTreasuryRewardCutRate > 0) {

884:         if (treasuryRewards > 0) {

1158:         return d.delegateAddress == _transcoder && d.bondedAmount > 0;

1169:         return delegators[_delegator].unbondingLocks[_unbondingLockId].withdrawRound > 0;
```

- *BondingVotes.sol* ( [#L316](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L316), [#L331](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L331), [#L436](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L436), [#L507](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L507) ):

```solidity
316:         return bondingCheckpoints[_account].startRounds.length > 0;

331:         if (exactCheckpoint > 0) {

436:         if (bond.bondedAmount > 0) {

507:         if (rewardRound > 0) {
```

### <a name="G-12"></a>[G-12] Redundant state variable getters

Getters for public state variables are automatically generated so there is no need to code them manually and waste gas.

There is 1 instance:

- *BondingManager.sol* ( [#L1136-L1138](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1136-L1138) ):

```solidity
1136:     function getTotalBonded() public view returns (uint256) {
1137:         return currentRoundTotalActiveStake;
1138:     }
```

### <a name="G-13"></a>[G-13] Use a more recent version of solidity

- Use a solidity version of at least 0.8.2 to get simple compiler automatic inlining.
- Use a solidity version of at least 0.8.3 to get better struct packing and cheaper multiple storage reads.
- Use a solidity version of at least 0.8.4 to get custom errors, which are cheaper at deployment than revert()/require() strings.
- Use a solidity version of at least 0.8.10 to have external calls skip contract existence checks if the external call has a return value.

There are 10 instances:

- *BondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *BondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L2) ):

```solidity
2: pragma solidity ^0.8.9;
```

- *EarningsPoolLIP36.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *SortedArrays.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *GovernorCountingOverridable.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *LivepeerGovernor.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *Treasury.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

### <a name="G-14"></a>[G-14] Reduce gas usage by moving to Solidity 0.8.19 or later

Solidity version 0.8.19 introduced a number of gas optimizations, refer to the [Solidity 0.8.19 Release Announcement](https://soliditylang.org/blog/2023/02/22/solidity-0.8.19-release-announcement) for details.

There are 10 instances:

- *BondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *BondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L2) ):

```solidity
2: pragma solidity ^0.8.9;
```

- *EarningsPoolLIP36.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *SortedArrays.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *GovernorCountingOverridable.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *LivepeerGovernor.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *Treasury.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

### <a name="G-15"></a>[G-15] Using a double `if` statement instead of a logical AND(`&&`)

Using a double `if` statement instead of a logical AND (`&&`) can provide similar short-circuiting behavior whereas double if is slightly [more gas efficient](https://gist.github.com/DadeKuma/931ce6794a050201ec6544dbcc31316c).

There are 7 instances:

- *BondingManager.sol* ( [#L343](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L343), [#L559](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L559), [#L576](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L576), [#L719](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L719), [#L873](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L873), [#L1215](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1215), [#L1221](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1221) ):

```solidity
343:         if (prevEarningsPool.cumulativeRewardFactor == 0 && lastRewardRound == currentRound) {

559:         if (msg.sender != _owner && msg.sender != l2Migrator()) {

576:         } else if (currentBondedAmount > 0 && currentDelegate != _to) {

719:         if (newDel.delegateAddress == address(0) && newDel.bondedAmount == 0) {

873:             if (treasuryBalance >= treasuryBalanceCeiling && nextRoundTreasuryRewardCutRate > 0) {

1215:         if (pool.cumulativeRewardFactor == 0 && lastRewardRound < _round) {

1221:         if (pool.cumulativeFeeFactor == 0 && lastFeeRound < _round) {
```

### <a name="G-16"></a>[G-16] `require()`/`revert()` strings longer than 32 bytes cost extra gas

Each extra memory word of bytes past the original 32 [incurs an MSTORE](https://gist.github.com/hrkrshnn/ee8fabd532058307229d65dcd5836ddc#consider-having-short-revert-strings) which costs **3 gas**

There are 10 instances:

- *BondingManager.sol* ( [#L254-L257](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L254-L257), [#L491](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L491), [#L499-L502](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L499-L502), [#L582](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L582), [#L606](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L606), [#L754](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L754), [#L755](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L755), [#L850](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L850), [#L851-L854](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L851-L854), [#L1177](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1177) ):

```solidity
254:         require(
255:             lock.withdrawRound <= roundsManager().currentRound(),
256:             "withdraw round must be before or equal to the current round"
257:         );

491:         require(!roundsManager().currentRoundLocked(), "can't update transcoder params, current round is locked");

499:         require(
500:             !isActiveTranscoder(msg.sender) || t.lastRewardRound == currentRound,
501:             "caller can't be active or must have already called reward for the current round"
502:         );

582:             require(!isRegisteredTranscoder(_owner), "registered transcoders can't delegate towards other addresses");

606:         require(delegationAmount > 0, "delegation amount must be greater than 0");

754:         require(_amount > 0, "unbond amount must be greater than 0");

755:         require(_amount <= del.bondedAmount, "amount is greater than bonded amount");

850:         require(isActiveTranscoder(msg.sender), "caller must be an active transcoder");

851:         require(
852:             transcoders[msg.sender].lastRewardRound != currentRound,
853:             "caller has already called reward for the current round"
854:         );

1177:         require(PreciseMathUtils.validPerc(_cutRate), "_cutRate is invalid precise percentage");
```

### <a name="G-17"></a>[G-17] Remove or replace unused state variables

Saves a storage slot. If the variable is assigned a non-zero value, saves Gsset (**20000 gas**). If it's assigned a zero value, saves Gsreset (**2900 gas**). If the variable remains unassigned, there is no gas savings unless the variable is `public`, in which case the compiler-generated non-payable getter deployment cost is saved. If the state variable is overriding an interface's public function, mark the variable as `constant` or `immutable` so that it does not use a storage slot.

There is 1 instance:

- *GovernorCountingOverridable.sol* ( [#L224](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L224) ):

```solidity
224:     uint256[48] private __gap;
```

### <a name="G-18"></a>[G-18] Using assembly to check for zero can save gas

Using assembly to check for zero can save gas by allowing more direct access to the evm and reducing some of the overhead associated with high-level operations in solidity.

There are 21 instances:

- *BondingManager.sol* ( [#L279](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L279), [#L424](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L424), [#L595](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L595), [#L599](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L599), [#L769](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L769), [#L959](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L959), [#L1512](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1512), [#L1520](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1520), [#L1527](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1527) ):

```solidity
279:         require(_recipient != address(0), "invalid recipient");

424:             if (_finder != address(0)) {

595:             if (currPool.cumulativeRewardFactor == 0) {

599:             if (currPool.cumulativeFeeFactor == 0) {

769:         if (del.bondedAmount == 0) {

959:         if (del.bondedAmount == 0) {

1512:         if (del.delegateAddress != address(0)) {

1520:             if (endEarningsPool.cumulativeRewardFactor == 0) {

1527:             if (endEarningsPool.cumulativeFeeFactor == 0) {
```

- *BondingVotes.sol* ( [#L98](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L98), [#L337](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L337), [#L372](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L372), [#L510](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L510) ):

```solidity
98:             revert FutureLookup(_round, currentRound == 0 ? 0 : currentRound - 1);

337:         if (upper == 0) {

372:         if (bond.bondedAmount == 0) {

510:             if (pool.cumulativeRewardFactor == 0) {
```

- *EarningsPoolLIP36.sol* ( [#L24](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L24), [#L29](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L29), [#L52](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L52), [#L78](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L78), [#L83](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L83) ):

```solidity
24:         uint256 prevCumulativeRewardFactor = _prevEarningsPool.cumulativeRewardFactor != 0

29:         if (earningsPool.cumulativeFeeFactor == 0) {

52:         uint256 prevCumulativeRewardFactor = _prevEarningsPool.cumulativeRewardFactor != 0

78:         if (_startPool.cumulativeRewardFactor == 0) {

83:         if (_endPool.cumulativeRewardFactor == 0) {
```

- *SortedArrays.sol* ( [#L30](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L30), [#L49](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L49), [#L65](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L65) ):

```solidity
30:         if (len == 0) {

49:         if (upperIdx == 0) {

65:         if (array.length == 0) {
```

### <a name="G-19"></a>[G-19] Use assembly to emit events

To efficiently emit events, it's possible to utilize assembly by making use of scratch space and the free memory pointer. This approach has the advantage of potentially avoiding the costs associated with memory expansion.

However, it's important to note that in order to safely optimize this process, it is preferable to cache and restore the free memory pointer.

A good example of such practice can be seen in [Solady's](https://github.com/Vectorized/solady/blob/main/src/tokens/ERC1155.sol#L167) codebase.

There are 17 instances:

- *BondingManager.sol* ( [#L158](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L158), [#L179](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L179), [#L189](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L189), [#L287](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L287), [#L468](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L468), [#L517](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L517), [#L619](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L619), [#L889](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L889), [#L899](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L899), [#L1181](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1181), [#L1420](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1420), [#L1431](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1431), [#L1446](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1446), [#L1584](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1584) ):

```solidity
158:         emit ParameterUpdate("unbondingPeriod");

179:         emit ParameterUpdate("treasuryBalanceCeiling");

189:         emit ParameterUpdate("numActiveTranscoders");

287:         emit WithdrawFees(msg.sender, _recipient, _amount);

468:             emit ParameterUpdate("treasuryRewardCutRate");

517:         emit TranscoderUpdate(msg.sender, _rewardCut, _feeShare);

619:         emit Bond(_to, currentDelegate, _owner, _amount, del.bondedAmount);

889:             emit TreasuryReward(msg.sender, trsry, treasuryRewards);

899:         emit Reward(msg.sender, transcoderRewards);

1181:         emit ParameterUpdate("nextRoundTreasuryRewardCutRate");

1420:             emit TranscoderDeactivated(lastTranscoder, _activationRound);

1431:         emit TranscoderActivated(_transcoder, _activationRound);

1446:         emit TranscoderDeactivated(_transcoder, deactivationRound);

1584:         emit Rebond(del.delegateAddress, _delegator, _unbondingLockId, amount);
```

- *BondingVotes.sol* ( [#L395](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L395), [#L404](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L404), [#L410](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L410) ):

```solidity
395:             emit DelegateChanged(_account, previousDelegate, newDelegate);

404:             emit DelegateVotesChanged(_account, previousDelegateVotes, currentDelegateVotes);

410:             emit DelegatorBondedAmountChanged(_account, previous.bondedAmount, current.bondedAmount);
```

### <a name="G-20"></a>[G-20] Use assembly to compute hashes to save gas

If the arguments to the encode call can fit into the scratch space (two words or fewer), then it's more efficient to use assembly to generate the hash (**80 gas**):

`keccak256(abi.encodePacked(x, y))` -> `assembly {mstore(0x00, a); mstore(0x20, b); let hash := keccak256(0x00, 0x40); }`

There are 13 instances:

- *BondingManager.sol* ( [#L1616](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1616), [#L1624](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1624), [#L1632](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1632), [#L1640](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1640), [#L1644](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1644), [#L1648](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1648), [#L1652](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1652), [#L1656](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1656), [#L1660](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1660) ):

```solidity
1616:         return ILivepeerToken(controller.getContract(keccak256("LivepeerToken")));

1624:         return IMinter(controller.getContract(keccak256("Minter")));

1632:         return controller.getContract(keccak256("L2Migrator"));

1640:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));

1644:         return controller.getContract(keccak256("Treasury"));

1648:         return IBondingVotes(controller.getContract(keccak256("BondingVotes")));

1652:         require(msg.sender == controller.getContract(keccak256("TicketBroker")), "caller must be TicketBroker");

1656:         require(msg.sender == controller.getContract(keccak256("RoundsManager")), "caller must be RoundsManager");

1660:         require(msg.sender == controller.getContract(keccak256("Verifier")), "caller must be Verifier");
```

- *BondingVotes.sol* ( [#L540](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L540), [#L547](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L547) ):

```solidity
540:         return IBondingManager(controller.getContract(keccak256("BondingManager")));

547:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));
```

- *LivepeerGovernor.sol* ( [#L102](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L102), [#L109](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L109) ):

```solidity
102:         return IVotes(controller.getContract(keccak256("BondingVotes")));

109:         return Treasury(payable(controller.getContract(keccak256("Treasury"))));
```

### <a name="G-21"></a>[G-21] Use `assembly` to write address/contract type storage values

Using `assembly { sstore(state.slot, addr)` instead of `state = addr` can save gas.

There is 1 instance:

- *LivepeerGovernor.sol* ( [#L95](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L95) ):

```solidity
95:         token = votes();
```

### <a name="G-22"></a>[G-22] Use `calldata` instead of `memory` for immutable arguments

Mark data types as `calldata` instead of `memory` where possible. This makes it so that the data is not automatically loaded into memory. If the data passed into the function does not need to be changed (like updating values in an array), it can be passed in as `calldata`. The one exception to this is if the argument must later be passed into another function that takes an argument that specifies `memory` storage.

There are 2 instances:

- *Treasury.sol* ( [#L16-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L16-L21) ):

```solidity
/// @audit proposers
/// @audit executors
16:     function initialize(
17:         uint256 minDelay,
18:         address[] memory proposers,
19:         address[] memory executors,
20:         address admin
21:     ) external initializer {
```

### <a name="G-23"></a>[G-23] `keccak256()` hash of literals should only be computed once

The result of the hash should be stored in an immutable variable, and the variable should be used instead. If the hash is being used as a part of a function selector, the cast to `bytes4` should also only be done once.

There are 13 instances:

- *BondingManager.sol* ( [#L1616](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1616), [#L1624](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1624), [#L1632](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1632), [#L1640](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1640), [#L1644](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1644), [#L1648](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1648), [#L1652](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1652), [#L1656](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1656), [#L1660](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1660) ):

```solidity
1616:         return ILivepeerToken(controller.getContract(keccak256("LivepeerToken")));

1624:         return IMinter(controller.getContract(keccak256("Minter")));

1632:         return controller.getContract(keccak256("L2Migrator"));

1640:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));

1644:         return controller.getContract(keccak256("Treasury"));

1648:         return IBondingVotes(controller.getContract(keccak256("BondingVotes")));

1652:         require(msg.sender == controller.getContract(keccak256("TicketBroker")), "caller must be TicketBroker");

1656:         require(msg.sender == controller.getContract(keccak256("RoundsManager")), "caller must be RoundsManager");

1660:         require(msg.sender == controller.getContract(keccak256("Verifier")), "caller must be Verifier");
```

- *BondingVotes.sol* ( [#L540](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L540), [#L547](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L547) ):

```solidity
540:         return IBondingManager(controller.getContract(keccak256("BondingManager")));

547:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));
```

- *LivepeerGovernor.sol* ( [#L102](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L102), [#L109](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L109) ):

```solidity
102:         return IVotes(controller.getContract(keccak256("BondingVotes")));

109:         return Treasury(payable(controller.getContract(keccak256("Treasury"))));
```

### <a name="G-24"></a>[G-24] Newer versions of solidity are more gas efficient

The solidity language continues to pursue more efficient gas optimization schemes. Adopting a newer version of solidity can be more gas efficient.

There are 10 instances:

- *BondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *BondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingManager.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IBondingVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L2) ):

```solidity
2: pragma solidity ^0.8.9;
```

- *EarningsPoolLIP36.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *SortedArrays.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *GovernorCountingOverridable.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *IVotes.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *LivepeerGovernor.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

- *Treasury.sol* ( [#L2](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol#L2) ):

```solidity
2: pragma solidity 0.8.9;
```

### <a name="G-25"></a>[G-25] Avoid contract existence checks by using low level calls

Prior to 0.8.10 the compiler inserted extra code, including EXTCODESIZE (100 gas), to check for contract existence for external function calls. In more recent solidity versions, the compiler will not insert these checks if the external call has a return value. Similar behavior can be achieved in earlier versions by using low-level calls, since low level calls never check for contract existence.

<details>
<summary>There are 41 instances (click to show):</summary>

- *BondingManager.sol* ( [#L255](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L255), [#L312](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L312), [#L349](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L349), [#L349](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L349), [#L471](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L471), [#L491](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L491), [#L497](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L497), [#L550](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L550), [#L712](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L712), [#L758](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L758), [#L827](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L827), [#L848](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L848), [#L872](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L872), [#L882](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L882), [#L912](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L912), [#L927](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L927), [#L962](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L962), [#L1147](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1147), [#L1319](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1319), [#L1364](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1364), [#L1444](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1444), [#L1599](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1599), [#L1616](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1616), [#L1624](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1624), [#L1632](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1632), [#L1640](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1640), [#L1644](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1644), [#L1648](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1648), [#L1652](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1652), [#L1656](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1656), [#L1660](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1660), [#L1664](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1664), [#L1668](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1668) ):

```solidity
255:             lock.withdrawRound <= roundsManager().currentRound(),

312:         uint256 currentRound = roundsManager().currentRound();

349:                 mtr.currentMintableTokens().add(mtr.currentMintedTokens()),

349:                 mtr.currentMintableTokens().add(mtr.currentMintedTokens()),

471:         bondingVotes().checkpointTotalActiveStake(currentRoundTotalActiveStake, roundsManager().currentRound());

491:         require(!roundsManager().currentRoundLocked(), "can't update transcoder params, current round is locked");

497:         uint256 currentRound = roundsManager().currentRound();

550:         uint256 currentRound = roundsManager().currentRound();

712:         uint256 currentRound = roundsManager().currentRound();

758:         uint256 currentRound = roundsManager().currentRound();

827:         delegators[msg.sender].startRound = roundsManager().currentRound().add(1);

848:         uint256 currentRound = roundsManager().currentRound();

872:             uint256 treasuryBalance = livepeerToken().balanceOf(treasury());

882:         uint256 totalRewardTokens = mtr.createReward(earningsPool.totalStake, currentRoundTotalActiveStake);

912:         uint256 endRound = roundsManager().currentRound();

927:         uint256 endRound = roundsManager().currentRound();

962:         } else if (del.startRound > roundsManager().currentRound()) {

1147:         uint256 currentRound = roundsManager().currentRound();

1319:             uint256 currRound = roundsManager().currentRound();

1364:             uint256 currRound = roundsManager().currentRound();

1444:         uint256 deactivationRound = roundsManager().currentRound().add(1);

1599:         uint256 startRound = roundsManager().currentRound() + 1;

1616:         return ILivepeerToken(controller.getContract(keccak256("LivepeerToken")));

1624:         return IMinter(controller.getContract(keccak256("Minter")));

1632:         return controller.getContract(keccak256("L2Migrator"));

1640:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));

1644:         return controller.getContract(keccak256("Treasury"));

1648:         return IBondingVotes(controller.getContract(keccak256("BondingVotes")));

1652:         require(msg.sender == controller.getContract(keccak256("TicketBroker")), "caller must be TicketBroker");

1656:         require(msg.sender == controller.getContract(keccak256("RoundsManager")), "caller must be RoundsManager");

1660:         require(msg.sender == controller.getContract(keccak256("Verifier")), "caller must be Verifier");

1664:         require(roundsManager().currentRoundInitialized(), "current round is not initialized");

1668:         uint256 currentRound = roundsManager().currentRound();
```

- *BondingVotes.sol* ( [#L138](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L138), [#L347](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L347), [#L531](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L531), [#L540](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L540), [#L547](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L547) ):

```solidity
138:         return SafeCast.toUint48(roundsManager().currentRound());

347:             return bondingManager().nextRoundTotalActiveStake();

531:         ) = bondingManager().getTranscoderEarningsPoolForRound(_transcoder, _round);

540:         return IBondingManager(controller.getContract(keccak256("BondingManager")));

547:         return IRoundsManager(controller.getContract(keccak256("RoundsManager")));
```

- *GovernorCountingOverridable.sol* ( [#L182](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L182) ):

```solidity
182:         address delegate = votes().delegatedAt(_account, timepoint);
```

- *LivepeerGovernor.sol* ( [#L102](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L102), [#L109](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L109) ):

```solidity
102:         return IVotes(controller.getContract(keccak256("BondingVotes")));

109:         return Treasury(payable(controller.getContract(keccak256("Treasury"))));
```

</details>

### <a name="G-26"></a>[G-26] The result of a function call should be cached rather than re-calling the function

The function calls in solidity are expensive. If the same result of the same function calls are to be used several times, the result should be cached to reduce the gas consumption of repeated calls.

<details>
<summary>There are 13 instances (click to show):</summary>

- *BondingManager.sol* ( [#L394-L398](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L394-L398), [#L485-L489](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L485-L489), [#L537-L544](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L537-L544), [#L842-L846](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L842-L846) ):

```solidity
/// @audit `minter()` is called 3 times
394:     function slashTranscoder(
395:         address _transcoder,
396:         address _finder,
397:         uint256 _slashAmount,
398:         uint256 _finderFee

/// @audit `roundsManager()` is called 2 times
485:     function transcoderWithHint(
486:         uint256 _rewardCut,
487:         uint256 _feeShare,
488:         address _newPosPrev,
489:         address _newPosNext

/// @audit `delegatorStatus(_owner)` is called 2 times
/// @audit `currentRound.add(1)` is called 2 times
537:     function bondForWithHint(
538:         uint256 _amount,
539:         address _owner,
540:         address _to,
541:         address _oldDelegateNewPosPrev,
542:         address _oldDelegateNewPosNext,
543:         address _currDelegateNewPosPrev,
544:         address _currDelegateNewPosNext

/// @audit `treasury()` is called 2 times
842:     function rewardWithHint(address _newPosPrev, address _newPosNext)
843:         public
844:         whenSystemNotPaused
845:         currentRoundInitialized
846:         autoCheckpoint(msg.sender)
```

- *BondingVotes.sol* ( [#L258-L265](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L258-L265), [#L303](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L303), [#L325](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L325), [#L422-L425](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L422-L425), [#L553](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L553) ):

```solidity
/// @audit `clock()` is called 2 times
258:     function checkpointBondingState(
259:         address _account,
260:         uint256 _startRound,
261:         uint256 _bondedAmount,
262:         address _delegateAddress,
263:         uint256 _delegatedAmount,
264:         uint256 _lastClaimRound,
265:         uint256 _lastRewardRound

/// @audit `clock()` is called 2 times
303:     function checkpointTotalActiveStake(uint256 _totalStake, uint256 _round) external virtual onlyBondingManager {

/// @audit `clock()` is called 2 times
325:     function getTotalActiveStakeAt(uint256 _round) public view virtual returns (uint256) {

/// @audit `clock()` is called 2 times
422:     function getBondingCheckpointAt(address _account, uint256 _round)
423:         internal
424:         view
425:         returns (BondingCheckpoint storage)

/// @audit `bondingManager()` is called 2 times
553:     function _onlyBondingManager() internal view {
```

- *EarningsPoolLIP36.sol* ( [#L18-L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L18-L21), [#L71-L75](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol#L71-L75) ):

```solidity
/// @audit `PreciseMathUtils.percOf(prevCumulativeRewardFactor,_fees,earningsPool.totalStake)` is called 2 times
18:     function updateCumulativeFeeFactor(
19:         EarningsPool.Data storage earningsPool,
20:         EarningsPool.Data memory _prevEarningsPool,
21:         uint256 _fees

/// @audit `PreciseMathUtils.percPoints(1,1)` is called 2 times
71:     function delegatorCumulativeStakeAndFees(
72:         EarningsPool.Data memory _startPool,
73:         EarningsPool.Data memory _endPool,
74:         uint256 _stake,
75:         uint256 _fees
```

</details>

### <a name="G-27"></a>[G-27] Duplicated `require()`/`revert()` checks should be refactored to a modifier Or function to save gas

Saves deployment costs.

There are 2 instances:

- *BondingVotes.sol* ( [#L327](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L327) ):

```solidity
/// @audit Duplicated on line 428
327:             revert FutureLookup(_round, clock() + 1);
```

### <a name="G-28"></a>[G-28] Usage of `int`s/`uint`s smaller than 32 bytes incurs overhead

Using `ints`/`uints` smaller than 32 bytes may cost more gas. This is because the EVM operates on 32 bytes at a time, so if an element is smaller than 32 bytes, the EVM must perform more operations to reduce the size of the element from 32 bytes to the desired size.

There are 8 instances:

- *BondingManager.sol* ( [#L35](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L35), [#L155](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L155) ):

```solidity
/// @audit uint64
35:     uint64 public unbondingPeriod;

/// @audit uint64
155:     function setUnbondingPeriod(uint64 _unbondingPeriod) external onlyControllerOwner {
```

- *BondingVotes.sol* ( [#L129](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L129), [#L137](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L137), [#L237](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L237) ):

```solidity
/// @audit uint8
129:     function decimals() external pure returns (uint8) {

/// @audit uint48
137:     function clock() public view returns (uint48) {

/// @audit uint8
237:         uint8,
```

- *GovernorCountingOverridable.sol* ( [#L22](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L22), [#L133](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L133) ):

```solidity
/// @audit uint8
22:     error InvalidVoteType(uint8 voteType);

/// @audit uint8
133:         uint8 _supportInt,
```

- *IVotes.sol* ( [#L17](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol#L17) ):

```solidity
/// @audit uint8
17:     function decimals() external view returns (uint8);
```

### <a name="G-29"></a>[G-29] Multiple mappings can be replaced with a single struct mapping

Saves a storage slot for the mapping. Depending on the circumstances and sizes of types, can avoid a Gsset (**20000 gas**) per mapping combined. Reads and subsequent writes can also be cheaper when a function requires both values and they both fit in the same storage slot. Finally, if both fields are accessed in the same function, can save **~42 gas per access** due to [not having to recalculate the key's keccak256 hash](https://gist.github.com/IllIllI000/ec23a57daa30a8f8ca8b9681c8ccefb0) (Gkeccak256 - 30 gas) and that calculation's associated stack operations.

There are 2 instances:

- *BondingManager.sol* ( [#L84](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L84), [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L85) ):

```solidity
84:     mapping(address => Delegator) private delegators;

85:     mapping(address => Transcoder) private transcoders;
```

### <a name="G-30"></a>[G-30] Multiple mappings with same keys can be combined into a single struct mapping for readability

Well-organized data structures make code reviews easier, which may lead to fewer bugs. Consider combining related mappings into mappings to structs, so it's clear what data is related.

There are 2 instances:

- *BondingManager.sol* ( [#L84](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L84), [#L85](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L85) ):

```solidity
84:     mapping(address => Delegator) private delegators;

85:     mapping(address => Transcoder) private transcoders;
```

### <a name="G-31"></a>[G-31] Optimize names to save gas

`public`/`external` function names and `public` member variable names can be optimized to save gas. Below are the interfaces/abstract contracts that can be optimized so that the most frequently-called functions use the least amount of gas possible during method lookup. Method IDs that have two leading zero bytes can save 128 gas each during deployment, and renaming functions to have lower method IDs will save 22 gas per call, [per sorted position shifted](https://medium.com/joyso/solidity-how-does-function-name-affect-gas-consumption-in-smart-contract-47d270d8ac92).

There are 6 instances:

- *BondingManager.sol* ( [#L23](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L23) ):

```solidity
/// @audit setUnbondingPeriod(), setTreasuryRewardCutRate(), setTreasuryBalanceCeiling(), setNumActiveTranscoders(), transcoder(), bond(), unbond(), rebond(), rebondFromUnbonded(), checkpointBondingState(), withdrawStake(), withdrawFees(), reward(), updateTranscoderWithFees(), slashTranscoder(), claimEarnings(), setCurrentRoundTotalActiveStake(), transcoderWithHint(), bondForWithHint(), bondWithHint(), transferBond(), unbondWithHint(), rebondWithHint(), rebondFromUnbondedWithHint(), rewardWithHint(), pendingStake(), pendingFees(), transcoderTotalStake(), transcoderStatus(), delegatorStatus(), getTranscoder(), getTranscoderEarningsPoolForRound(), getDelegator(), getDelegatorUnbondingLock(), getTranscoderPoolMaxSize(), getTranscoderPoolSize(), getFirstTranscoderInPool(), getNextTranscoderInPool(), getTotalBonded(), isActiveTranscoder(), isRegisteredTranscoder(), isValidUnbondingLock(), unbondingPeriod, currentRoundTotalActiveStake, nextRoundTotalActiveStake, treasuryRewardCutRate, nextRoundTreasuryRewardCutRate, treasuryBalanceCeiling
23: contract BondingManager is ManagerProxyTarget, IBondingManager {
```

- *BondingVotes.sol* ( [#L20](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L20) ):

```solidity
/// @audit clock(), CLOCK_MODE(), getVotes(), getPastVotes(), getPastTotalSupply(), delegates(), delegatedAt(), delegate(), delegateBySig(), checkpointBondingState(), checkpointTotalActiveStake(), hasCheckpoint(), getTotalActiveStakeAt(), getBondingStateAt()
20: contract BondingVotes is ManagerProxyTarget, IBondingVotes {
```

- *IBondingManager.sol* ( [#L8](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol#L8) ):

```solidity
/// @audit updateTranscoderWithFees(), slashTranscoder(), setCurrentRoundTotalActiveStake(), getTranscoderPoolSize(), transcoderTotalStake(), isActiveTranscoder(), getTotalBonded(), nextRoundTotalActiveStake(), getTranscoderEarningsPoolForRound()
8: interface IBondingManager {
```

- *IBondingVotes.sol* ( [#L9](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol#L9) ):

```solidity
/// @audit checkpointBondingState(), checkpointTotalActiveStake(), hasCheckpoint(), getTotalActiveStakeAt(), getBondingStateAt()
9: interface IBondingVotes is IVotes {
```

- *GovernorCountingOverridable.sol* ( [#L21](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol#L21) ):

```solidity
/// @audit COUNTING_MODE(), hasVoted(), proposalVotes(), votes(), quota
21: abstract contract GovernorCountingOverridable is Initializable, GovernorUpgradeable {
```

- *LivepeerGovernor.sol* ( [#L26](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol#L26) ):

```solidity
/// @audit initialize(), quorumDenominator(), votes(), bumpGovernorVotesTokenAddress(), proposalThreshold(), state()
26: contract LivepeerGovernor is
```

### <a name="G-32"></a>[G-32] Consider activating via-ir for deploying

By using `--via-ir` or `{"viaIR": true}`, the compiler is able to use more advanced [multi-function optimizations](https://docs.soliditylang.org/en/v0.8.17/ir-breaking-changes.html#solidity-ir-based-codegen-changes), for extra gas savings.

There are 10 instances:

- [*BondingManager.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol)

- [*BondingVotes.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol)

- [*IBondingManager.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingManager.sol)

- [*IBondingVotes.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/IBondingVotes.sol)

- [*EarningsPoolLIP36.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/EarningsPoolLIP36.sol)

- [*SortedArrays.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/libraries/SortedArrays.sol)

- [*GovernorCountingOverridable.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/GovernorCountingOverridable.sol)

- [*IVotes.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/IVotes.sol)

- [*LivepeerGovernor.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/LivepeerGovernor.sol)

- [*Treasury.sol*](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/treasury/Treasury.sol)

### <a name="G-33"></a>[G-33] Use `!= 0` or `== 0` for unsigned integer comparison

Using `==0`, `!= 0` instead of `> 0`, `>= 1`, `< 1`, `<= 0` can save gas.

There are 14 instances:

- *BondingManager.sol* ( [#L402](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L402), [#L576](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L576), [#L606](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L606), [#L614](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L614), [#L754](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L754), [#L871](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L871), [#L873](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L873), [#L884](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L884), [#L1158](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1158), [#L1169](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingManager.sol#L1169) ):

```solidity
/// @audit Replace with `!= 0`
402:         if (del.bondedAmount > 0) {

/// @audit Replace with `!= 0`
576:         } else if (currentBondedAmount > 0 && currentDelegate != _to) {

/// @audit Replace with `!= 0`
606:         require(delegationAmount > 0, "delegation amount must be greater than 0");

/// @audit Replace with `!= 0`
614:         if (_amount > 0) {

/// @audit Replace with `!= 0`
754:         require(_amount > 0, "unbond amount must be greater than 0");

/// @audit Replace with `!= 0`
871:         if (treasuryBalanceCeiling > 0) {

/// @audit Replace with `!= 0`
873:             if (treasuryBalance >= treasuryBalanceCeiling && nextRoundTreasuryRewardCutRate > 0) {

/// @audit Replace with `!= 0`
884:         if (treasuryRewards > 0) {

/// @audit Replace with `!= 0`
1158:         return d.delegateAddress == _transcoder && d.bondedAmount > 0;

/// @audit Replace with `!= 0`
1169:         return delegators[_delegator].unbondingLocks[_unbondingLockId].withdrawRound > 0;
```

- *BondingVotes.sol* ( [#L316](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L316), [#L331](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L331), [#L436](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L436), [#L507](https://github.com/code-423n4/2023-08-livepeer/tree/bcf493b98d0ef835e969e637f25ea51ab77fabb6/contracts/bonding/BondingVotes.sol#L507) ):

```solidity
/// @audit Replace with `!= 0`
316:         return bondingCheckpoints[_account].startRounds.length > 0;

/// @audit Replace with `!= 0`
331:         if (exactCheckpoint > 0) {

/// @audit Replace with `!= 0`
436:         if (bond.bondedAmount > 0) {

/// @audit Replace with `!= 0`
507:         if (rewardRound > 0) {
```

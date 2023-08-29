[<img width="200" alt="get in touch with Consensys Diligence" src="https://user-images.githubusercontent.com/2865694/56826101-91dcf380-685b-11e9-937c-af49c2510aa0.png">](https://diligence.consensys.net)<br/>
<sup>
[[ 🌐 ](https://diligence.consensys.net) [ 📩 ](mailto:diligence@consensys.net) [ 🔥 ](https://consensys.github.io/diligence/)]
</sup><br/><br/>

# Solidity Metrics for 'Livepeer Onchain Treasury Upgrade'

## Table of contents

- [Solidity Metrics for 'Livepeer Onchain Treasury Upgrade'](#solidity-metrics-for-livepeer-onchain-treasury-upgrade)
  - [Table of contents](#table-of-contents)
  - [Scope](#scope)
    - [Source Units in Scope](#source-units-in-scope)
  - [Report](#report)
    - [Overview](#overview)
      - [Risk](#risk)
      - [Source Lines (sloc vs. nsloc)](#source-lines-sloc-vs-nsloc)
      - [Inline Documentation](#inline-documentation)
      - [Components](#components)
      - [Exposed Functions](#exposed-functions)
      - [StateVariables](#statevariables)
      - [Capabilities](#capabilities)
      - [Dependencies / External Imports](#dependencies--external-imports)
      - [Totals](#totals)
        - [Summary](#summary)
        - [AST Node Statistics](#ast-node-statistics)
          - [Function Calls](#function-calls)
          - [Assembly Calls](#assembly-calls)
          - [AST Total](#ast-total)
        - [Inheritance Graph](#inheritance-graph)
        - [CallGraph](#callgraph)
          - [Contract Summary](#contract-summary)

## <span id=t-scope>Scope</span>

This section lists files that are in scope for the metrics report.

- **Project:** `Livepeer Onchain Treasury Upgrade`
- **Included Files:**
  - `contracts/bonding/*`
  - `contracts/treasury/*`
- **Excluded Paths:**
  - `contracts/bonding/libraries/EarningsPool.sol` (not modified)

### <span id=t-source-Units-in-Scope>Source Units in Scope</span>

Source Units Analyzed: **`10`**<br>
Source Units in Scope: **`10`** (**100%**)

| Type     | File                                               | Logic Contracts | Interfaces | Lines    | nLines   | nSLOC    | Comment Lines | Complex. Score | Capabilities                                    |
| -------- | -------------------------------------------------- | --------------- | ---------- | -------- | -------- | -------- | ------------- | -------------- | ----------------------------------------------- |
| 📝       | contracts/bonding/BondingManager.sol               | 1               | \*\*\*\*   | 1674     | 1511     | 725      | 588           | 510            | **<abbr title='Uses Hash-Functions'>🧮</abbr>** |
| 📝       | contracts/bonding/BondingVotes.sol                 | 1               | \*\*\*\*   | 558      | 518      | 232      | 224           | 137            | **<abbr title='Uses Hash-Functions'>🧮</abbr>** |
| 🔍       | contracts/bonding/IBondingManager.sol              | \*\*\*\*        | 1          | 95       | 59       | 41       | 16            | 19             | \*\*\*\*                                        |
| 🔍       | contracts/bonding/IBondingVotes.sol                | \*\*\*\*        | 1          | 53       | 31       | 12       | 13            | 13             | \*\*\*\*                                        |
| 📚       | contracts/bonding/libraries/EarningsPoolLIP36.sol  | 1               | \*\*\*\*   | 99       | 86       | 47       | 26            | 20             | \*\*\*\*                                        |
| 📚       | contracts/bonding/libraries/SortedArrays.sol       | 1               | \*\*\*\*   | 81       | 81       | 38       | 29            | 13             | \*\*\*\*                                        |
| 🎨       | contracts/treasury/GovernorCountingOverridable.sol | 1               | \*\*\*\*   | 225      | 196      | 101      | 69            | 41             | \*\*\*\*                                        |
| 🔍       | contracts/treasury/IVotes.sol                      | \*\*\*\*        | 1          | 18       | 7        | 4        | 2             | 13             | \*\*\*\*                                        |
| 📝       | contracts/treasury/LivepeerGovernor.sol            | 1               | \*\*\*\*   | 168      | 131      | 69       | 42            | 57             | **<abbr title='Uses Hash-Functions'>🧮</abbr>** |
| 📝       | contracts/treasury/Treasury.sol                    | 1               | \*\*\*\*   | 24       | 19       | 7        | 10            | 9              | \*\*\*\*                                        |
| 📝📚🔍🎨 | **Totals**                                         | **7**           | **3**      | **2995** | **2639** | **1276** | **1019**      | **832**        | **<abbr title='Uses Hash-Functions'>🧮</abbr>** |

<sub>
Legend: <a onclick="toggleVisibility('table-legend', this)">[➕]</a>
<div id="table-legend" style="display:none">

<ul>
<li> <b>Lines</b>: total lines of the source unit </li>
<li> <b>nLines</b>: normalized lines of the source unit (e.g. normalizes functions spanning multiple lines) </li>
<li> <b>nSLOC</b>: normalized source lines of code (only source-code lines; no comments, no blank lines) </li>
<li> <b>Comment Lines</b>: lines containing single or block comments </li>
<li> <b>Complexity Score</b>: a custom complexity score derived from code statements that are known to introduce code complexity (branches, loops, calls, external interfaces, ...) </li>
</ul>

</div>
</sub>

## <span id=t-report>Report</span>

### Overview

The analysis finished with **`0`** errors and **`0`** duplicate files.

#### <span id=t-risk>Risk</span>

<div class="wrapper" style="max-width: 512px; margin: auto">
			<canvas id="chart-risk-summary"></canvas>
</div>

#### <span id=t-source-lines>Source Lines (sloc vs. nsloc)</span>

<div class="wrapper" style="max-width: 512px; margin: auto">
    <canvas id="chart-nsloc-total"></canvas>
</div>

#### <span id=t-inline-documentation>Inline Documentation</span>

- **Comment-to-Source Ratio:** On average there are`1.58` code lines per comment (lower=better).
- **ToDo's:** `1`

#### <span id=t-components>Components</span>

| 📝Contracts | 📚Libraries | 🔍Interfaces | 🎨Abstract |
| ----------- | ----------- | ------------ | ---------- |
| 4           | 2           | 3            | 1          |

#### <span id=t-exposed-functions>Exposed Functions</span>

This section lists functions that are explicitly declared public or payable. Please note that getter methods for public stateVars are not included.

| 🌐Public | 💰Payable |
| -------- | --------- |
| 91       | 0         |

| External | Internal | Private | Pure | View |
| -------- | -------- | ------- | ---- | ---- |
| 52       | 109      | 0       | 8    | 75   |

#### <span id=t-statevariables>StateVariables</span>

| Total | 🌐Public |
| ----- | -------- |
| 15    | 7        |

#### <span id=t-capabilities>Capabilities</span>

| Solidity Versions observed | 🧪 Experimental Features | 💰 Can Receive Funds | 🖥 Uses Assembly | 💣 Has Destroyable Contracts |
| -------------------------- | ------------------------ | -------------------- | --------------- | ---------------------------- |
| `0.8.9`<br/>`^0.8.9`       |                          | \*\*\*\*             | \*\*\*\*        | \*\*\*\*                     |

| 📤 Transfers ETH | ⚡ Low-Level Calls | 👥 DelegateCall | 🧮 Uses Hash Functions | 🔖 ECRecover | 🌀 New/Create/Create2 |
| ---------------- | ------------------ | --------------- | ---------------------- | ------------ | --------------------- |
| \*\*\*\*         | \*\*\*\*           | \*\*\*\*        | `yes`                  | \*\*\*\*     | \*\*\*\*              |

| ♻️ TryCatch | Σ Unchecked |
| ----------- | ----------- |
| \*\*\*\*    | \*\*\*\*    |

#### <span id=t-package-imports>Dependencies / External Imports</span>

| Dependency / Import Path                                                                             | Count |
| ---------------------------------------------------------------------------------------------------- | ----- |
| @openzeppelin/contracts-upgradeable/governance/GovernorUpgradeable.sol                               | 2     |
| @openzeppelin/contracts-upgradeable/governance/TimelockControllerUpgradeable.sol                     | 1     |
| @openzeppelin/contracts-upgradeable/governance/extensions/GovernorSettingsUpgradeable.sol            | 1     |
| @openzeppelin/contracts-upgradeable/governance/extensions/GovernorTimelockControlUpgradeable.sol     | 1     |
| @openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesQuorumFractionUpgradeable.sol | 1     |
| @openzeppelin/contracts-upgradeable/governance/extensions/GovernorVotesUpgradeable.sol               | 1     |
| @openzeppelin/contracts-upgradeable/interfaces/IERC5805Upgradeable.sol                               | 2     |
| @openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol                                    | 2     |
| @openzeppelin/contracts/utils/Arrays.sol                                                             | 2     |
| @openzeppelin/contracts/utils/math/SafeCast.sol                                                      | 1     |
| @openzeppelin/contracts/utils/math/SafeMath.sol                                                      | 2     |

#### <span id=t-totals>Totals</span>

##### Summary

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar"></canvas>
</div>

##### AST Node Statistics

###### Function Calls

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar-ast-funccalls"></canvas>
</div>

###### Assembly Calls

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar-ast-asmcalls"></canvas>
</div>

###### AST Total

<div class="wrapper" style="max-width: 90%; margin: auto">
    <canvas id="chart-num-bar-ast"></canvas>
</div>

##### Inheritance Graph

<a onclick="toggleVisibility('surya-inherit', this)">[➕]</a>

<div id="surya-inherit" style="display:none">
<div class="wrapper" style="max-width: 512px; margin: auto">
    <div id="surya-inheritance" style="text-align: center;"></div>
</div>
</div>

##### CallGraph

<a onclick="toggleVisibility('surya-call', this)">[➕]</a>

<div id="surya-call" style="display:none">
<div class="wrapper" style="max-width: 512px; margin: auto">
    <div id="surya-callgraph" style="text-align: center;"></div>
</div>
</div>

###### Contract Summary

<a onclick="toggleVisibility('surya-mdreport', this)">[➕]</a>

<div id="surya-mdreport" style="display:none">
 Sūrya's Description Report

Files Description Table

| File Name                                          | SHA-1 Hash                               |
| -------------------------------------------------- | ---------------------------------------- |
| contracts/bonding/BondingManager.sol               | 316e0d6eb0911de1490d753e2c635098087b25b1 |
| contracts/bonding/BondingVotes.sol                 | 96eace6a4ab4f02388984f56404a904a123e687a |
| contracts/bonding/IBondingManager.sol              | 0777634401fbbd6687a306131f4d33cda987f307 |
| contracts/bonding/IBondingVotes.sol                | 770a0a80495a72ea05ac2ed3681e004b98bfcc3d |
| contracts/bonding/libraries/EarningsPoolLIP36.sol  | c55f68088870e5a764821dc9bb8fe67305be00b2 |
| contracts/bonding/libraries/SortedArrays.sol       | a4e3e3d116feef5e9d4063f63d88e8239d799dec |
| contracts/treasury/GovernorCountingOverridable.sol | 08a8fe8bab27cd3c8d0947190cd429b366ecdd6b |
| contracts/treasury/IVotes.sol                      | a6a75380136bf7848d87d8f5330002f09a8a5d2a |
| contracts/treasury/LivepeerGovernor.sol            | 713335bc4fae74ddc07278d22e57f1ee7c7a2a0b |
| contracts/treasury/Treasury.sol                    | f95518d3ab28babf69285f9217df930d59945fb8 |

Contracts Description Table

|            Contract             |                      Type                      |                                                                                                         Bases                                                                                                          |                |                                                                              |
| :-----------------------------: | :--------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------: | :--------------------------------------------------------------------------: |
|                └                |               **Function Name**                |                                                                                                     **Visibility**                                                                                                     | **Mutability** |                                **Modifiers**                                 |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|       **BondingManager**        |                 Implementation                 |                                                                                          ManagerProxyTarget, IBondingManager                                                                                           |                |                                                                              |
|                └                |                 <Constructor>                  |                                                                                                       Public ❗️                                                                                                       |       🛑       |                                   Manager                                    |
|                └                |               setUnbondingPeriod               |                                                                                                      External ❗️                                                                                                      |       🛑       |                             onlyControllerOwner                              |
|                └                |            setTreasuryRewardCutRate            |                                                                                                      External ❗️                                                                                                      |       🛑       |                             onlyControllerOwner                              |
|                └                |           setTreasuryBalanceCeiling            |                                                                                                      External ❗️                                                                                                      |       🛑       |                             onlyControllerOwner                              |
|                └                |            setNumActiveTranscoders             |                                                                                                      External ❗️                                                                                                      |       🛑       |                             onlyControllerOwner                              |
|                └                |                   transcoder                   |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                      bond                      |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                     unbond                     |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                     rebond                     |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |               rebondFromUnbonded               |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |             checkpointBondingState             |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                 withdrawStake                  |                                                                                                      External ❗️                                                                                                      |       🛑       |                 whenSystemNotPaused currentRoundInitialized                  |
|                └                |                  withdrawFees                  |                                                                                                      External ❗️                                                                                                      |       🛑       |        whenSystemNotPaused currentRoundInitialized autoClaimEarnings         |
|                └                |                     reward                     |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |            updateTranscoderWithFees            |                                                                                                      External ❗️                                                                                                      |       🛑       |                     whenSystemNotPaused onlyTicketBroker                     |
|                └                |                slashTranscoder                 |                                                                                                      External ❗️                                                                                                      |       🛑       |      whenSystemNotPaused onlyVerifier autoClaimEarnings autoCheckpoint       |
|                └                |                 claimEarnings                  |                                                                                                      External ❗️                                                                                                      |       🛑       |          whenSystemNotPaused currentRoundInitialized autoCheckpoint          |
|                └                |        setCurrentRoundTotalActiveStake         |                                                                                                      External ❗️                                                                                                      |       🛑       |                              onlyRoundsManager                               |
|                └                |               transcoderWithHint               |                                                                                                       Public ❗️                                                                                                       |       🛑       |                 whenSystemNotPaused currentRoundInitialized                  |
|                └                |                bondForWithHint                 |                                                                                                       Public ❗️                                                                                                       |       🛑       |                 whenSystemNotPaused currentRoundInitialized                  |
|                └                |                  bondWithHint                  |                                                                                                       Public ❗️                                                                                                       |       🛑       |                                    NO❗️                                     |
|                └                |                  transferBond                  |                                                                                                       Public ❗️                                                                                                       |       🛑       |                 whenSystemNotPaused currentRoundInitialized                  |
|                └                |                 unbondWithHint                 |                                                                                                       Public ❗️                                                                                                       |       🛑       | whenSystemNotPaused currentRoundInitialized autoClaimEarnings autoCheckpoint |
|                └                |                 rebondWithHint                 |                                                                                                       Public ❗️                                                                                                       |       🛑       |        whenSystemNotPaused currentRoundInitialized autoClaimEarnings         |
|                └                |           rebondFromUnbondedWithHint           |                                                                                                       Public ❗️                                                                                                       |       🛑       |        whenSystemNotPaused currentRoundInitialized autoClaimEarnings         |
|                └                |                 rewardWithHint                 |                                                                                                       Public ❗️                                                                                                       |       🛑       |          whenSystemNotPaused currentRoundInitialized autoCheckpoint          |
|                └                |                  pendingStake                  |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                  pendingFees                   |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |              transcoderTotalStake              |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                transcoderStatus                |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                delegatorStatus                 |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                 getTranscoder                  |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |       getTranscoderEarningsPoolForRound        |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                  getDelegator                  |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |           getDelegatorUnbondingLock            |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |            getTranscoderPoolMaxSize            |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |             getTranscoderPoolSize              |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |            getFirstTranscoderInPool            |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |            getNextTranscoderInPool             |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                 getTotalBonded                 |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |               isActiveTranscoder               |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |             isRegisteredTranscoder             |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |              isValidUnbondingLock              |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |           \_setTreasuryRewardCutRate           |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |             cumulativeFactorsPool              |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |          latestCumulativeFactorsPool           |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |        delegatorCumulativeStakeAndFees         |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |              pendingStakeAndFees               |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |               increaseTotalStake               |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                autoCheckpoint                                |
|                └                |        increaseTotalStakeUncheckpointed        |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |               decreaseTotalStake               |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                autoCheckpoint                                |
|                └                |               tryToJoinActiveSet               |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |                resignTranscoder                |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |          updateTranscoderWithRewards           |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |          updateDelegatorWithEarnings           |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |                 processRebond                  |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                autoCheckpoint                                |
|                └                |            \_checkpointBondingState            |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |                 livepeerToken                  |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                     minter                     |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                   l2Migrator                   |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                 roundsManager                  |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                    treasury                    |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                  bondingVotes                  |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |               \_onlyTicketBroker               |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |              \_onlyRoundsManager               |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                 \_onlyVerifier                 |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |           \_currentRoundInitialized            |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |              \_autoClaimEarnings               |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|        **BondingVotes**         |                 Implementation                 |                                                                                           ManagerProxyTarget, IBondingVotes                                                                                            |                |                                                                              |
|                └                |                 <Constructor>                  |                                                                                                       Public ❗️                                                                                                       |       🛑       |                                   Manager                                    |
|                └                |                      name                      |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                     symbol                     |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                    decimals                    |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                     clock                      |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                   CLOCK_MODE                   |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                    getVotes                    |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                  getPastVotes                  |                                                                                                      External ❗️                                                                                                      |                |                                onlyPastRounds                                |
|                └                |                  totalSupply                   |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |               getPastTotalSupply               |                                                                                                      External ❗️                                                                                                      |                |                                onlyPastRounds                                |
|                └                |                   delegates                    |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                  delegatedAt                   |                                                                                                      External ❗️                                                                                                      |                |                                onlyPastRounds                                |
|                └                |                    delegate                    |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                 delegateBySig                  |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |             checkpointBondingState             |                                                                                                      External ❗️                                                                                                      |       🛑       |                              onlyBondingManager                              |
|                └                |           checkpointTotalActiveStake           |                                                                                                      External ❗️                                                                                                      |       🛑       |                              onlyBondingManager                              |
|                └                |                 hasCheckpoint                  |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |             getTotalActiveStakeAt              |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |               getBondingStateAt                |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |           onBondingCheckpointChanged           |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |             getBondingCheckpointAt             |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |           delegatorCumulativeStakeAt           |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |      getLastTranscoderRewardsEarningsPool      |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |       getTranscoderEarningsPoolForRound        |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                 bondingManager                 |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                 roundsManager                  |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |              \_onlyBondingManager              |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|       **IBondingManager**       |                   Interface                    |                                                                                                                                                                                                                        |                |                                                                              |
|                └                |            updateTranscoderWithFees            |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                slashTranscoder                 |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |        setCurrentRoundTotalActiveStake         |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |             getTranscoderPoolSize              |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |              transcoderTotalStake              |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |               isActiveTranscoder               |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                 getTotalBonded                 |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |           nextRoundTotalActiveStake            |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |       getTranscoderEarningsPoolForRound        |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|        **IBondingVotes**        |                   Interface                    |                                                                                                         IVotes                                                                                                         |                |                                                                              |
|                └                |             checkpointBondingState             |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |           checkpointTotalActiveStake           |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                 hasCheckpoint                  |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |             getTotalActiveStakeAt              |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |               getBondingStateAt                |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|      **EarningsPoolLIP36**      |                    Library                     |                                                                                                                                                                                                                        |                |                                                                              |
|                └                |           updateCumulativeFeeFactor            |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |          updateCumulativeRewardFactor          |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |        delegatorCumulativeStakeAndFees         |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|        **SortedArrays**         |                    Library                     |                                                                                                                                                                                                                        |                |                                                                              |
|                └                |                 findLowerBound                 |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                   pushSorted                   |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
| **GovernorCountingOverridable** |                 Implementation                 |                                                                                           Initializable, GovernorUpgradeable                                                                                           |                |                                                                              |
|                └                |      \_\_GovernorCountingOverridable_init      |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                               onlyInitializing                               |
|                └                | \_\_GovernorCountingOverridable_init_unchained |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                               onlyInitializing                               |
|                └                |                 COUNTING_MODE                  |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                    hasVoted                    |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                 proposalVotes                  |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                \_quorumReached                 |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                \_voteSucceeded                 |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                  \_countVote                   |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |             \_handleVoteOverrides              |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |                     votes                      |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|           **IVotes**            |                   Interface                    |                                                                                                  IERC5805Upgradeable                                                                                                   |                |                                                                              |
|                └                |                  totalSupply                   |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                  delegatedAt                   |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                      name                      |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                     symbol                     |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                └                |                    decimals                    |                                                                                                      External ❗️                                                                                                      |                |                                    NO❗️                                     |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|      **LivepeerGovernor**       |                 Implementation                 | ManagerProxyTarget, Initializable, GovernorUpgradeable, GovernorSettingsUpgradeable, GovernorTimelockControlUpgradeable, GovernorVotesUpgradeable, GovernorVotesQuorumFractionUpgradeable, GovernorCountingOverridable |                |                                                                              |
|                └                |                 <Constructor>                  |                                                                                                       Public ❗️                                                                                                       |       🛑       |                                   Manager                                    |
|                └                |                   initialize                   |                                                                                                       Public ❗️                                                                                                       |       🛑       |                                 initializer                                  |
|                └                |               quorumDenominator                |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                     votes                      |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |         bumpGovernorVotesTokenAddress          |                                                                                                      External ❗️                                                                                                      |       🛑       |                                    NO❗️                                     |
|                └                |                  bondingVotes                  |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |                    treasury                    |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |               proposalThreshold                |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                     state                      |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                └                |                   \_execute                    |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |                    \_cancel                    |                                                                                                      Internal 🔒                                                                                                       |       🛑       |                                                                              |
|                └                |                   \_executor                   |                                                                                                      Internal 🔒                                                                                                       |                |                                                                              |
|                └                |               supportsInterface                |                                                                                                       Public ❗️                                                                                                       |                |                                    NO❗️                                     |
|                                 |                                                |                                                                                                                                                                                                                        |                |                                                                              |
|          **Treasury**           |                 Implementation                 |                                                                                      Initializable, TimelockControllerUpgradeable                                                                                      |                |                                                                              |
|                └                |                   initialize                   |                                                                                                      External ❗️                                                                                                      |       🛑       |                                 initializer                                  |

Legend

| Symbol | Meaning                   |
| :----: | ------------------------- |
|   🛑   | Function can modify state |
|   💵   | Function is payable       |

</div>
____
<sub>
Thinking about smart contract security? We can provide training, ongoing advice, and smart contract auditing. [Contact us](https://diligence.consensys.net/contact/).
</sub>

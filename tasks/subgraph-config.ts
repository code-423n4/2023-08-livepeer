// import {task} from "hardhat/config"
// import fs from "fs/promises"
// import path from "path"

// const contracts = {
//     controller: {
//         address: "53Ea65f3E8B06d07DC1008276c5e4aa15126502B",
//         startBlock: 32123592
//     },
//     bondingManager: {
//         address: "4bB92357243CC1aB9Cc578cCC6A6Aa3Ad9B853bF",
//         startBlock: 32123673
//     },
//     roundsManager: {
//         address: "862F638260062Ee1e89a9a2D72CBE8aa7201704f",
//         startBlock: 32123713
//     },
//     livepeerToken: {
//         address: "8ACF21ac13AF13d583b0db39fBca1E7e5498b440",
//         startBlock: 32123608
//     },
//     minterV1: {
//         address: "6a6d2E0761c53c897ac9ae3eecC9Dc021e2B84bA",
//         startBlock: 32123599
//     },
//     minter: {
//         address: "6a6d2E0761c53c897ac9ae3eecC9Dc021e2B84bA",
//         startBlock: 32123599
//     },
//     ticketBroker: {
//         address: "13F6305D459230c6e11f284b72230E66f04E55F7",
//         startBlock: 32134575
//     },
//     pollCreator: {
//         address: "A1e283Cdad119Dd69c95a5aA0AF4F9796bdcD332",
//         startBlock: 32123806
//     },
//     livepeerGovernor: {
//         address: "D36575965fe609640dF08296EdDAcFc41b3D8540",
//         startBlock: 32123849
//     },
//     serviceRegistry: {
//         address: "9246A7589C32b28E75DD2221D3877FF501376ca2",
//         startBlock: 32123730
//     },
//     l2Migrator: {
//         address: "deadbeef0deadbeef1deadbeef3deadbeef4dead",
//         startBlock: 33404404
//     }
// }

// const contractNames = Object.keys(contracts).map(k => k.toLowerCase())

// task(
//     "subgraph-config",
//     "Prints contracts addresses in the format subgraph expects"
// ).setAction(async (taskArgs, hre) => {
//     const networkName = hre.network.name
//     const deploymentFolderPath = `./deployments/${networkName}`
//     console.log(`Reading deployments from ${deploymentFolderPath}`)

//     const deploymentFiles = await fs.readdir(deploymentFolderPath)
//     const jsonFiles = deploymentFiles
//         .filter(f => f.endsWith(".json"))
//         .map(f => f.split(".")[0])
//         .filter(name => {
//             return contractNames.includes(name.toLowerCase())
//         })
//         .sort(
//             (a, b) =>
//                 contractNames.indexOf(a.toLowerCase()) -
//                 contractNames.indexOf(b.toLowerCase())
//         )

//     for (const name of jsonFiles) {
//         const contractFile = path.join(deploymentFolderPath, name + ".json")
//         const contractDataRaw = await fs.readFile(contractFile, "utf8")
//         const contractData = JSON.parse(contractDataRaw)

//         const address = contractData.address
//         const startBlock = contractData.receipt.blockNumber
//         console.log(`${name[0].toLowerCase() + name.slice(1)}:`)
//         console.log(`  address: "${address.slice(2)}"`)
//         console.log(`  startBlock: ${startBlock}`)
//     }
// })


// // const hre = require("hardhat");

// const main = async() => {
//   const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
//   const transac = await transactionsFactory.deploy({ value: hre.ethers.utils.parseEther("0.001") });

//   await transac.deployed();

//   console.log("Transactions address: ", transac.address);
//   // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
//   // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;

//   // const lockedAmount = hre.ethers.utils.parseEther("1");

//   // const Lock = await hre.ethers.getContractFactory("Lock");
//   // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

//   // await lock.deployed();

//   // console.log("Lock with 1 ETH deployed to:", lock.address);
// }

// const runMain = async() => 
// {
//   try{
//     await main();
//     process.exit(0);
//   }
//   catch(error){
//     console.error(error);
//     process.exit(1);
//   }
// }

// runMain();

// //main().catch((error) => {
// //   console.error(error);
// //   process.exitCode = 1;
// // });


const main = async () => {
  const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
  const transactionsContract = await transactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transactions address: ", transactionsContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();

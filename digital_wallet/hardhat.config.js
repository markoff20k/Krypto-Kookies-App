//https://eth-goerli.g.alchemy.com/v2/rX-saIRv4zSX7fxhutFYYXBlOlfXstlO

require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url:'https://eth-goerli.g.alchemy.com/v2/rX-saIRv4zSX7fxhutFYYXBlOlfXstlO',
      accounts: [ 'a9c081861265ecd99bdc6c06e76c1829780b9b414c6ddf2ac78116c1a6084963' ]
    }
  }
};
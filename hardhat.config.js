// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.27",
// };
// import "@nomicfoundation/hardhat-toolbox";
// import "@nomicfoundation/hardhat-verify";
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
  solidity: "0.8.27",
  networks: {
    // ronin: {
    //   url: "https://api.roninchain.com/rpc",
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    //   chainId: 2020,
    // },
    
    // saigon testnet enviornment
    roninTestnet: {
      url: 'https://saigon-testnet.roninchain.com/rpc', 
      chainId: 2021,
      accounts: [`0x${process.env.PRIVATE_KEY}`],  
    },
  },
  sourcify: {
    // Disabled by default
    // Doesn't need an API key
    enabled: true,
  },
};



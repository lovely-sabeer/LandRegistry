
require("@nomicfoundation/hardhat-toolbox");
require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-web3');

module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
			url: `https://sepolia.infura.io/v3/13f9ae50695d453aa99b3329d0ad556e`,
			accounts: ["0xea165239debcf3277227bb4471ce148bcec95946fefa99e5102661920ca344c0"],
			gasLimit: 2000000,
		},
	},
	paths: {
  	artifacts: "./build",  // Ensure this is set to "./build"
	},
};
const {Web3} = require('web3');
const LandRegistry = require('../build/contracts/LandRegistry.sol/LandRegistry.json');
const TransferLandOwnership = require('../build/contracts/TransferLandOwnership.sol/TransferLandOwnership.json');

// Replace with your actual private key (keep it secret)
const privateKey = '0xea165239debcf3277227bb4471ce148bcec95946fefa99e5102661920ca344c0';

const deploy = async () => {
  try {
    // Initialize Web3 with Infura
    const web3 = new Web3('https://sepolia.infura.io/v3/13f9ae50695d453aa99b3329d0ad556e');

    // Use the private key to create an account object
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);
    const deployerAddress = account.address;

		console.log("Deploying from account:", deployerAddress);
		
		// Get the current gas price from the network
    const gasPrice = await web3.eth.getGasPrice();
    console.log("Current gas price:", gasPrice);

    // Initialize contracts
    const landRegistry = new web3.eth.Contract(LandRegistry.abi);
    const transferLandOwnership = new web3.eth.Contract(TransferLandOwnership.abi);

    // Deploy LandRegistry contract
    const landRegistryDeployed = await landRegistry.deploy({ 
      data: LandRegistry.bytecode 
    }).send({ 
      from: deployerAddress, 
      gas: 5000000,  // Set a gas limit
      gasPrice: '20000000000'  // Set a gas price
    });
    console.log("LandRegistry deployed at:", landRegistryDeployed.options.address);

    // Deploy TransferLandOwnership contract
    const transferLandDeployed = await transferLandOwnership.deploy({ 
      data: TransferLandOwnership.bytecode 
    }).send({ 
      from: deployerAddress, 
      gas: 5000000,  // Set a gas limit
      gasPrice: '20000000000'  // Set a gas price
    });
    console.log("TransferLandOwnership deployed at:", transferLandDeployed.options.address);

  } catch (error) {
    console.error("Deployment failed:", error);
  }
};

deploy();

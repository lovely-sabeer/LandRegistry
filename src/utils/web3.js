import {Web3} from 'web3';

let web3;

if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // Prompt user to connect their wallet
} else if (window.web3) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    console.log("Non-Ethereum browser detected. You should consider trying MetaMask!");
}



// const connectToMetaMask = async () => {
//   try {
//     const accounts = await Web3.enable();
//     // Use the accounts
//     console.log("Connected accounts:", accounts);
//   } catch (error) {
//     console.error("Failed to connect to MetaMask:", error);
//   }
// };

// connectToMetaMask();



export default web3;

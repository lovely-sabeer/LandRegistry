import React, { useState } from 'react';
import web3 from '../utils/web3';  // Assumes web3 is correctly set up and configured here
import LandRegistry from '../contracts/LandRegistry.json';

const RegisterLand = () => {
  const [ownerAddress, setOwnerAddress] = useState('');
  const [landDetails, setLandDetails] = useState('');
  const [connectedAccount, setConnectedAccount] = useState(null);

  // Connect to MetaMask
  async function connectWallet() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        setConnectedAccount(accounts[0]);
        console.log("Wallet connected:", accounts[0]);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask not found. Please install it.");
    }
  }

  const registerLand = async () => {
    if (!connectedAccount) {
      alert("Please connect to MetaMask first.");
      return;
    }

    const contract = new web3.eth.Contract(LandRegistry.abi, "0xA54Bda6352BA8496f078D5d5dd00ed7b0C1a7562");

    try {
    await contract.methods.registerLand(ownerAddress, landDetails).send({
      from: connectedAccount,
      gasPrice: web3.utils.toWei("10", "gwei")  // Set gas price higher than the default
    });
    alert("Land registered successfully!");
  } catch (error) {
    console.error("Error registering land:", error);
    alert("Failed to register land.");
  }
  };

  return (
    <div className='w-full flex flex-col items-center'>
      <button  className=' self-end flex justify-end border rounded-md p-2 m-8 text-white bg-green-600' onClick={connectWallet}>Connect MetaMask</button>
      {connectedAccount && <p>Connected Account: {connectedAccount}</p>}

			<h1 className='text-center font-serif font-bold text-4xl'>Register Land</h1>
			<div className='m-5 border rounded-lg p-5 flex flex-col gap-5  ' >
				<div className='flex justify-between gap-5'>
					<label className='text-base font-bold'>Land Owner ID: </label>
		      <input
		        type="text"
		        value={ownerAddress}
		        onChange={(e) => setOwnerAddress(e.target.value)}
							placeholder="Owner ID"
							className='border-b border-black  p-1 '
		      />
				</div>
				<div className='flex justify-between gap-5'>
					<label className='text-base font-bold'>Location : </label>
					<input
	        type="text"
	        value={Location}
	        onChange={(e) => setLandDetails(e.target.value)}
	        placeholder="Land Details"
					className='border-b border-black  p-1 '
		      />
				</div>
				<div className='flex justify-between gap-5'>
					<label className='text-base font-bold'>Area of the Land : </label>
					<input
	        type="text"
	        value={landDetails}
	        onChange={(e) => setLandDetails(e.target.value)}
	        placeholder="Area in Cent"
					className='border-b border-black  p-1 '
		      />
				</div>
			</div>
      <button className='text-base font-bold text-white bg-green-600 border rounded-lg py-2 px-8' onClick={registerLand}>Register</button>
			
      
    </div>
  );
};

export default RegisterLand;

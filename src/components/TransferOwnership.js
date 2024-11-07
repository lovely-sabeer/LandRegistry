import React, { useState } from 'react';
import web3 from '../utils/web3';
import TransferLandOwnership from '../contracts/TransferLandOwnership.json';

const TransferOwnership = () => {
  const [landId, setLandId] = useState('');
  const [newOwner, setNewOwner] = useState('');

  const transferOwnership = async () => {
    const contract = new web3.eth.Contract(TransferLandOwnership.abi, "0x6317F2C56487C458F7A13Ad0AF20C036A5877829");
    const accounts = await web3.eth.getAccounts();
    
    await contract.methods.transferOwnership(landId, newOwner).send({ from: accounts[0] });
  };

  return (
		<div className='w-full flex flex-col items-center'>
			      <button  className=' self-end flex justify-end border rounded-md p-2 m-8 text-white bg-green-600' >Connect MetaMask</button>

			<h1 className='text-center font-serif font-bold text-4xl'>Transfer Ownership</h1>
			<div className='m-5 border rounded-lg p-5 flex flex-col gap-5  '>
				<div className='flex justify-between gap-5'>
					<label className='text-base font-bold'>Land ID : </label>
					<input
		        type="text"
		        value={landId}
		        onChange={(e) => setLandId(e.target.value)}
		        placeholder="Land ID"
						className='border-b border-black  p-1 '
		      />
				</div>
				<div className='flex justify-between gap-5'>
					<label className='text-base font-bold'>New Owner ID : </label>
					<input
		        type="text"
		        value={newOwner}
		        onChange={(e) => setNewOwner(e.target.value)}
		        placeholder="New Owner ID"
						className='border-b border-black  p-1 '
					/>
				</div>
				<div className='flex justify-between gap-5'>
					<label className='text-base font-bold'>Amount : </label>
					<input
		        type="text"
		        value={newOwner}
		        onChange={(e) => setNewOwner(e.target.value)}
		        placeholder="Amount "
						className='border-b border-black  p-1 '
					/>
				</div>
			</div>      
      <button className='text-base font-bold text-white bg-green-600 border rounded-lg py-2 px-8' onClick={transferOwnership}>Transfer</button>
    </div>
  );
};

export default TransferOwnership;

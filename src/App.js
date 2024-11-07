import React from 'react';
import RegisterLand from './components/RegisterLand';
import TransferOwnership from './components/TransferOwnership';

function App() {
  return (
    <div>
      <h1 className='text-center font-serif font-bold text-4xl'>Land Registry DApp</h1>
			
      {/* <RegisterLand /> */}
      <TransferOwnership />
    </div>
  );
}

export default App;

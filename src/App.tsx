import React from "react";



function App() {
  return (
    <div className='flex flex-row w-full h-full p-5 items-start bg-blue-400'>
      <div className='bg-gray-200 w-80 m-5 p-2 flex-grow'>
        <div className='bg-white cursor-pointer mb-2 py-2 px-4 max-w-xs rounded shadow-md'>
          <h1 className='p-3 text-xl font-bold font-serif tracking-wider text-center'>
            Hello World
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;

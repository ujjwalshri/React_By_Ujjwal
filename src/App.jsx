import { useState } from 'react';

function App() {
  const [color, setcolor] = useState('gray');

  return (
    <>
      <div className='w-full h-screen duration-200 flex flex-wrap justify-center'
      style={{backgroundColor: color}}
      >
      <div className='flex flex-wrap justify-center h-12 w-3/4 bg-black mt-2 rounded-xl shadow-xl'>
        <div className='flex flex-wrap p-1'>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-red-500 h-8 w-10 p-1'
            onClick={() => setcolor('red')}
          >
                    </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-gray-500 h-8 w-10 p-1'
            onClick={() => setcolor('gray')}
          >
                     </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-blue-300 h-8 w-10 p-1'
            onClick={() => setcolor('aqua')}
          >
                     </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-lime-500 h-8 w-10 p-1'
            onClick={() => setcolor('lime')}
          >
                     </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-orange-500 h-8 w-10 p-1'
            onClick={() => setcolor('orange')}
          >
            
          </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-teal-500 h-8 w-10 p-1'
            onClick={() => setcolor('teal')}
          >
                    </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-white h-8 w-10 p-1'
            onClick={() => setcolor('white')}
          >
                    </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-blue-500 h-8 w-10 p-1'
            onClick={() => setcolor('blue')}
          >
                     </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-green-500 h-8 w-10 p-1'
            onClick={() => setcolor('green')}
          >
                      </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-yellow-500 h-8 w-10 p-1'
            onClick={() => setcolor('yellow')}
          >
            
          </button>
          <button
            className='rounded-3xl m-1  shadow-lg text-xs cursor-pointer bg-pink-500 h-8 w-10 p-1'
            onClick={() => setcolor('pink')}
          >
                     </button>
        </div>
      </div>
      <div className='text-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-300 p-6 w-full'><h1>Color changer</h1></div>
      </div>

     
    </>
  );
}

export default App;

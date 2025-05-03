import React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white text-center">
      <div>
        <h2 className="text-4xl font-bold mb-8">Counter</h2>

        <h1 className="text-[6rem] font-bold transition-transform duration-300 transform hover:scale-110">
          {count}
        </h1>

        <div className="w-[40rem] flex justify-around mt-20">
          <button
            onClick={() => setCount(count + 1)}
            className="px-8 py-4 rounded-full text-4xl bg-[#141517] text-white cursor-pointer transition-all duration-300 transform hover:bg-purple-600 hover:scale-110 active:scale-95"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-8 py-4 rounded-full text-4xl bg-[#141517] text-white cursor-pointer transition-all duration-300 transform hover:bg-pink-600 hover:scale-110 active:scale-95"
          >
            –
          </button>
        </div>
      </div>
    </div>
  );
};

export default Count;

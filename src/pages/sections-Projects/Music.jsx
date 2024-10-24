import React from 'react';

function Music({ setCurrentPage1}) {
  return (
    <div className="overflow-hidden">
      <p className="flex justify-center text-white">Music section</p>
      <button
        className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2 mt-4"
        type="button"
        onClick={() => setCurrentPage1('selection')}
      >
        Go back to Selection page
      </button>
    </div>
  );
}

export default Music;
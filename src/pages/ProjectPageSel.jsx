import React from 'react';

function ProjectPageSel({ setCurrentPage }) {
    return (
      <div className="flex justify-center flex-col h-screen p-20">
        <div className="grid grid-cols-4 gap-4 h-full">
          <div className="bg-mainColor30 opacity-20"></div>
          <div className="bg-mainColor30 opacity-20"></div>
          <div className="bg-mainColor30 opacity-20"></div>
          <div className="bg-mainColor30 opacity-20"></div>
        </div>
        <button
          className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2 mt-4"
          type="button"
          onClick={() => setCurrentPage('main')}>
          Go back to Main Page
        </button>
      </div>
    );
  }

export default ProjectPageSel;

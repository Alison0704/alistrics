import React from 'react';

function ProjectPageSel({ setCurrentPage }) {
    return (
      <div>
        <p className="text-orange-500"> Projects</p>
        <button
          className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2 mt-4"
          type="button"
          onClick={() => setCurrentPage('main')}
        >
          Main Page
        </button>
      </div>
    );
  }

export default ProjectPageSel;

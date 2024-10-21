import React from 'react';
import ProjectPageSelBox from './sections-Projects/ProjectPageSelBox';

function ProjectPageSel({ setCurrentPage }) {
    return (
      <div className="flex justify-center flex-col h-screen p-20">
        <div className="grid grid-cols-4 gap-4 h-full">          <ProjectPageSelBox callToAction={"View Hardware Projects"}/>
          <ProjectPageSelBox callToAction={"View Software Projects"} />
          <ProjectPageSelBox callToAction={"View Art and Design Portfolio"}/>
          <ProjectPageSelBox callToAction={"View Music Portfolio"}/>
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

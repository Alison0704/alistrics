import React from 'react';
import ProjectPageSelBox from './ProjectPageSelBox';
import hardImage from './assets/Test.png';

function MainProjectsSel({ setCurrentPage1, setCurrentPage }) {
  return (
    <div className="flex justify-center flex-col h-screen p-20">
      <div className="grid grid-cols-4 gap-4 h-full">
        <ProjectPageSelBox callToAction={"Hardware Projects"} image={hardImage} setCurrentPage1={setCurrentPage1} />
        <ProjectPageSelBox callToAction={"Software Projects"} image={hardImage} setCurrentPage1={setCurrentPage1} />
        <ProjectPageSelBox callToAction={"Character Portfolio"} image={hardImage} setCurrentPage1={setCurrentPage1} />
        <ProjectPageSelBox callToAction={"Music Portfolio"} image={hardImage} setCurrentPage1={setCurrentPage1} />
      </div>
      <button
        className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2 mt-4"
        type="button"
        onClick={() => setCurrentPage('main')}
      >
        Go back to Main Page
      </button>
    </div>
  );
}

export default MainProjectsSel;
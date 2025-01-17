import React, { useState } from 'react';
import MainProjectsSel from './sections-Projects/MainProjectsSel';
import ProjectPage from './sections-Projects/ProjectPage';


function ProjectPageSel({ setCurrentPage }) {
  const [currentPageProject, setCurrentPageProject] = useState('selection');

  function renderPage() {
    if (currentPageProject === 'selection') {
      return <MainProjectsSel setCurrentPageProject={setCurrentPageProject} setCurrentPage={setCurrentPage} />;
    } else if (currentPageProject === 'ProjectPage') {
      return <ProjectPage setCurrentPageProject={setCurrentPageProject} />;
  }
  }
  return (
    <>
      {renderPage()}
    </>
  );
}

export default ProjectPageSel;
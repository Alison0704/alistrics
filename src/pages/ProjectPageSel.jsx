import React, { useState } from 'react';
import MainProjectsSel from './sections-Projects/MainProjectsSel';
import Hardware from './sections-Projects/Hardware';

function ProjectPageSel({ setCurrentPage }) {
  const [currentPage1, setCurrentPage1] = useState('selection');

  function renderPage() {
    if (currentPage1 === 'selection') {
      return <MainProjectsSel setCurrentPage1={setCurrentPage1} setCurrentPage={setCurrentPage} />;
    } else if (currentPage1 === 'hardware') {
      return <Hardware setCurrentPage1={setCurrentPage1} />;
    }
  }

  return (
    <>
      {renderPage()}
    </>
  );
}

export default ProjectPageSel;
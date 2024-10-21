import React from 'react';
import MainProjectsSel from './sections-Projects/subSections/MainProjectsSel.jsx';
import Hardware from './sections-Projects/subSections/hardware';


function ProjectPageSel({ setCurrentPage1 }) {
  const [currentPage, setCurrentPage] = useState('selection');
  function renderPage() {
    if (currentPage === 'selection') {
      return <MainProjectsSel setCurrentPage={setCurrentPage1} />;
    } else if (currentPage === 'hardware') {
      return <Hardware setCurrentPage={setCurrentPage1} />;
    }
  }
  return (
    <>
      {renderPage()}
    </>
  );
  }

export default ProjectPageSel;

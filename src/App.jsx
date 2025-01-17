import React, { useState, useEffect } from 'react';
import Background from './pages/Background.jsx';
import MainPage from './pages/MainPage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ProjectPageSel from './pages/ProjectPageSel.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('main');
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function renderPage() {
    if (currentPage === 'main') {
      return <MainPage setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'about') {
      return <AboutMe setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'projects') {
      return <ProjectPageSel setCurrentPage={setCurrentPage} />;
    }
  }

  return (
    <>
      <Background />
      {isScreenSmall ? (
        <>
        <div className="show-message">
          This website cannot be viewed under 1024 px width.
        </div>
          <div className="hidden-content">
          {renderPage()}
        </div>
          </>
      ):(
        renderPage()
      )}
    </>
  );
}

export default App;
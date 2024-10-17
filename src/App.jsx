import React, { useState } from 'react';
import Background from './background/Background.jsx';
import MainPage from './pages/MainPage.jsx';
import SideBar from './pages/sections-MainPage/Sidebar/SideBar.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ProjectPageSel from './pages/ProjectPageSel.jsx';


function App() {
  const [currentPage, setCurrentPage] = useState('main');

  function renderPage() {
    if (currentPage === 'main') {
      return <MainPage setCurrentPage={setCurrentPage} />;
    } else if (currentPage === 'about') {
      return <AboutMe setCurrentPage={setCurrentPage} />;
    }else if (currentPage === 'projects'){
      return <ProjectPageSel setCurrentPage={setCurrentPage} />;
    }

  }

  return (
    <>
      <Background />
      {renderPage()}
    </>
  );
}
export default App;

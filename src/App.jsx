import React, { useState } from 'react';
import Background from './Background';
import MainPage from './MainPage.jsx';
import ProjectPage from './ProjectPage.jsx';
import SideBar from './components/SideBar.jsx';

function App() {
  const[currentPage, setCurrentPage] = useState('main');

  function renderPage(){
    if (currentPage === 'main') {
      return <><MainPage /></> ;
    } else if (currentPage === 'project') {
      return <ProjectPage />;
    }
  };
  return (
    <div>
        <button onClick={() => setCurrentPage('main')}>Main Page</button>
        <button onClick={() => setCurrentPage('project')}>Project Page</button>
      {renderPage()}
      <Background/>
      <SideBar/>
    </div>
  );
}
export default App

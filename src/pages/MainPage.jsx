import React from 'react';
import Experiences from './sections-MainPage/Experience/Experience.jsx';
import Contact from './sections-MainPage/Contact.jsx';
import SideBar from './sections-MainPage/Sidebar/SideBar.jsx';
import MyHome from './sections-MainPage/myHome.jsx';
import Skills from './sections-MainPage/Skills/Skills.jsx';
import Projects from './sections-MainPage/Projects/Projects.jsx';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function MainPage({ setCurrentPage }){
    return (
        <>
        <SideBar/>
      <AnchorLink id="home">
        <MyHome setCurrentPage={setCurrentPage}/>
      </AnchorLink>

      <AnchorLink id="skills">
        <Skills/>
      </AnchorLink>
      
      <Projects setCurrentPage={setCurrentPage}/>

      <AnchorLink id="experiences">
        <Experiences/>
      </AnchorLink>

      <AnchorLink>
        <Contact/>
      </AnchorLink>
        </>
    );
}

export default MainPage;
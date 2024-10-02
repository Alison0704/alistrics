import AnchorLink from "react-anchor-link-smooth-scroll";

import MyHome from './components/Sections-MainPage/myHome.jsx';
import Skills from './components/Sections-MainPage/Skills/Skills.jsx';
import Experiences from './components/Sections-MainPage/Experience/Experience.jsx';
import Contact from './components/Sections-MainPage/Contact.jsx';

function MainPage(){
    return (
        <>
      <AnchorLink id="home">
        <MyHome/>
      </AnchorLink>

      <AnchorLink id="skills">
        <Skills setCurrentPage={'project'}/>
      </AnchorLink>

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
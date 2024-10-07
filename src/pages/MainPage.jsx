import AnchorLink from "react-anchor-link-smooth-scroll";

import MyHome from './sections-MainPage/myHome.jsx';
import Skills from './sections-MainPage/Skills/Skills.jsx';
import Experiences from './sections-MainPage/Experience/Experience.jsx';
import Contact from './sections-MainPage/Contact.jsx';

function MainPage(){
    return (
        <>
      <AnchorLink id="home">
        <MyHome/>
      </AnchorLink>

      <AnchorLink id="skills">
        <Skills/>
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
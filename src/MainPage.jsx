import AnchorLink from "react-anchor-link-smooth-scroll";

import MyHome from './components/Sections/myHome.jsx';
import Skills from './components/Sections/Skills/Skills.jsx';
import Experiences from './components/Sections/Experience/Experience.jsx';
import Contact from './components/Sections/Contact.jsx';

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
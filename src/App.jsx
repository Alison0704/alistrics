
import AnchorLink from "react-anchor-link-smooth-scroll";

import SideBar from './components/SideBar';
import MyHome from './components/Sections/MyHome';
import Skills from './components/Sections/Skills/Skills';
import Projects from './components/Sections/Projects/Projects';
import Experiences from './components/Sections/Experience/Experience';
import Contact from './components/Sections/Contact';

import FollowerCat from './components/FollowerCat';
function App() {
  return (
    <>
      <FollowerCat/>
      <SideBar/>


      <AnchorLink id="home">
        <MyHome/>
      </AnchorLink>

      <AnchorLink id="skills">
        <Skills/>
        <Projects/>
      </AnchorLink>

      <AnchorLink id="experiences">
        <Experiences/>
      </AnchorLink>

      <Contact/>
    </>
  );
};
export default App

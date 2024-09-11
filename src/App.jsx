import AnchorLink from "react-anchor-link-smooth-scroll";

import SideBar from './components/SideBar';
// import MyHome from './components/Sections/MyHome';
import Skills from './components/Sections/Skills/Skills';
import Experiences from './components/Sections/Experience/Experience';
import Contact from './components/Sections/Contact';

import FollowerCat from './components/FollowerCat';
function App() {
  return (
    <>
      <FollowerCat/>
      <SideBar/>

      {/* <AnchorLink id="home">
        <MyHome/>
      </AnchorLink> */}

      <AnchorLink id="skills">
        <Skills/>
        
      </AnchorLink>

      <AnchorLink id="experiences">
        <Experiences/>
      </AnchorLink>

      <Contact/>
    </>
  );
};
export default App

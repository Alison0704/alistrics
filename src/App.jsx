import { useDebugValue, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Section from './components/Section';
import Home from './components/Sections/Home'

function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-row">
      <Section children={Home}/>
      </div>
    </div>
  );
};
export default App

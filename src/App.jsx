import { useDebugValue, useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Section from './components/Section';
function App() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-row">
      <Section/>
      </div>
    </div>
  );
};
export default App

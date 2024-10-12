import React from 'react';

function AboutMe({ setCurrentPage }) {
  return (
    <div>
      <p className="text-orange-500">About Me</p>
      <p className="text-orange-500">My name is Alison Emilien and I am a web developer.</p>
      <button
        className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2 mt-4"
        type="button"
        onClick={() => setCurrentPage('main')}
      >
        Main Page
      </button>
    </div>
  );
}

export default AboutMe;
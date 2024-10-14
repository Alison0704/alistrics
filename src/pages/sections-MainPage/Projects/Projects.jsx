import React from 'react';

function Projects({ setCurrentPage }) {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col p-16 gap-6 bg-mainColor30 bg-opacity-5 rounded-3xl w-full">
        <p className="text-mainColor30">
          Here, you'll find a collection of my personal and professional endeavors. From passion projects to collaborative work, each project represents a unique learning experience and a chance to explore new ideas.
        </p>
        <button
          className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl p-2"
          type="button"
          onClick={() => setCurrentPage('project')}>
          Project Page
        </button>
      </div>
    </section>
  );
}

export default Projects;
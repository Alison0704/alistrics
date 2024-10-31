import React from 'react';

function Projects({ setCurrentPage }) {
  return (
    <section className="flex flex-col justify-center">
      <div className="flex flex-col p-16 gap-6 bg-mainColor30 bg-opacity-5 rounded-3xl w-full">
        <p className="text-mainColor30">
          Here, you'll find a collection of my personal and professional endeavors. From passion projects to collaborative work, each project represents a unique learning experience and a chance to explore new ideas.
        </p>
        <div onClick={() => setCurrentPage('projects')} className="buttons flex justify-center w-full mt-4 cursor-pointer p-4 border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl">View Projects
      </div>
      </div>
    </section>
  );
}

export default Projects;
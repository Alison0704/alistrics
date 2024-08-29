function Projects() {
  return (
    // TODO 
    <section className="flex flex-row p-6 gap-4 content-center m-0 h-fit">
        <p className="text-mainColor30 text-5xl font-bold flex justify-center">Projects</p>
        <div className="flex flex-row p-5 gap-6 bg-mainColor30 bg-opacity-15 rounded-3xl h-fit w-full">   
             <p className="text-mainColor30 text-left w-[80%] top-0">
                Here, you'll find a collection of my personal and professional endeavors. From passion projects to collaborative work, each project represents a unique learning experience and a chance to explore new ideas.
              </p>
             <button className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl p-2">Projects Page</button>
        </div>
    </section>
  );
}
export default Projects;
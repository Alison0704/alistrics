function Projects() {
  return (
    <section className="flex flex-row relative w-fit h-fit p-6 gap-4 content-center">
        <p className="text-mainColor30 content-center text-7xl">Projects</p>
        <div className="flex flex-row p-16 gap-6 bg-mainColor30 bg-opacity-15 rounded-3xl w-full">   
             <p className="text-mainColor30">Here, you'll find a collection of my personal and professional endeavors. From passion projects to collaborative work, each project represents a unique learning experience and a chance to explore new ideas.</p>
             <button className="bg-transparent border-2 border-mainColor10 text-mainColor10 rounded-xl p-2">Projects Page</button>
        </div>
    </section>
  );
}
export default Projects;
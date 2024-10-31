function MyHome({ setCurrentPage }){
    return (
        <section className="flex flex-col justify-center m-0 gap-10 h-screen">
            <p className="text-mainColor10 font-semibold text-8xl">Hey There,</p>
                <p className="text-mainColor30 font-semibold text-7xl">I' m M.A. Alison Emilien</p>
                <div className="flex flex-col gap-y-4">
                    <p className="text-mainColor30 mt-7">Currently an undergraduate in University of Ottawa, tackling the program <span className="text-mainColor10">BASc Electrical Engineering and BSc Computing Technology.</span></p>
                    <p className="text-mainColor30 mt-4 text-5xl">Welcome to my Portfolio website</p>
                    <p className="text-mainColor30 mt-4">Currently looking for  <span className="text-mainColor10">Hardware internships for Summer 2025</span></p>
                    <div className="mt-4"><span  onClick={() => setCurrentPage('about')} className="buttons p-4 cursor-pointer border-2 border-mainColor10 text-mainColor10 rounded-xl text-xl">About me</span>
                    </div>
                </div>
               
        </section>
    );
}

export default MyHome;
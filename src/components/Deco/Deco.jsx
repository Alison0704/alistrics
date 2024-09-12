function Deco(){
    return (
        <section className="flex justify-content">
            {/* Squares
            <div className=" h-2/5 aspect-[1.3/1] deco-rectangle absolute left-[45%] top-[10%]"/>
            <div className="h-1/2 aspect-[1.1/0.8] deco-rectangle absolute left-[57%] top-[28%]"/> */}

            {/*Text Area */}
            <div className="absolute top-[50%]">
                <p className="text-mainColor10 font-semibold text-7xl">Hey There,</p>
                <p className="text-mainColor30 font-semibold text-7xl">I' m M.A. Alison</p>
                <p className="text-mainColor30 font-semibold text-7xl">Emilien</p>
                <div className="flex flex-col gap-y-4 cursor-default">
                    <p className="text-mainColor30 mt-7">Currently an undergraduate in University of Ottawa, tackling the program <span className="text-mainColor10">BASc Electrical Engineering and BSc Computing Technology.</span></p>
                    <p className="text-mainColor30 mt-4 text-3xl">Welcome to my Portfolio website</p>
                    <p className="text-mainColor30 mt-4">Currently looking for  <span className="text-mainColor10">Hardware internships for Summer 2025</span></p>

                </div>
            </div>
            
        </section>

    );
}

export default Deco;
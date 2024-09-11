function Deco(){
    return (
        <div className="h-[80vh] w-full">
            {/* Squares */}
            <div className="h-2/5 aspect-[1.5/1] deco-rectangle absolute left-[40%] top-[10%]"/>
            <div className="h-1/2 aspect-[1.5/1] deco-rectangle absolute left-[50%] top-[25%]"/>

            {/*Text Area */}
            <div className="absolute top-[50%]">
                <p className="text-mainColor10 font-semibold text-7xl">Hey There</p>
                <p className="text-mainColor30 text-7xl">I' m M.A. Alison</p>
                <p className="text-mainColor30 text-7xl">Emilien</p>
                <div className="flex flex-col gap-y-4 cursor-default">
                    <p className="text-mainColor30 mt-4">Currently an undergraduate in University of Ottawa, tackling the program <span className="text-mainColor10">BASc Electrical Engineering and BSc Computing Technology.</span></p>
                    <p className="text-mainColor30 mt-4">Welcome to my Portfolio website</p>
                    <p className="text-mainColor30 mt-4">Currently looking for Hardware internships for Summer 2025</p>

                </div>
            </div>
            
        </div>

    );
}

export default Deco;
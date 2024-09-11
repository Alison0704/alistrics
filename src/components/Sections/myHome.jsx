{/*import Deco from "./Images/DecoIntro.png";*/}

import Deco from '../Deco/Deco';

function MyHome(){
    return (
        <section className="flex relative m-0">
            <Deco/>
            <div className="absolute left-[10%] top-[50%]">
                <p className="text-mainColor10 font-semibold text-7xl">Hey There</p>
                <p className="text-mainColor30 text-7xl">I' m M.A. Alison</p>
                <p className="text-mainColor30 text-7xl">Emilien</p>
            </div>
           <div className="flex flex-col gap-y-4 cursor-default">
           <p className="text-mainColor30">Currently an undergraduate in University of Ottawa, tackling the program <span className="text-mainColor10">BASc Electrical Engineering and BSc Computing Technology.</span></p>
           </div>
        </section>
    );
}

export default MyHome;
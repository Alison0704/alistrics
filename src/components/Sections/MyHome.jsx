{/*import Deco from "./Images/DecoIntro.png";*/}

import Deco from '../../components/Deco';

function MyHome(){
    return (
home
        <section className="flex relative m-0">
           <img src={Deco} alt="" />
 main
           <div className="flex flex-col gap-y-4 cursor-default">
           <p className="text-mainColor30">Currently an undergraduate in University of Ottawa, tackling the program <span className="text-mainColor10">BASc Electrical Engineering and BSc Computing Technology.</span></p>
           <p className="text-mainColor30 hover:font-extrabold text-2xl">Welcome to my Portfolio website</p>
           <p className="text-mainColor30">Currently looking for <span className="text-mainColor10">Hardware internships for Summer 2025</span></p>
           </div>
        </section>
    );
}

export default MyHome;
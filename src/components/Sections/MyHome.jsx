{/*import Deco from "./Images/DecoIntro.png";*/}

import Deco from '../../components/Deco';

function MyHome(){
    return (
        <section className="flex m-0 h-[100vh]">
           {/*<img src={Deco} alt="" className="h-[80vh] w-[80%] self-center"/>*/}
           <Deco/>
           <div className="flex flex-col gap-y-4 cursor-default">
           <p className="text-mainColor30">Currently an undergraduate in University of Ottawa, tackling the program <span className="text-mainColor10">BASc Electrical Engineering and BSc Computing Technology.</span></p>
           <p className="text-mainColor30 hover:font-extrabold text-2xl">Welcome to my Portfolio website</p>
           <p className="text-mainColor30">Currently looking for <span className="text-mainColor10">Hardware internships for Summer 2025</span></p>
           </div>
        </section>
    );
}

export default MyHome;
import SideBarIcon from "./SideBarIcon";
import about from "./assets/icons/About.svg";
import home from "./assets/icons/House.svg";
import skills from "./assets/icons/Skills.svg";
import exp from "./assets/icons/Experience.svg";
import mail from "./assets/icons/Contact.svg";

function SideBar(){ 
    return (
        <div className="fixed top-0 left-0 h-screen m-0 p-0 justify-between flex flex-col bg-mainColor60 shadow-lg border-r-2 border-mainColor30">
                <div>
                    {/*About*/}
                    <SideBarIcon icon={about} title={"About me"}/>
                    {/* TODO write about me title comment */}
                </div>
                <div className="flex">
                    {/* Home*/}
                    <li className="group/item flex flex-col gap-5">
                    <SideBarIcon icon={home} title={"Home"}/>
                    {/* Skills and Knowledge */}
                    <SideBarIcon icon={skills} title={"Skills"}/>
                    {/* Experiences */}
                    <SideBarIcon icon={exp} title={"Experiences"}/>
                    {/* Contact */}
                    <SideBarIcon icon={mail} title={"Email me"}/>
                    </li>
                </div>
            </div>
    );
};  
export default SideBar;
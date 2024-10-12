import SideBarIcon from "./SideBarIcon";
import home from "./icons/House.svg";
import skills from "./icons/Skills.svg";
import exp from "./icons/Experience.svg";
import mail from "./icons/Contact.svg";

function SideBar(){ 
    return (
        <div className="fixed top-0 left-0 h-screen m-0 p-0 justify-between flex flex-col bg-mainColor60 shadow-lg border-r-2 border-mainColor30">
            <div>
              
            </div>
            <div className="flex">
                {/* Home*/}
                <li className="group/item flex flex-col gap-5">
                    <SideBarIcon icon={home} anchorlink={"#home"} title={"Home"} />
                    {/* Skills and Knowledge */}
                    <SideBarIcon icon={skills} anchorlink={"#skills"} title={"Skills"} />
                    {/* Experiences */}
                    <SideBarIcon icon={exp} anchorlink={"#experiences"} title={"Experiences"} />
                    {/* Contact */}
                        <SideBarIcon icon={mail}title={"Email me"} link={"mailto:aemil072@uottawa.ca"} />
                </li>
            </div>
        </div>
    );
};  
export default SideBar;
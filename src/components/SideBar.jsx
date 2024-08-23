import SideBarIcon from "./SideBarIcon";
import img0 from "./assets/icons/react.svg";
import img1 from "./assets/icons/House.svg";
import img2 from "./assets/icons/Skills.svg";
import img3 from "./assets/icons/Project.svg";
import img4 from "./assets/icons/Experience.svg";
import img5 from "./assets/icons/Contact.svg";

const SideBar = () => { 
    return (
        <div className="fixed top-0 left-0 h-screen m-0 p-0 justify-between flex flex-col bg-primary text-mytext shadow-lg">
                <div>
                    {/* TODO Add Logo Icon */}
                </div>
                <div className="flex">
                    {/* Home and About*/}
                    <li className="group/item flex flex-col gap-5">
                    <SideBarIcon icon={img1} title={"Home"}/>
                    {/* Skills and Knowledge */}
                    <SideBarIcon icon={img2} title={"Skills"}/>
                    {/* Projects */}
                    <SideBarIcon icon={img3} title={"Projects"}/>
                    {/* Experiences */}
                    <SideBarIcon icon={img4} title={"Experiences"}/>
                    {/* Contact */}
                    <SideBarIcon icon={img5} title={"Contact"}/>
                    </li>
                   
                </div>
            </div>
    );
};  
export default SideBar;
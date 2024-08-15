import SideBarIcon from "./SideBarIcon";
import img0 from "./assets/react.svg";
import img1 from "./assets/House.svg";
import img2 from "./assets/Skills.svg";
import img3 from "./assets/Project.svg";
import img4 from "./assets/Experience.svg";
import img5 from "./assets/Contact.svg";


const SideBar = () => { 
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 justify-between flex flex-col bg-primary text-mytext shadow-lg">
                <div>
                <SideBarIcon icon={img0} hyperlink="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>
                </div>
                <div className="flex flex-col gap-5">
                    {/* Home and About*/}
                    <SideBarIcon icon={img1} hyperlink="https://www.youtube.com/watch?v=xvFZjo5PgG0" title="Home"/>
                    {/* Skills and Knowledge */}
                    <SideBarIcon icon={img2} hyperlink="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>
                    {/* Projects */}
                    <SideBarIcon icon={img3} hyperlink="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>
                    {/* Experiences */}
                    <SideBarIcon icon={img4} hyperlink="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>
                    {/* Contact */}
                    <SideBarIcon icon={img5} hyperlink="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>
                </div>
            </div>
    );
};  
export default SideBar;
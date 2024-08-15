import SideBarIcon from "./SideBarIcon";
import img1 from "./assets/react.svg";


const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-mytext shadow-lg">
            {/* Home and About*/}
            <SideBarIcon icon={img1} hyperlink="https://www.youtube.com/watch?v=xvFZjo5PgG0"/>
            {/* Skills and Knowledge */}
            <i>B</i>
            {/* Projects */}
            <i>C</i>
            {/* Experiences */}
            <i>D</i>
            {/* Contact */}
            <i>E</i>
        </div>
    );
};  
export default SideBar;
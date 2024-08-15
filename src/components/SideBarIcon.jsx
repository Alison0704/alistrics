const SideBarIcon = ({ icon,hyperlink }) => {
  return (
    <div className="w-10 h-10 m-4"> 
        <a href={hyperlink}> 
            <img src={icon} alt="icon"/>
        </a>
    </div>
  );
};
export default SideBarIcon;
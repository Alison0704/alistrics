const SideBarIcon = ({ icon,hyperlink,title }) => {
  return (
    <div className="w-10 h-10 m-4" title={title}> 
        <a href={hyperlink}> 
            <img className="iconStyle" src={icon} alt="icon"/>
        </a>
    </div>
  );
};
export default SideBarIcon;
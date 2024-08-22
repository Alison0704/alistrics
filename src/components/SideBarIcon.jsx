const SideBarIcon = ({ icon,hyperlink,title }) => {
  return (
    <div className="w-12 h-12 m-4 cursor-pointer" title={title}> 
        <a href={hyperlink}> 
            <img src={icon} alt="icon"/>
          {/* TODO  Animation of title on hover*/}
        </a>
    </div>
  );
};
export default SideBarIcon;
import AnchorLink from "react-anchor-link-smooth-scroll";
function SideBarIcon({ icon,anchorlink,link,title}){
  return (
   
    <div className="relative group w-14 h-14 m-4 cursor-pointer flex flex-row" title={title}>
        <AnchorLink href={anchorlink}> 
        <img src={icon} alt="icon"/>
        </AnchorLink>
      <span className="absolute left-20 transform w-auto p-2 m-2 min-w-max rounded-xl shadow-md text-mainColor30 text-s font-bold transition-opacity duration-200 opacity-0 group-hover:opacity-100">
        {title}
      </span>
       
    </div>
   
  );
}
export default SideBarIcon;
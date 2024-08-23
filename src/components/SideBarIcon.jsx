function SideBarIcon({ icon,hyperlink,title }){
  return (
    <div className="relative group w-12 h-12 m-4 cursor-pointer flex flex-row" title={title}>
    <img src={icon} alt="icon"/>
    <a href={hyperlink}></a>
    <span className="absolute left-16 transform w-auto p-2 m-2 min-w-max rounded-xl shadow-md text-white bg-gray-900 text-s font-bold transition-opacity duration-200 opacity-0 group-hover:opacity-100">
      {title}
    </span>
  </div>
  );
};
export default SideBarIcon;
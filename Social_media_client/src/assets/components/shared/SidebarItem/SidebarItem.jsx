
import React from "react";
import { Link } from "react-router";


const SidebarItem = ({ icon, text,address }) => {
  return (
    <div className=" p-2 hover:bg-slate-800 rounded-lg cursor-pointer">
      <Link to={address} className="flex items-center gap-3">
      {icon}
      <span className="text-white">{text}</span>
      </Link>
    </div>
  );
};

export default SidebarItem;

import React from "react";
import {
  Home,
  Users,
  MessageCircle,
  Bell,
  Compass,
  Settings,
  LogOut,
} from "lucide-react";
import SidebarItem from "../SidebarItem/SidebarItem";

const LeftSidebar = () => {
  return (
    <div className="h-screen w-64 shadow-lg p-5 flex flex-col justify-between md:fixed md:left-0 md:top-0 -translate-x-full md:translate-x-0 transition-transform duration-300 ease-in-out ">
      {/* User Profile */}
      {/* <div className="flex items-center gap-3">
        <img
          src="https://via.placeholder.com/50"
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-semibold text-lg">John Doe</h2>
          <p className="text-sm text-gray-500">@johndoe</p>
        </div>
      </div> */}

      {/* Navigation Links */}
      <nav className="mt-8 space-y-4">
        <SidebarItem icon={<Home size={22} />} text="Home" />
        <SidebarItem icon={<Users size={22} />} text="Friends" />
        <SidebarItem icon={<MessageCircle size={22} />} address='/message' text="Messages" />
        <SidebarItem icon={<Bell size={22} />} text="Notifications" />
        <SidebarItem icon={<Compass size={22} />} text="Explore" />
        <SidebarItem icon={<Settings size={22} />} text="Settings" />
      </nav>

      {/* Logout */}
      <button className="flex items-center gap-3 text-red-500 hover:text-red-700 p-2 rounded-lg">
        <LogOut size={22} />
        <span>Logout</span>
      </button>
    </div>
  );
};

export default LeftSidebar;

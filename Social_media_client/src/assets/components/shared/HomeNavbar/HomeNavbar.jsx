import React from "react";
import { TvMinimalPlay, Users, House, User } from "lucide-react";
import { NavLink } from "react-router";


const HomeNavbar = () => {
  const links = (
    <>
      <li><NavLink to='/'><House></House></NavLink></li>
      <li><NavLink to='/friend'><Users></Users></NavLink></li>
      <li><NavLink to='/Watch'><TvMinimalPlay></TvMinimalPlay></NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm  w-full z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">FriendsHub</a>
      </div>
      <div className="navbar-center hidden lg:flex  lg:gap-5">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default HomeNavbar;

import { React } from "react";
import "./components.css";

import RankBar from "./RankBar";
import SearchIcon from "../Assets/Images/Nav-icons/search.png";
import DRFlag from "../Assets/Images/DR-Flag.png";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center sticky top-0 bg-backgroundColor z-10 border-b border-darkerGray px-4 shadow-md ">
      {/* Left side (Logo and Title) */}
      <div className="flex items-center gap-2 py-4 cursor-pointer w-1/3 lg:w-1/4 ">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img className="w-8 h-8 rounded-md shadow-sm" src={DRFlag} alt="DR Flag" />
            <h1 className="font-Inter font-extrabold text-lg md:text-xl text-white">
              Best Players Ever
            </h1>
          </div>
        </Link>
      </div>


      {/* Middle (RankBar) */}
      <div className="hidden md:flex flex-grow justify-center">
        <RankBar />
      </div>

      {/* Right side (Search Bar) */}
      <div className="flex w-1/3 md:w-1/4 items-center justify-end relative">
        <input
          className="bg-backgroundColor placeholder:text-sm placeholder:ml-4 w-full md:w-auto text-white border border-blue-600 rounded-md p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="Search for a Player"
        />
        <img
          src={SearchIcon}
          alt="search icon"
          className="absolute w-6 h-6 right-2"
        />
      </div>
      
    </nav>
  );
}

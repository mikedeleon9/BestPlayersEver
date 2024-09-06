import React from "react";
import "./components.css" 
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function Navbar(){
    return(
        <div className="w-full">
            <input className="border-none w-full rounded-3xl h-10 placeholder:pl-4" placeholder="Search for a Player"></input>
        </div>
    )
}
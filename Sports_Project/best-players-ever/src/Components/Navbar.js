import React from "react";
import "./components.css" 
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function Navbar(){
    return(
        <div className="w-full">
            <input className="w-full rounded-3xl" placeholder="Search for a Player"></input>
        </div>
    )
}
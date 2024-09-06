import React from "react"
import "./components.css" 
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";
import HomeIcon from "../Assets/Images/Nav-icons/home.png"
export default function Navbar({mainTeam}){

    const backgroundColorClass = teamBackgroundColors[mainTeam];
    const borderColorClass = teamBorderColors[mainTeam];
    return(
        <div className= {`border-2 ${borderColorClass} w-48 ${backgroundColorClass} h-96 flex align-center rounded-3xl p-5`}>
            <img className="w-4 h-4" src={HomeIcon} alt="home-icon"></img>
        </div>
    )
}
import React from "react"
import "./components.css" 
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";

export default function Navbar({mainTeam}){

    const backgroundColorClass = teamBackgroundColors[mainTeam];
    const borderColorClass = teamBorderColors[mainTeam];
    return(
        <div className= {`border-2 ${borderColorClass} w-32 ${backgroundColorClass} h-96 flex align-center`}>
            
        </div>
    )
}
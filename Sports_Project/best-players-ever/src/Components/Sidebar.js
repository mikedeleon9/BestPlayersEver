import React from "react"
import "./components.css" 
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";
import HomeIcon from "../Assets/Images/Nav-icons/home.png"


export default function Navbar({mainTeam}){

    const backgroundColorClass = teamBackgroundColors[mainTeam];
    const borderColorClass = teamBorderColors[mainTeam];
    return(
        <div className= {`bg-darkerGray w-48  h-96 flex  flex-col rounded-3xl p-5 mr-5`}>
            <div className="flex items-center gap-2 ">
                <img className="w-4 h-4" src={HomeIcon} alt="home-icon"></img>
                <p className="text-white">Home</p>
            </div>
        </div>
    )
}
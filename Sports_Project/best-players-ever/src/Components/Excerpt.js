import React from "react";
import "./components.css" 
import { teamBackgroundColors } from "../Assets/teamDetails";

export default function Excerpt({mainTeam, Excerpt}){

    const backgroundColor = teamBackgroundColors[mainTeam];
    return(
        <div className={`w-1/2 px-7 py-5 ${backgroundColor} rounded-3xl  text-white self-start gap-3`}>
                <p className="">{Excerpt}</p>

        </div>
    )
}
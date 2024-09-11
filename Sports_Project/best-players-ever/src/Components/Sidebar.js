import React from "react"
import "./components.css" 
import { teamBackgroundColors, teamBorderColors } from "../Assets/teamDetails";
import HomeIcon from "../Assets/Images/Nav-icons/home.png"
import DRFlag from "../Assets/Images/DR-Flag.png"

export default function Navbar({mainTeam}){

    const backgroundColorClass = teamBackgroundColors[mainTeam];
    const borderColorClass = teamBorderColors[mainTeam];
    return(
<<<<<<< HEAD
        
        <div className= {`bg-darkerGray w-48  h-96 flex  flex-col rounded-3xl p-5 fixed  mt-16`}>
=======
        <div className="sticky top-0"> 

        <div className="flex items-center gap-2 p-4 ">
      <img className="w-6 h-6" src={DRFlag} alt="DR Flag" />
     <h1 className="font-Inter font-extrabold text-lg  ">Best Players Ever</h1>
    </div> 
        <div className= {`bg-darkerGray w-52  h-96 flex flex-col rounded-3xl p-5 `}>
>>>>>>> 307de9695f56de377b82368ad7428b9c59423089
            
             

            <div className="flex items-center gap-2 ">
                <img className="w-4 h-4" src={HomeIcon} alt="home-icon"></img>
                <p className="text-white">Home</p>
            </div>
        </div>
        </div>
    )
}
import React from "react";
import "./components.css";
import { teamBackgroundColors, teamTextColors, teamAlternateColor, teamBorderColors } from "../Assets/teamDetails";


export default function PersonalDetails({details, position, accomplishments}){

  
  const {name, birthPlace, mainTeam, number, image} = details;
  const{allStar, hallOfFame, SilverSlugger, goldGlove, MVP, CyYoung, eraTitle, platinumGlove} = accomplishments;
  
  
  const backgroundColor = teamBackgroundColors[mainTeam] || "bg-gray-800";
  const bordercolors = teamBorderColors[mainTeam] || "bg-gray-800"

  const buttonStyling = "font-bold py-1 px-2 rounded-lg  text-center";

  

    return(
      <div className={` flex  ${backgroundColor} rounded-3xl pt-6 `}>
          <h1 className="text-xl text-white font-protest">#{number}</h1>
           
         
            <img className="max-h-48 min-w-52  object-cover " src={image}  alt={name} />
         

          <div className="w-full flex flex-col justify-end mb-2 ml-6 ">
        <p className="text-white text-4xl font-bold">{name}</p>
        <div className="flex items-center gap-4 my-2">
        <p className="text-white">{position === "Pitcher" ? `Starting Pitcher` : position}</p>
        <p className="text-white font-medium ">Born: {birthPlace}, DR</p>
        </div>
        <div className="flex gap-2 ">
          {hallOfFame && (
            <button className={`bg-amber-400 ${buttonStyling}`}>
              <span className="text-black text-sm">Hall Of Fame</span>
            </button>
          )}
          {allStar && (
            <button className={`bg-blue-400 ${buttonStyling}`}>
              <span className="text-white text-sm">{allStar}x All-Star</span>
            </button>
          )}
          {MVP && (
            <button className={`bg-blue-400 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${MVP === 1? "MVP" : `${MVP}X MVP`}`}</span>
            </button>
          )}
          {goldGlove && (
            <button className={`bg-amber-500 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${goldGlove === 1 ? "Gold Glove" : `${goldGlove}X Gold Glove`}`}</span>
            </button>
          )}
          {SilverSlugger && (
            <button className={`bg-slate-500 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${SilverSlugger === 1 ? "Silver Slugger" : `${SilverSlugger}X Silver Slugger`}`}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

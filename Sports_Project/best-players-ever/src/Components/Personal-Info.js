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
      <div className={`w-full  h-48 flex-shrink-0 flex justify-evenly relative ${backgroundColor}  rounded-3xl `}>
          <h1 className="absolute top-2 left-2 text-4xl text-white font-protest">#{number}</h1>
          
          <div className=" rounded-2xl h-full ">
            <img className=" w-full max-w-48 h-full  object-cover" src={image}  alt={name} />
          </div>

          <div className="flex-1 flex flex-col justify-end ml-4 overflow-hidden mb-2">
        <p className="text-white text-4xl font-bold truncate">{name}</p>
        <p className="text-white">{position === "Pitcher" ? `Starting Pitcher` : position}</p>
        <p className="text-white font-medium mt-2">Born: {birthPlace}, DR</p>
        <div className="flex flex-wrap gap-2 ">
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

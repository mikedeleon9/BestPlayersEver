import React from "react";
import "./components.css";
import { teamBackgroundColors, teamTextColors, teamAlternateColor } from "../Assets/teamDetails";


export default function PersonalDetails({details, position, accomplishments}){

  
  const {name, birthPlace, mainTeam, number, image} = details;
  const{allStar, hallOfFame, silverSlugger, goldGlove, MVP, CyYoung, eraTitle, platinumGlove} = accomplishments;
  
  
  const backgroundColor = teamBackgroundColors[mainTeam] || "bg-gray-800";
  const textColor = teamTextColors[mainTeam] || "bg-gray-700";
  const alternateColor = teamAlternateColor[mainTeam]

  const buttonStyling = "font-bold py-1 px-2 rounded-lg  text-center";

  

    return(
      <div className={`w-full pl-4 h-48 flex items-center justify-evenly relative ${backgroundColor} rounded-3xl border-2 border-white`}>
          <h1 className="absolute top-2 left-2 text-4xl text-white font-protest">#{number}</h1>
          
          <div className=" rounded-2xl w-50 h-40">
            <img className="mt-3 w-full max-w-72 h-full object-cover" src={image}  alt={name} />
          </div>

          <div className="flex-col  overflow-hidden ml-4">
            <p className="text-white text-5xl font-bold ">{name} </p>
            <div className="flex flex-col">
                <p className="text-white ">
                  {position === "Pitcher" ? `Starting Pitcher` : position}</p>
                  
                <p className="text-white font-medium mt-4">Born: {birthPlace}, DR</p>
                <div className="flex gap-2 mt-2">
              <button className={`${alternateColor} ${buttonStyling}`}>
                <span className={`${textColor} text-sm`}>{mainTeam}</span>
              </button>
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
            )

            }
              </div>
            </div>
          </div>
      </div>
    )

}
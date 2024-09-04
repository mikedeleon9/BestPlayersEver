import React from "react";
import "./components.css";
import { teamBackgroundColors, teamTextColors, teamAlternateColor } from "../Assets/teamDetails";

export default function PersonalDetails({details, position, hallOfFame}){

  
  const {name, birthPlace, mainTeam, number, image} = details;
  
  
  const backgroundColor = teamBackgroundColors[mainTeam] || "bg-gray-800";
  const textColor = teamTextColors[mainTeam] || "bg-gray-700";
  const alternateColor = teamAlternateColor[mainTeam]
  

    return(
      <div className={`w-full h-48 flex items-center relative ${backgroundColor} rounded-3xl`}>
          <h1 className="absolute top-2 left-2 text-4xl text-white font-protest">#{number}</h1>
          
          <div className=" rounded-2xl h-40 ml-12">
            <img className="ml-4 mt-3 w-full h-full object-cover" src={image}  alt={name} />
          </div>

          <div className="w-1/2  flex-col ml-8">
            <p className="text-white text-5xl font-bold">{name} </p>
            <div className="flex flex-col">
                <p className="text-white ">
                  {position === "Pitcher" ? `Starting Pitcher` : position}</p>
                  
                <p className="text-white font-medium mt-4">Born: {birthPlace}, DR</p>
                <div className="flex gap-2 mt-2">
              <button className={`${alternateColor} font-bold py-1 px-2 rounded-lg  text-center`}>
                <span className={`${textColor}`}>{mainTeam}</span>
              </button>
              <button className={`bg-amber-400 font-bold py-1 px-2 rounded-lg text-center  ${hallOfFame === "Yes" ? 'visible' : 'invisible'}`}>
              <span className="text-black">{hallOfFame === "Yes" ? "Hall Of Fame" : "placeholder"}</span>
            </button>
              </div>
            </div>
          </div>
      </div>
    )

}
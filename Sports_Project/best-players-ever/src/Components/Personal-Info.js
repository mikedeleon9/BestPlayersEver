import React from "react";
import "./components.css";
import { teamBackgroundColors, teamTextColors, teamAlternateColor } from "../Assets/teamDetails";

export default function PersonalDetails({details}){

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

          <div className="w-1/2  flex-column ml-8">
            <p className="text-white text-5xl font-bold">{name} </p>
            <div className="">
                <p className="text-white font-medium mt-4">Born: {birthPlace}, DR</p>
              <button className={`${alternateColor} font-bold py-1 px-2 rounded-lg mt-2`}><span className={`${textColor}`}>{mainTeam}</span></button>
            </div>
          </div>
      </div>
    )

}
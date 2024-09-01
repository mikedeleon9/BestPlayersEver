import React from "react";
import "./components.css" 

export default function PersonalDetails({details}){

  const {name, birthPlace, mainTeam, teams, number, image} = details;

  const teamTextColors = {
    Rangers : "text-blue-500",
    "White Sox" : "text-black",
    Cubs : "text-blue-700",
    Orioles : "text-orange-500",
    Cardinals: "text-red-500",
    Angels: "text-red-500",
    Dodgers: "text-blue-800"
  }

  const teamBackgroundColors = {
    Rangers : "bg-blue-500",
    "White Sox" : "bg-black",
    Cubs : "bg-blue-500",
    Orioles : "bg-orange-500",
    Cardinals: "bg-red-500",
    Angels: "bg-red-500",
    Dodgers: "bg-blue-800"
  }

  const teamPages = {
    Rangers: "https://www.mlb.com/rangers",
    Cubs: "https://www.mlb.com/cubs",
    Orioles: "https://www.mlb.com/orioles",
    "White Sox": "https://www.mlb.com/whitesox"
  }

  const backgroundColor = teamBackgroundColors[mainTeam] || "bg-gray-800";

    return(
      <div className={`w-full h-48 flex items-center relative ${backgroundColor} rounded-3xl`}>
          <h1 className="absolute top-2 left-2 text-4xl text-white">#{number}</h1>
          
          <div className="rounded-2xl h-40 ml-12">
            <img className="w-full h-full object-cover" src={image}  alt={name} />
          </div>

          <div className="w-1/2  flex-column ml-8">
            <p className="text-white text-5xl font-bold">{name} </p>
            <div className="">
                <p className="text-white font-medium mt-4">Born: {birthPlace}, DR</p>
                <p className="text-white flex gap-4"> Career Teams: </p>
              <div className="flex items-center gap-4">
                {teams.map((team, index) =>(
                  <span key={index} className={teamTextColors[team] || "text-white" } ><a href={teamPages[team]}>{team}</a></span>
                ))}
              </div>
            </div>
          </div>
      </div>
    )

}
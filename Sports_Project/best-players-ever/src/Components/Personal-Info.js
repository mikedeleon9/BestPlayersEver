import React from "react";
import "./components.css" 

export default function PersonalDetails(props){

  const teamColors = {
    Rangers : "text-blue-500",
    "White Sox" : "text-black",
    Cubs : "text-blue-700",
    Orioles : "text-orange-500",
    Cardinals: "text-red-500",
    Angels: "text-red-500",
    Dodgers: "text-blue-800"
  }

    return(
      <div className="w-1/2 h-48 flex items-center relative bg-red-900 rounded-3xl ">
          <h1 className="absolute top-2 left-2 text-4xl text-white">#{props.number}</h1>
          
          <div className="rounded-2xl h-40 ml-12">
            <img className="w-full h-full object-cover" src={props.img}  alt={props.name} />
          </div>

          <div className="w-1/2  flex-column ml-8">
            <p className="text-white text-5xl font-bold">{props.name} </p>
            <div className="">
                <p className="text-white font-medium mt-4">Born: {props.birthPlace}, DR</p>
                <p className="text-white flex gap-4"> Career Teams: </p>
              <div className="flex gap-4">
                {props.teams.map((team, index) =>(
                  <span key={index} className={teamColors[team] || "text-white"} >{team}</span>
                ))}
              </div>
            </div>
          </div>
      </div>
    )

}
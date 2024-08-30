import React from "react";
import "./components.css" 

export default function PersonalDetails(props){

    return(
        <div className="w-1/2 h-44 flex items-center  bg-red-900 rounded-3xl ">
        
          <div className="rounded-2xl h-40 ml-12">
            <img className="w-full h-full object-cover" src={props.img} />
          </div>

          <div className="ml-8 flex-column items-center">
          <p className="text-white text-5xl font-bold">{props.name} </p>
          <p className="text-blue-800 font-bold">{props.birthPlace}</p>
          <p className="text-white flex gap-4"> Career Teams: {props.teams}</p>
          </div>
      </div>
    )

}
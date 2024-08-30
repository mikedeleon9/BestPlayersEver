import React from "react";
import "./components.css" 

export default function PersonalDetails(props){

    return(
        <div className="flex border-2 border-white background-blue">
        
          
          <img className="rounded-full border-2 border-white" src={props.img} />
          <div>
          <p className="text-white text-5xl">{props.name} </p>
          <p className="text-white">{props.birthPlace}</p>
          </div>
      </div>
    )

}
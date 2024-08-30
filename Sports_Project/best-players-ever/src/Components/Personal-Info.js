import React from "react";
import "./components.css" 

export default function PersonalDetails(props){

    return(
        <div className="inline-block ">
        <p className="text-blue-500 text-3xl">{props.name} </p>
        
        <img className="rounded-full" src={props.img} />
        <p className="text-blue-500">{props.birthPlace}</p>
      </div>
    )

}
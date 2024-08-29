import React from "react";
import "./components.css" 

export default function PersonalDetails(props){

    return(
        <div className="text-red-600 flex-column items-center justify-center">
        <p>{props.name}</p>
        <p>{props.birthPlace}</p>
        <img className="rounded-full" src={props.img} />
      </div>
    )

}
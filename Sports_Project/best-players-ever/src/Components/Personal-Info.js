import React from "react";
import "./components.css" 

export default function PersonalDetails(props){

    return(
        <div className="text-red-600">
        <p>{props.name}</p>
        <p>{props.birthPlace}</p>
        <img src={props.img} />
      </div>
    )

}
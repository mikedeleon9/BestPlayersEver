import React from "react";

export default function PersonalDetails(props){

    return(
        <div>
        <p>{props.name}</p>
        <p>{props.birthPlace}</p>
        <img src={props.img} />
      </div>
    )

}
import React from "react";
import { Link } from "react-router-dom";
import bautistaFlip from "../Assets/Images/BautistaFlip.jpg"
export default function HomePage(){
    return(
        <div className="overflow-hidden w-screen h-screen ">
          <div className="flex ">
           <img className="w-full  object-cover object-top opacity-20" src={bautistaFlip} ></img>
           </div>
        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
import bautistaFlip from "../Assets/Images/BautistaFlip.jpg"
export default function HomePage(){
    return(
        <div className=" w-screen h-96 overflow-hidden opacity-30 ">
           <img className="border-2" src={bautistaFlip}></img>
        </div>
    )
}
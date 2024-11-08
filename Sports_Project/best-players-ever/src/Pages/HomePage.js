import React from "react";
import { Link } from "react-router-dom";
import bautistaFlip from "../Assets/Images/BautistaFlip.jpg"
export default function HomePage(){
    return(
        <div className="overflow-hidden w-screen h-screen relative" >
          <div className="details h-full " style={{ backgroundImage: `url(${bautistaFlip})` }}>
          <div className="absolute inset-0 bg-black opacity-70"></div>
          {/*Main Content */}
          <div className="relative z-10">
            <h2>Jose Bautista</h2>
            </div>
          </div>
         
        </div>
    )
}
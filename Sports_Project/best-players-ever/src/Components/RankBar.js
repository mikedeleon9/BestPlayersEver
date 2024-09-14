import React from "react";
import "./components.css";

export default function RankBar(){

    return(
        <div className="w-3/5 h-12 top-0 sticky flex items-center p-4 gap-4 ml-45 [&>*]:w-12 [&>*]:cursor-pointer">
            <p className="hover:bg-darkerGray">Ranks</p> 
            <p className="hover:bg-darkerGray">15-11</p>
            <p className="hover:bg-darkerGray">10-6</p>
            <p className="hover:bg-darkerGray">5-1</p>
        </div>


    )


}


//[&>*]:
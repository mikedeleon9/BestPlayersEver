import React from 'react';
import "./components.css";

export default function YoutubeVideo(){

    return(

        <div >
           <iframe  src="https://www.youtube.com/embed/aJnpe4Ow_Qg?si=-EbUEjmO1zesZCnM" 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" 
           allowfullscreen
           height ="300px"
           className="w-full"
           >
            </iframe>
        </div>

    )

}
import React from 'react';
import "./components.css";


export default function YoutubeVideo({youtubeUrl, mainTeam}){



    return(

        <div className= {`rounded-xl shadow-md`} >
           <iframe  src={youtubeUrl} 
           title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerpolicy="strict-origin-when-cross-origin" 
           allowfullscreen
           height ="300px"
           className="w-full rounded-3xl"
           >
            </iframe>
        </div>

    )

}
import React from "react"
import "./components.css" 
import HomeIcon from "../Assets/Images/Nav-icons/home.png"
import CardsIcon from "../Assets/Images/Nav-icons/card.png"
import BoltIcon from  "../Assets/Images/Nav-icons/bolt.png"

import { Link } from "react-router-dom";

export default function Sidebar({mainTeam}){


    return(
        <div className="sticky fixed "> 
            
            <div className= {`bg-backgroundColor w-52 h-1/2 flex flex-col rounded-xl p-4 fixed left-0 ml-2`}>
                
               <h2 class="text-center">Accomplishments</h2> 

        
            
            </div>
        </div>
    )
}
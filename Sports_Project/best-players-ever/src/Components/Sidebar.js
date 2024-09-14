import React from "react"
import "./components.css" 
import HomeIcon from "../Assets/Images/Nav-icons/home.png"
import CardsIcon from "../Assets/Images/Nav-icons/card.png"
import BoltIcon from  "../Assets/Images/Nav-icons/bolt.png"

import { Link } from "react-router-dom";

export default function Sidebar({mainTeam}){

    ;

    const navItems = [
        { icon: HomeIcon, label: <Link to ="/">Home</Link> },
        { icon: CardsIcon, label:<Link to ="/PlayersPage">Players List</Link> },
        { icon: BoltIcon, label: "Trivia" }
      ];

    return(
        <div className="sticky h-full left-0"> 

        
        <div className= {`bg-darkerGray w-52 h-full flex flex-col  p-5`}>
            
             

            <div className="flex flex-col gap-2 font-Inter">
                {navItems.map((item, index)=>(
                    <div key={index} className="flex items-center gap-3 cursor-pointer  w-fit">
                        <img className="w-6 h-6 " src={item.icon} alt={`${item.label}-icon`} />
                        <p className="text-white">{item.label}</p>
                    </div>
               )) 
                }    
            </div>
        </div>
        </div>
    )
}
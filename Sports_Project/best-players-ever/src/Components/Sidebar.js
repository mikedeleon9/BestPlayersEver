import React from "react"
import "./components.css" 

import HomeIcon from "../Assets/Images/Nav-icons/home.png"
import CardsIcon from "../Assets/Images/Nav-icons/card.png"
import BoltIcon from  "../Assets/Images/Nav-icons/bolt.png"
import DRFlag from "../Assets/Images/DR-Flag.png"

export default function Sidebar({mainTeam}){

    ;

    const navItems = [
        { icon: HomeIcon, label: "Home" },
        { icon: CardsIcon, label: "Player List" },
        { icon: BoltIcon, label: "Trivia" }
      ];

    return(
        <div className="sticky top-0"> 

        <div className="flex items-center gap-2 py-4 ">
      <img className="w-6 h-6" src={DRFlag} alt="DR Flag" />
     <h1 className="font-Inter font-extrabold text-lg  ">Best Players Ever</h1>
    </div> 
        <div className= {`bg-darkerGray w-52  h-96 flex flex-col rounded-3xl p-5 `}>
            
             

            <div >
                {navItems.map((item, index)=>(
                    <div key={index} className="flex items-center gap-3">
                        <img className="w-5 h-5" src={item.icon} alt={`${item.label}-icon`} />
                        <p className="text-white">{item.label}</p>
                    </div>
               )) 
                }    
            </div>
        </div>
        </div>
    )
}
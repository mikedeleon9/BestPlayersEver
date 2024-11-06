import React, { useState, useContext } from "react";
import { PlayerContext } from '../Assets/PlayerContext';
import HomeIcon from "../Assets/Images/Nav-icons/home.png"
import { Link } from "react-router-dom";
import CardsIcon from "../Assets/Images/Nav-icons/card.png"
import BoltIcon from  "../Assets/Images/Nav-icons/bolt.png"


export default function RankBar() {
  // State to track which element is active (clicked)
  const [activeIndex, setActiveIndex] = useState(null);
  const { currentIndex, setCurrentIndex } = useContext(PlayerContext);

  //Nav Icons
  const navItems = [
    { icon: HomeIcon, label: <Link to ="/">Home</Link> },
    { icon: CardsIcon, label:<Link to ="/PlayersPage">Players List</Link> },
    { icon: BoltIcon, label: "Trivia" }
  ];



  // Function to update the active index on click
  const handleClick = (index, rank) => {
    setActiveIndex(index); // Update the active index when clicked
    setCurrentIndex(rank - 1);
  };


  return (
    
    <div className="mainNav w-full flex items-center justify-between ">
        <div className="flex  ">
        {navItems.map((item, index)=>(
                    <div 
                    key={index} 
                    
                    className={`flex items-center px-3 py-2 hover:rounded-md cursor-pointer gap-2 hover:bg-darkerGray transition-all duration-200 whitespace-nowrap`}>
                        <img className="w-5 h-5  " src={item.icon} alt={`${item.label}-icon`} />
                        <p className="text-white text-sm md:text-base ">{item.label}</p>
                    </div>
               )) 
                }  
        </div>
        <Link to ="/PlayersPage">
        <div className="flex items-center whitespace-nowrap">

        {["25-21","20-16","15-11", "10-6", "5-1"].map((label, index) => {
          let rank;
          switch (label) {
            case "25-21":
              rank = 25;
              break
            case "20-16":
              rank = 20;
              break
            case "15-11":
              rank = 15;
              break;
            case "10-6":
              rank = 10;
              break;
            case "5-1":
              rank = 5;
              break;
           
          }
          return (
            <p
              key={index}
              onClick={() => handleClick(index, rank)}
              className={`px-3 py-1 text-center sm-xl:text-base  sm:text-sm md:text-md lg:text-lg xl:text-xl hover:rounded-md hover:bg-darkerGray transition-all duration-200 ${
                activeIndex === index ? "border-b-4 border-blue-500 text-blue-500" : "text-white"
              }`}
            >
              {label}
            </p>
          );
        })}
      </div>
      </Link>
    </div>
  );
}
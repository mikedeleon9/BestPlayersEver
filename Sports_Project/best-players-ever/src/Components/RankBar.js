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
    
    <div className="w-full h-12 top-0 flex items-center justify-between ">
        <div className="flex gap-4">
        {navItems.map((item, index)=>(
                    <div 
                    key={index} 
                    
                    className={`flex w-16 px-2 py-1 hover:rounded-md items-center cursor-pointer gap-2 w-fit hover:bg-darkerGray `}>
                        <img className="w-5 h-5 " src={item.icon} alt={`${item.label}-icon`} />
                        <p className="text-white">{item.label}</p>
                    </div>
               )) 
                }  
        </div>
        <Link to ="/PlayersPage">
        <div className="flex items-center mr-5">

        {["25-21","20-16","15-11", "10-6", "5-1"].map((label, index) => {
          let rank;
          switch (label) {
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
              className={`w-16 px-2 py-1 text-center cursor-pointer hover:rounded-md hover:bg-darkerGray ${
                activeIndex === index ? "border-b-4 border-blue-500" : ""
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
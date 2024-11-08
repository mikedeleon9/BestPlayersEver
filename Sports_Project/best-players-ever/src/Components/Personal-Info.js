import React, {useContext} from "react";
import "./components.css";
import { teamBackgroundColors } from "../Assets/teamDetails";
import { PlayerContext } from "../Assets/PlayerContext";
import forwardIcon from "../Assets/Images/right-arrow.png";
import backIcon from "../Assets/Images/left-arrow.png";
export default function PersonalDetails({details, position, accomplishments, rank}){
  const { nextPlayer, prevPlayer } = useContext(PlayerContext);
  
  const {name, birthPlace, mainTeam, number, image} = details;
  const{allStar, hallOfFame, SilverSlugger, goldGlove, MVP, CyYoung, eraTitle, platinumGlove, RoY, battingTitle} = accomplishments;
  const backgroundColor = teamBackgroundColors[mainTeam] || "bg-gray-800";
  const buttonStyling = "font-bold py-1 px-2 rounded-lg text-center text-xs md:text-base lg:text-lg";

  

    return(
      <div className={` flex relative ${backgroundColor} rounded-xl px-6 pt-6  shadow-lg`}>
          
          <div className="absolute right-6 rounded-full xs:w-6 xs:h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 lg:w-20 lg:h-20 flex items-center justify-center border-amber-400 border-4 bg-gray-900 shadow-md" > 
          <h1 className=" text-amber-400 xs:text-md xs:text-md  sm:text-lg sm:text-lg md:text-2xl md:text-2xl lg:text-5xl lg:text-5xl font-ConcertOne">{rank}</h1>
          </div>
       <div className="flex w-full">
         <div  className="h-48 w-56 ">
         
            <img className="h-full w-full object-cover object-center " src={image}  alt={name} />
         </div>

          <div className="flex flex-col justify-end ml-12 pb-2 ">
            
        <p className="text-white text-4xl font-bold">{name}</p>
        <div className="flex items-center gap-4 my-2">
        <p className="text-white">{position === "Pitcher" ? `Starting Pitcher` : position}</p>
        <p className="text-white font-medium ">Born: {birthPlace}, DR</p>
        
        </div>
        <div className="flex gap-2 flex-wrap">
          {hallOfFame && (
            <button className={`bg-amber-400 ${buttonStyling}`}>
              <span className="text-black text-sm">Hall Of Fame</span>
            </button>
          )}
          {allStar && (
            <button className={`bg-blue-400 ${buttonStyling}`}>
              <span className="text-white text-sm">{allStar}x AS</span>
            </button>
          )}
          {MVP && (
            <button className={`bg-blue-400 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${MVP === 1? "MVP" : `${MVP}X MVP`}`}</span>
            </button>
          )}
          {goldGlove && (
            <button className={`bg-amber-500 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${goldGlove === 1 ? "Gold Glove" : `${goldGlove}X Gold Glove`}`}</span>
            </button>
          )}
          {SilverSlugger && (
            <button className={`bg-slate-500 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${SilverSlugger === 1 ? "Silver Slugger" : `${SilverSlugger}X Silver Slugger`}`}</span>
            </button>
          )}
           {CyYoung && (
            <button className={`bg-amber-600 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${CyYoung === 1 ? "Cy Young" : `${CyYoung}X Cy Young`}`}</span>
            </button>
          )}
           {RoY && (
            <button className={`bg-amber-600 ${buttonStyling}`}>
             <span className="text-black text-sm">R.O.Y</span>
            </button>
          )}
            {eraTitle && (
            <button className={`bg-sky-700 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${eraTitle === 1 ? "ERA Title" : `${eraTitle}X ERA Title`}`}</span>
            </button>
          )}
           {battingTitle && (
            <button className={`bg-amber-600 ${buttonStyling}`}>
              <span className="text-white text-sm">{`${battingTitle === 1 ? "Batting Title" : `${SilverSlugger}X Batting Title`}`}</span>
            </button>
          )}
        </div>
      
      </div>
      <div className="absolute bottom-0 right-0">
      <button onClick={prevPlayer} className="p-2 bg-gray-700 rounded-full">
              <img className="w-6 h-6" src={backIcon} alt="Previous" />
            </button>
            <button onClick={nextPlayer} className="p-2 bg-gray-700 rounded-full">
              <img className="w-6 h-6" src={forwardIcon} alt="Next" />
            </button>
            </div>
      </div>
    </div>
  )
}

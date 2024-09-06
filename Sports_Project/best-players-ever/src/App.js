import React, {useState} from "react";
import forwardIcon from "./Assets/Images/right-arrow.png"
import backIcon from "./Assets/Images/left-arrow.png"
import './App.css';
import stats from "./Assets/stats";
import PersonalDetails from  "./Components/Personal-Info";
import CareerStats from "./Components/Career-Stats";
import Excerpt from "./Components/Excerpt";
import YoutubeVideo from "./Components/Youtube-Video";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevPlayer(){
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stats.length -1 : prevIndex -1));
  }
 
  function nextPlayer() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length); // Loop back to 0 if you reach the end
  }


  return (
   
    
    <div className="text-white  App-Container-Div relative flex mt-8 w-full ">
      <div className=" flex flex-col items-center"> 
          <h1 className="text-white text-3xl font-titanOne">Best Players Ever</h1>
         <Sidebar
          mainTeam={stats[currentIndex].personalDetails.mainTeam}
          />
          </div>
    {/*  <button onClick={prevPlayer} className="z-10 button"><img className="max-w-16" src={backIcon}></img></button> */}
      
    <div className="App flex flex-grow ">
    <Navbar />
      <PersonalDetails 
      details={stats[currentIndex].personalDetails} 
      position = {stats[currentIndex].position}
      accomplishments = {stats[currentIndex].accomplishments}
      />
     
      <div className="grid grid-cols-2 gap-2 flex-grow ">
        <div className="grid gap-y-2">
         
          <CareerStats
            statistics={stats[currentIndex].CareerStats}
            mainTeam={stats[currentIndex].personalDetails.mainTeam}
            position = {stats[currentIndex].position}
          />
          <YoutubeVideo 
          mainTeam={stats[currentIndex].personalDetails.mainTeam}
          youtubeUrl={stats[currentIndex].youtubeUrl}/>
        </div>
        <Excerpt
          mainTeam={stats[currentIndex].personalDetails.mainTeam}
          Excerpt={stats[currentIndex].Excerpt}
          className="row-span-2"
        />
      </div>
      
      
      
    </div>
    <button onClick={nextPlayer} className="button"><img className="max-w-16" src={forwardIcon}></img></button>
    </div>
    
  );
  }

  

export default App;

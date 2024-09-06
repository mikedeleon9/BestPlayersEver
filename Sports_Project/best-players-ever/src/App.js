import React, {useState} from "react";
import forwardIcon from "./Assets/Images/right-arrow.png"
import backIcon from "./Assets/Images/left-arrow.png"
import './App.css';
import stats from "./Assets/stats";
import PersonalDetails from  "./Components/Personal-Info";
import CareerStats from "./Components/Career-Stats";
import Excerpt from "./Components/Excerpt";
import YoutubeVideo from "./Components/Youtube-Video";

function App() {

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevPlayer(){
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? stats.length -1 : prevIndex -1));
  }
 
  function nextPlayer() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length); // Loop back to 0 if you reach the end
  }
  return (
    <div className="App-Container-Div">
      <button onClick={prevPlayer} className="button"><img className="max-w-28" src={backIcon}></img></button>
    <div className="App">
      <PersonalDetails 
      details={stats[currentIndex].personalDetails} 
      position = {stats[currentIndex].position}
      accomplishments = {stats[currentIndex].accomplishments}
      />
     
      <div className="grid grid-cols-2 gap-2">
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
    <button onClick={nextPlayer} className="button"><img className="max-w-28" src={forwardIcon}></img></button>
    </div>
  );
  }

  

export default App;

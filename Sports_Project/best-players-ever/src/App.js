import React, {useState} from "react";

import './App.css';
import stats from "./Assets/stats";
import PersonalDetails from  "./Components/Personal-Info";
import CareerStats from "./Components/Career-Stats";


function App() {

  const [currentIndex, setCurrentIndex] = useState(0);
 
  function nextPlayer() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length); // Loop back to 0 if you reach the end
  }
    return (
     
        <div className="App">
          <PersonalDetails 
            details = {stats[currentIndex].personalDetails}
          />
          <CareerStats 
         statistics = {stats[currentIndex].CareerStats}
         mainTeam = {stats[currentIndex].personalDetails.mainTeam}
          />
          <button onClick = {nextPlayer} className="button">Next</button>
        </div>
      
    );
  }

  

export default App;

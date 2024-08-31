import React from "react";

import './App.css';
import stats from "./Assets/stats";
import PersonalDetails from  "./Components/Personal-Info";
import CareerStats from "./Components/Career-Stats";

function App() {
  
 

    return (
      <div className="App">
        <PersonalDetails 
          number = {stats[0].personalDetails.number}
          name={stats[0].personalDetails.name}
          birthPlace={stats[0].personalDetails.birthPlace}
          img={stats[0].image}
          teams={stats[0].personalDetails.teams}
          mainTeam = {stats[0].personalDetails.mainTeam}
        />

        <CareerStats 
          avg = {stats[0].CareerStats.avg}
        />
      </div>
    );
  }

  

export default App;

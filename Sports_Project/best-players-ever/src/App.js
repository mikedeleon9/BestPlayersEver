import React from "react";

import './App.css';
import stats from "./Assets/stats";
import PersonalDetails from  "./Components/Personal-Info";

function App() {
  

    return (
      <div className="App">
        <PersonalDetails 
          name={stats[0].personalDetails.name}
          birthPlace={stats[0].personalDetails.birthPlace}
          img={stats[0].image}
          teams={stats[0].personalDetails.teams}
        />
      </div>
    );
  }

  

export default App;

import React from "react";

import './App.css';
import stats from "./Assets/stats";
import PersonalDetails from  "./Components/Personal-Info";
import CareerStats from "./Components/Career-Stats";

function App() {
  
 

    return (
     
        <div className="App">
          <PersonalDetails 
            details = {stats[0].personalDetails}
          
          
        
          />
          <CareerStats 
         statistics = {stats[0].CareerStats}
          />
        </div>
      
    );
  }

  

export default App;

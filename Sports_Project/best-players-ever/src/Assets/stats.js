import SosaImage from "./Images/sosa.png"
import PujolsImage from "./Images/pujols.png"
import cedenoImage from "./Images/cedeno.png"

const stats = [

{
    personalDetails: {
      name: "Sammy Sosa",
      mainTeam: "Cubs",
      birthPlace: "San Pedro de Macoris",

      number: 21,
      image: SosaImage, 
    },
    
    position: "Outfielder",
    CareerStats:{
      avg : .273,
      obp : .344,
      slg : .534,
      ops : .878,
      opsPlus : 128,
      hr: 609,
      rbi: 1667,
      r: 1475,
      sb: 234
    },
    accomplishments : [
      "1998 NL MVP", "7X All-Star", "6X Silver Slugger", "HR Derby Champ"
    ],
    trivia: "Only Player in MLB History with three 60 HR seasons"
  },



{
    personalDetails: {
        name: "Albert Pujols",
        mainTeam: "Cardinals",
        birthPlace: "Santo Domingo",
        teams: ["Cardinals", "Angels", "Dodgers"],
        number: 5,
        image: PujolsImage,
    },
    
    position: "First Base",
    CareerStats: {
        avg: .296,
        obp: .374,
        slg: .544,
        ops: .918,
        opsPlus: 145
    },
    accomplishments : [
        "3X MVP (05, 08, 09", "11X All-Star", "6X Silver Slugger", "Rookie of The Year", "2X World Series"
    ],
    trivia: "Grounded into the most double plays in MLB History"
},

{
  personalDetails: {
    name: "Cesar Cedeno",
    mainTeam: "Astros",
    birthPlace: "Santo Domingo, DR",
    teams: ["Astros", "Reds", "Cardinals", "Dodgers"],
    number: 28,
    image: cedenoImage, 
  },
  
  position: "Outfielder",
  CareerStats:{
    avg : .285,
    obp : .347,
    slg : .443,
    ops : .790,
    opsPlus : 123,
    hr: 199,
    rbi: 976,
    r: 1084,
    sb: 550
  },
  accomplishments : [
    "4X All-Star", "5X Gold Glove",
  ],
  trivia: "All time leader in Stolen Bases by a Dominican born player"
},



    ]

    export default stats;
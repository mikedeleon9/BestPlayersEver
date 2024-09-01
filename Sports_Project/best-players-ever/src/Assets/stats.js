import SosaImage from "./Images/sosa.png"
import PujolsImage from "./Images/pujols.png"

const stats = [

{
    personalDetails: {
      name: "Sammy Sosa",
      mainTeam: "Cubs",
      birthPlace: "San Pedro de Macoris",
      teams: ["Rangers", "White Sox", "Cubs", "Orioles"],
      number: 21,
      image: SosaImage, 
    },
    
    position: "Outfielder",
    CareerStats:{
      homeruns : 609,
      avg : .273,
      obp : .344,
      slg : .534,
      ops : .878,
      opsPlus : 128
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
        homeruns: 703,
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



    ]

    export default stats;
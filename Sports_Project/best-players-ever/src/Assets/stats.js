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
    trivia: "Only Player in MLB History with three 60 HR seasons",

    Excerpt: `Sammy Sosa is a former Major League Baseball (MLB) right fielder, best known for his time with the Chicago Cubs. Born in the Dominican Republic, Sosa made his MLB debut in 1989 with the Texas Rangers but gained fame after joining the Cubs in 1992. 
    He became one of baseball's most prolific home run hitters, particularly during the 1998 season when he and Mark McGwire famously raced to break the single-season home run record. 
    Sosa finished his career with 609 home runs, earning seven All-Star selections and the 1998 National League MVP award.`
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
    trivia: "Grounded into the most double plays in MLB History",

    Excerpt: `Albert Pujols is a retired Major League Baseball (MLB) first baseman, celebrated for his impressive career with the St. Louis Cardinals and Los Angeles Angels. 
    Born in the Dominican Republic, Pujols made his MLB debut in 2001 with the Cardinals, where he quickly became known for his exceptional hitting prowess. 
    Over his career, he amassed 703 home runs, earning him a place among the all-time greats. 
    Pujols won three MVP awards, two World Series titles with the Cardinals, and was a 10-time All-Star`
},

{
  personalDetails: {
    name: "Cesar Cedeno",
    mainTeam: "Astros",
    birthPlace: "Santo Domingo",
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
  trivia: "All time leader in Stolen Bases by a Dominican born player",
  Excerpt: `
César Cedeño is a former Major League Baseball (MLB) outfielder known for his dynamic play with the Houston Astros during the 1970s and 1980s. 
Born in the Dominican Republic, Cedeño debuted in 1970 and quickly became one of the league's most exciting players, combining speed, power, and defense. 
He was a four-time All-Star and won five Gold Glove Awards for his exceptional play in center field. 
Cedeño was also a consistent base-stealer, finishing his career with 550 stolen bases.`
},



    ]

    export default stats;
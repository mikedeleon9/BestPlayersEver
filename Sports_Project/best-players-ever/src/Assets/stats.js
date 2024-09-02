import images from './Images/imageMapping'


const stats = [
//Sosa
{
    personalDetails: {
      name: "Sammy Sosa",
      mainTeam: "Cubs",
      birthPlace: "San Pedro de Macoris",

      number: 21,
      image: images["Sosa"], 
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
    youtubeUrl: "https://www.youtube.com/embed/GaYTHrAXol0?si=3VFM4wqAOpsqOhQj",

    Excerpt: `Sammy Sosa is a former Major League Baseball (MLB) right fielder, best known for his time with the Chicago Cubs. Born in the Dominican Republic, Sosa made his MLB debut in 1989 with the Texas Rangers but gained fame after joining the Cubs in 1992. 
    He became one of baseball's most prolific home run hitters, particularly during the 1998 season when he and Mark McGwire famously raced to break the single-season home run record. 
    Sosa finished his career with 609 home runs, earning seven All-Star selections and the 1998 National League MVP award.`
  },


//Pujols
{
    personalDetails: {
        name: "Albert Pujols",
        mainTeam: "Cardinals",
        birthPlace: "Santo Domingo",
        teams: ["Cardinals", "Angels", "Dodgers"],
        number: 5,
        image: images["Pujols"],
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
    youtubeUrl: "https://www.youtube.com/embed/6DGih2DUYOs?si=efq4dWCljYwOViYA",

    Excerpt: `Albert Pujols is a retired Major League Baseball (MLB) first baseman, celebrated for his impressive career with the St. Louis Cardinals and Los Angeles Angels. 
    Born in the Dominican Republic, Pujols made his MLB debut in 2001 with the Cardinals, where he quickly became known for his exceptional hitting prowess. 
    Over his career, he amassed 703 home runs, earning him a place among the all-time greats. 
    Pujols won three MVP awards, two World Series titles with the Cardinals, and was a 10-time All-Star`
},

//Cedeno
{
  personalDetails: {
    name: "Cesar Cedeno",
    mainTeam: "Astros",
    birthPlace: "Santo Domingo",
    teams: ["Astros", "Reds", "Cardinals", "Dodgers"],
    number: 28,
    image: images["Cedeno"], 
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
  youtubeUrl: "https://www.youtube.com/embed/aJnpe4Ow_Qg?si=-EbUEjmO1zesZCnM" ,
  Excerpt: `
César Cedeño is a former Major League Baseball (MLB) outfielder known for his dynamic play with the Houston Astros during the 1970s and 1980s. 
Born in the Dominican Republic, Cedeño debuted in 1970 and quickly became one of the league's most exciting players, combining speed, power, and defense. 
He was a four-time All-Star and won five Gold Glove Awards for his exceptional play in center field. 
Cedeño was also a consistent base-stealer, finishing his career with 550 stolen bases.`
},

//Beltre
{
  personalDetails: {
    name: "Adrian Beltre",
    mainTeam: "Rangers",
    birthPlace: "Santo Domingo",
    teams: ["Dodgers", "Red Sox", "Mariners", "Rangers"],
    number: 29,
    image: images["Beltre"], 
  },
  
  position: "Third Baseman",
  CareerStats:{
    avg : .286,
    obp : .339,
    slg : .480,
    ops : .819,
    opsPlus : 116,
    hr: 477,
    rbi: 1707,
    r: 1524,
    sb: 121
  },
  accomplishments : [
    "4X All-Star", "5X Gold Glove, 2X Platinum Glove, Hall of Fame",
  ],
  trivia: "All time leader in Stolen Bases by a Dominican born player",
  youtubeUrl: "https://www.youtube.com/embed/32rIvfl2nBI?si=8Hath0Udzm5ui5HV" ,
  Excerpt: `
Adrián Beltré, a renowned Dominican third baseman, captivated baseball fans with his exceptional defensive skills and powerful bat. 
Over a 21-year career, he amassed over 3,000 hits and earned five Gold Glove Awards, showcasing his stellar fielding. 
Beltré's consistency and leadership made him a beloved figure in the MLB, particularly noted during his time with the Texas Rangers and Seattle Mariners. 
His dedication and prowess on the field solidify his legacy as one of the game's greats.`
},

{
  personalDetails: {
    name: "Pedro Martinez",
    mainTeam: "Red Sox",
    birthPlace: "Manoguayabo",
    teams: ["Dodgers", "Expos", "Red Sox", "Mets", "Phillies"],
    number: 45,
    image: images["Pedro"], 
  },
  
  position: "Pitcher",
  CareerStats:{
    w : 219,
    l : 100,
    ip : 2827,
    era : 2.93,
    k: 3154,
    whip : 1.054,
    eraPlus: 154,
    bb: 760,
    sho: 17,
   
  },
  accomplishments : [
    "4X All-Star", "5X Gold Glove, 2X Platinum Glove, Hall of Fame",
  ],
  trivia: "All time leader in Stolen Bases by a Dominican born player",
  youtubeUrl: "https://www.youtube.com/embed/32rIvfl2nBI?si=8Hath0Udzm5ui5HV" ,
  Excerpt: `
Adrián Beltré, a renowned Dominican third baseman, captivated baseball fans with his exceptional defensive skills and powerful bat. 
Over a 21-year career, he amassed over 3,000 hits and earned five Gold Glove Awards, showcasing his stellar fielding. 
Beltré's consistency and leadership made him a beloved figure in the MLB, particularly noted during his time with the Texas Rangers and Seattle Mariners. 
His dedication and prowess on the field solidify his legacy as one of the game's greats.`
},

    ]

    export default stats;
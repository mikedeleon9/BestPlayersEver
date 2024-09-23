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
    rank: 9,
    CareerStats:{
      avg : .273,
      obp : .344,
      slg : .534,
      ops : .878,
      opsPlus : 128,
      hr: 609,
      rbi: 1667,
      war: 50
      
    },

   careerYear:{
      year: 2004,
      avg : .328,
      obp : .437,
      slg : .737,
      ops : 1.174,
      opsPlus : 203,
      hr: 64,
      rbi: 160,
      war: 10.3
      
    },

    accomplishments : {
      allStar: 7,
      MVP: 1,
      SilverSlugger: 6,
      },



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
    rank: 1,
    CareerStats: {
        avg: .296,
        obp: .374,
        slg: .544,
        ops: .918,
        opsPlus: 145,
        hr: 703,
        rbi: 2218,
        r: 1914,
        war: 101.4
    },

    careerYear:{
      year: 2009,
      avg : .327,
      obp : .443,
      slg : .658,
      ops : 1.101,
      opsPlus : 189,
      hr: 47,
      rbi: 135,
      war: 9.7
      
    },

    accomplishments : {
      allStar: 11,
      MVP: 3,
      SilverSlugger: 6,
      goldGlove: 2,
      RoY: "Yes",
      battingTitle: 1
    },
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
  rank: 10,
  CareerStats:{
    avg : .285,
    obp : .347,
    slg : .443,
    ops : .790,
    opsPlus : 123,
    hr: 199,
    rbi: 976,
    war: 53.1,
    sb: 550
  },

  careerYear:{
    year: 1972,
    avg : .320,
    obp : .385,
    slg : .537,
    ops : 1.101,
    opsPlus : 162,
    hr: 22,
    sb: 55,
    war: 8.0,
    doubles: 39
    
  },

  accomplishments : {
    allStar: 4,
    goldGlove: 5,

  },

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
  rank: 3,
 
  CareerStats:{
    avg : .286,
    obp : .339,
    slg : .480,
    ops : .819,
    opsPlus : 116,
    hr: 477,
    rbi: 1707,
    r: 1524,
    war: 93.5
  },


  careerYear:{
    year: 2004,
    avg : .334,
    obp : .388,
    slg : .629,
    ops : 1.017,
    opsPlus : 163,
    hr: 48,
    rbi: 121,
    war: 9.6
    
  },



  accomplishments : {
    allStar: 4,
    hallOfFame: "Yes",
    SilverSlugger: 4,
    goldGlove: 5,
    platinumGlove: 2

  },
  trivia: "All time leader in Stolen Bases by a Dominican born player",
  youtubeUrl: "https://www.youtube.com/embed/32rIvfl2nBI?si=8Hath0Udzm5ui5HV" ,
  Excerpt: `
Adrián Beltré, a renowned Dominican third baseman, captivated baseball fans with his exceptional defensive skills and powerful bat. 
Over a 21-year career, he amassed over 3,000 hits and earned five Gold Glove Awards, showcasing his stellar fielding. 
Beltré's consistency and leadership made him a beloved figure in the MLB, particularly noted during his time with the Texas Rangers and Seattle Mariners. 
His dedication and prowess on the field solidify his legacy as one of the game's greats.`
},


//Pedro
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
  rank: 2,
  hallOfFame : "Yes",


  CareerStats:{
   
    w : 219,
    l : 100,
    ip : "2,827",
    era : 2.93,
    k: "3,154",
    whip : 1.054,
    eraPlus: 154,
    bb: 760,
    sho: 17,
   
  },


  careerYear:{
    year: 2000,
    w : 18,
    l : 6,
    ip : "2,827",
    era : 2.17,
    k: "284",
    whip : 0.737,
    eraPlus: 291,
    bb: 32,
    sho: 4,
  },

  accomplishments : {
    allStar: 8,
    hallOfFame: "Yes",
    CyYoung: 3,
    eraTitle: 3,

  },

  trivia: "All time leader in Stolen Bases by a Dominican born player",
  youtubeUrl: "https://www.youtube.com/embed/-yWa0e7hAvk?si=SYOojYoAmKkh_jGd" ,
  Excerpt: `
Pedro Martínez, a Hall of Fame pitcher, is one of the most dominant players in MLB history. 
Born in the Dominican Republic, he had a career spanning 18 seasons, primarily with the Montreal Expos and Boston Red Sox. 
Martínez won three Cy Young Awards and was an eight-time All-Star. 
Known for his pinpoint control, devastating changeup, and fiery competitiveness, 
he played a key role in breaking Boston's 86-year World Series drought in 2004, cementing his legacy as one of baseball's all-time greats.`
},


//Marichal

{
  personalDetails: {
    name: "Juan Marichal",
    mainTeam: "Giants",
    birthPlace: "Laguna Verde",
    teams: ["Giants", "Red Sox", "Dodgers"],
    number: 27,
    image: images["Marichal"], 
  },
  
  position: "Pitcher",
  rank: 4,
  hallOfFame : "Yes",
  CareerStats:{
    w : 243,
    l : 142,
    ip : "3,507",
    era : 2.89,
    k: "2,303",
    whip : 1.101,
    eraPlus: 123,
    bb: 709,
    sho: 52,
    
  },

  careerYear:{
    year: 1965,
    w : 22,
    l : 13,
    ip : "295.1",
    era : 2.13,
    k: "240",
    whip : 0.914,
    eraPlus: 169,
    sho: 10,
    war: 10.3
  },


  accomplishments : {
    allStar: 10,
    hallOfFame: "Yes",
    eraTitle: 1

  },
  trivia: "First Dominican Born player to be elected to the Baseball Hall of Fame",
  youtubeUrl: "https://www.youtube.com/embed/-d-X_eDR-lM?si=ZJ_o18gJe-VO29si" ,
  Excerpt: `

Juan Marichal, the Dominican Dandy, born on October 20, 1937, in the Dominican Republic, is one of baseball's greatest pitchers. 
Known for his high leg kick and pinpoint control, Marichal played most of his career with the San Francisco Giants from 1960 to 1973. 
He was a 10-time All-Star and finished with 243 wins and a 2.89 ERA. 
Marichal's fierce competitiveness and remarkable durability made him a Hall of Famer in 1983, solidifying his legacy as one of baseball's elite pitchers.`

},


//Vlad
{
  personalDetails: {
    name: "Vladimir Guerrero",
    mainTeam: "Angels",
    birthPlace: "Nizao",
    teams: ["Expos", "Angels", "Rangers", "Orioles"],
    number: 27,
    image: images["Vlad"], 
  },
  
  position: "Outfielder",
  rank: 6,
  hallOfFame: "Yes",

  CareerStats:{
    avg : .318,
    obp : .379,
    slg : .553,
    ops : .931,
    opsPlus : 140,
    hr: 449,
    rbi: 1496,
    war: 59.5,
    sb: 181
  },

  careerYear:{
    year: 2002,
    avg : .336,
    obp : .417,
    slg : .593,
    ops : 1.010,
    opsPlus : 160,
    hr: 39,
    sb: 40,
    war: 7.1,
    rbi: 111
    
  },

  accomplishments : {
    allStar: 9,
    hallOfFame: "Yes",
    MVP: 1,
    SilverSlugger: 8

  },
  trivia: "One homerun shy in 2002 of a 40/40 season",
  youtubeUrl: "https://www.youtube.com/embed/jdzM02BgL-k?si=R61mNtj7zHWfqo-z" ,
  Excerpt: `

Vladimir Guerrero Sr., a Dominican baseball legend, is renowned for his exceptional hitting ability and powerful arm. 
Playing 16 seasons in Major League Baseball, primarily with the Montreal Expos and Los Angeles Angels, 
Guerrero was known for his aggressive batting style, often hitting pitches well outside the strike zone. 
A nine-time All-Star and 2004 AL MVP, he retired with a .318 batting average, 449 home runs, and was inducted into the Baseball Hall of Fame in 2018.`
},


//Robinson Cano

{
  personalDetails: {
      name: "Robinson Cano",
      mainTeam: "Yankees",
      birthPlace: "San Pedro de Macoris",
      teams: ["Yankees", "Mariners", "Mets", "Padres", "Braves"],
      number: 22,
      image: images["Cano"],
  },
  
  position: "Second Base",
  rank: 8,
  CareerStats: {
      avg: .301,
      obp: .351,
      slg: .488,
      ops: .839,
      opsPlus: 124,
      hr: 335,
      rbi: 1306,
      war: 68.1,
      
  },

  accomplishments : {
    allStar: 8,
    SilverSlugger: 5,
    goldGlove: 2,

  },

  trivia: "Grounded into the most double plays in MLB History",
  youtubeUrl: "https://www.youtube.com/embed/rQW9SBBSQmA?si=NQvT9gvCXcyzpC8e",

  Excerpt: `Robinson Canó is a Dominican professional baseball player known for his smooth fielding and powerful bat. 
  Primarily a second baseman, Canó began his MLB career with the New York Yankees in 2005, becoming an eight-time All-Star and five-time Silver Slugger. 
  He was instrumental in the Yankees' 2009 World Series win. Canó later signed with the Seattle Mariners, and 
  despite facing challenges, including suspensions for performance-enhancing drugs, he remains one of the most talented infielders of his generation.`
},

//Manny Ramirez
{
  personalDetails: {
      name: "Manny Ramirez",
      mainTeam: "Red Sox",
      birthPlace: "Santo Domingo",
      teams: ["Indians", "Red Sox", "Dodgers", "White Sox", "Rays"],
      number: 24,
      image: images["Manny"],
  },
  rank: 5,
  position: "Outfielder",

  CareerStats: {
      avg: .312,
      obp: .411,
      slg: .585,
      ops: .996,
      opsPlus: 154,
      hr: 555,
      rbi: 1831,
      r: 1544,
      war: 69.3
  },

  careerYear:{
    year: 1999,
    avg : .333,
    obp : .442,
    slg : .663,
    ops : 1.105,
    opsPlus : 174,
    hr: 44,
    war: 7.3,
    rbi: 165
    
  },

  accomplishments : {
    allStar: 12,
    SilverSlugger: 9,
    battingTitle: 1,
    wsMVP: 1
  
  },

  trivia: "One of 27 players in MLB history with a .300/.400/.500 career slash",
  youtubeUrl: "https://www.youtube.com/embed/rQW9SBBSQmA?si=NQvT9gvCXcyzpC8e",

  Excerpt: `Manny Ramirez was one of the most feared hitters of his era. Known for his incredible power and clutch performances, he played for teams like the Cleveland Indians, Boston Red Sox, and Los Angeles Dodgers. A 12-time All-Star and 9-time Silver Slugger, Ramirez helped the Red Sox end their 86-year World Series drought in 2004. Despite controversies later in his career, Manny's legacy as a dynamic slugger remains a key chapter in baseball history..`
},

//Miguel Tejada

{
  personalDetails: {
      name: "Miguel Tejada",
      mainTeam: "Athletics",
      birthPlace: "Bani",
      teams: ["Athletics", "Orioles", "Astros", "Padres", "Giants", "Royals"],
      number: 10,
      image: images["Tejada"],
  },
  
  position: "Shortstop",
  allStar: 6,
  rank: 14,
  CareerStats: {
      avg: .285,
      obp: .336,
      slg: .456,
      ops: .791,
      opsPlus: 108,
      hr: 307,
      rbi: 1302,
      r: 1230,
      war: 47.1
  },

  careerYear:{
    avg : .311,
    obp : .360,
    slg : .534,
    ops : .894,
    opsPlus : 131,
    hr: 34,
    rbi: 150,
    war: 7.4
    
  },

  accomplishments : {
    allStar: 6,
    SilverSlugger: 2,
    MVP: 1,

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/k8Ds8KtpHVY?si=vud6K2lNWXjxsc-1",

  Excerpt: `Tejada was a standout player in Major League Baseball known for his strong bat and durable defense. A six-time All-Star and 2002 American League MVP, Tejada played for teams like the Oakland Athletics, Baltimore Orioles, and Houston Astros. He was renowned for his power hitting and impressive streak of consecutive games played. With over 300 home runs and 1,300 RBIs in his career, Tejada remains one of the top shortstops to emerge from the Dominican Republic..`
},


//Bartolo Colon

{
  personalDetails: {
    name: "Bartolo Colon",
    mainTeam: "Guardians",
    birthPlace: "Altamira",
    teams: ["Guardians", "Expos", "White Sox", "Angels", "Red Sox", "Yankees", "Athletics", "Mets", "Braves", "Twins", "Rangers"],
    number: 40,
    image: images["Colon"],
},

position: "Pitcher",
rank: 13,

CareerStats:{
  w : 247,
  l : 188,
  ip : "3,461",
  era : 4.12,
  k: "2,535",
  whip : 1.312,
  eraPlus: 106,
  bb: 948,
  sho: 13,
},

accomplishments : {
  allStar: 4,
  CyYoung: 1,

},

trivia: "One of four Dominican players to win MVP",
youtubeUrl: "https://www.youtube.com/embed/OVFsq9FQBlc?si=MBtJP0KAP67Nnz7y",

Excerpt: `Robinson Canó is a Dominican professional baseball player known for his smooth fielding and powerful bat. 
Primarily a second baseman, Canó began his MLB career with the New York Yankees in 2005, becoming an eight-time All-Star and five-time Silver Slugger. 
He was instrumental in the Yankees' 2009 World Series win. Canó later signed with the Seattle Mariners, and 
despite facing challenges, including suspensions for performance-enhancing drugs, he remains one of the most talented infielders of his generation.`
},

//David Ortiz

{
  personalDetails: {
      name: "David Ortiz",
      mainTeam: "Red Sox",
      birthPlace: "Santo Domingo",
      teams: ["Twins", "Red Sox"],
      number: 34,
      image: images["Ortiz"],
  },
  
  position: "Designated Hitter",
  rank: 7,
  CareerStats: {
      avg: .286,
      obp: .380,
      slg: .552,
      ops: .931,
      opsPlus: 141,
      hr: 541,
      rbi: 1768,
      r: 1419,
      war: 55.3
  },

  accomplishments : {
    rank: 8,
    SilverSlugger: 7,
    WSMVP: 1,
    hallOfFame: "Yes"

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/p95jSKmJOhw?si=DfLCMbHmVXa0NpSi",

  Excerpt: `Tejada was a standout player in Major League Baseball known for his strong bat and durable defense. A six-time All-Star and 2002 American League MVP, Tejada played for teams like the Oakland Athletics, Baltimore Orioles, and Houston Astros. He was renowned for his power hitting and impressive streak of consecutive games played. With over 300 home runs and 1,300 RBIs in his career, Tejada remains one of the top shortstops to emerge from the Dominican Republic..`
},

//Jose Ramirez

{
  personalDetails: {
      name: "Jose Ramirez",
      mainTeam: "Guardians",
      birthPlace: "Bani",
      teams: ["Guardians"],
      number: 11,
      image: images["JRam"],
  },
  
  rank: 12,
  position: "Third Baseman",
  CareerStats: {
      avg: .278,
      obp: .352,
      slg: .501,
      ops: .852,
      opsPlus: 129,
      hr: 250,
      rbi: 852,
      r: 888,
      war: 50.9,
      sb: 241
  },

  accomplishments : {
    allStar: 6,
    SilverSlugger: 4,
    

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/mtuc9vRgMl4?si=T-bFNm8KfpsNVEwk",

  Excerpt: `Tejada was a standout player in Major League Baseball known for his strong bat and durable defense. A six-time All-Star and 2002 American League MVP, Tejada played for teams like the Oakland Athletics, Baltimore Orioles, and Houston Astros. He was renowned for his power hitting and impressive streak of consecutive games played. With over 300 home runs and 1,300 RBIs in his career, Tejada remains one of the top shortstops to emerge from the Dominican Republic..`
},


//Nelson Cruz

{
  personalDetails: {
      name: "Nelson Cruz",
      mainTeam: "Mariners",
      birthPlace: "Bani",
      teams: ["Mariners"],
      number: 23,
      image: images["Cruz"],
  },
  
  rank: 11,
  position: "Right Fielder/ DH",
  CareerStats: {
      avg: .274,
      obp: .343,
      slg: .513,
      ops: .856,
      opsPlus: 130,
      hr: 464,
      rbi: 1325,
      r: 1090,
      war: 42.1,
      doubles: 235
  },

  accomplishments : {
    allStar: 7,
    SilverSlugger: 4,
    

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/u_Qj7CPh9G8?si=vud22BhYDhKqj-sq",

  Excerpt: `Tejada was a standout player in Major League Baseball known for his strong bat and durable defense. A six-time All-Star and 2002 American League MVP, Tejada played for teams like the Oakland Athletics, Baltimore Orioles, and Houston Astros. He was renowned for his power hitting and impressive streak of consecutive games played. With over 300 home runs and 1,300 RBIs in his career, Tejada remains one of the top shortstops to emerge from the Dominican Republic..`
},

//Tony Fernandez

{
  personalDetails: {
      name: "Tony Fernandez",
      mainTeam: "Blue Jays",
      birthPlace: "San Pedro de Macoris",
      teams: ["Blue Jays"],
      number: 1,
      image: images["Fernandez"],
  },
  
  rank: 20,
  position: "Shortstop",

  CareerStats: {
      avg: .288,
      obp: .347,
      slg: .399,
      ops: .746,
      opsPlus: 101,
      h: 2276,
      sb: 246,
      r: 1057,
      war: 45.3,
      
  },


  careerYear:{
    avg : .310,
    obp : .338,
    slg : .428,
    ops : .766,
    opsPlus : 105,
    doules: 33,
    sb: 25,
    war: 5.0
    
  },


  accomplishments : {
    allStar: 5,
    goldGlove: 4,
    

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/DOnh7l8aA7I?si=8FtdgjeE9zIGEWe_",

  Excerpt: `Tony Fernández was known for his smooth fielding and consistent hitting. A five-time All-Star and four-time Gold Glove Award winner, Fernández played the majority of his career with the Toronto Blue Jays. Renowned for his defensive skills, quick hands, and strong arm, he also contributed offensively with over 2,200 career hits. 
  Fernández played a key role in the Blue Jays' 1993 World Series victory, solidifying his legacy as one of baseball’s top shortstops of his era.`
},


//Julio Franco

{
  personalDetails: {
      name: "Julio Franco",
      mainTeam: "Rangers",
      birthPlace: "Hato Mayor",
      teams: ["Phillies", "Indians", "Rangers", "White Sox", "Brewers", "Devil Rays", "Braves", "Mets"],
      number: 14,
      image: images["Franco"],
  },
  
  rank: 15,
  position: "Infielder",
  CareerStats: {
      avg: .298,
      obp: .365,
      slg: .417,
      ops: .782,
      opsPlus: 111,
      h: 2586,
      sb: 281,
      r: 1285,
      war: 43.6,
      
  },

  careerYear:{
    avg : .341,
    obp : .408,
    slg : .474,
    ops : .882,
    opsPlus : 146,
    hr: 15,
    sb: 36,
    war: 6.2
    
  },


  accomplishments : {
    allStar: 3,
    SilverSlugger: 5,
    BattlingTitle: 1,

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/7F6I_bDfdOg?si=X1Jwv6LCT5zqD8fd",

  Excerpt: `Known for his unique batting stance and remarkable longevity, Franco made his MLB debut in 1982 and played for several teams, including the Cleveland Indians, Texas Rangers, and Atlanta Braves. 
  A versatile infielder, Franco won the American League batting title in 1991 and was a three-time All-Star. 
  He holds the record as the oldest player to hit a home run, achieving this at age 48.`
},


//Hanley Ramirez
{
  personalDetails: {
      name: "Hanley Ramirez",
      mainTeam: "Marlins",
      birthPlace: "Samana",
      teams: ["Marlins", "Dodgers", "Red Sox", "Indians"],
      number: 2,
      image: images["Hanley"],
  },
  
  rank: 16,
  position: "Shortstop",
  CareerStats: {
      avg: .289,
      obp: .360,
      slg: .486,
      ops: .847,
      opsPlus: 124,
      h: 1834,
      sb: 281,
      r: 1834,
      war: 38,
      
  },

  careerYear:{
    avg : .342,
    obp : .410,
    slg : .543,
    ops : .954,
    opsPlus : 148,
    hr: 24,
    sb: 37,
    war: 7.3
    
  },


  accomplishments : {
    allStar: 3,
    SilverSlugger: 2,
    BattlingTitle: 1,
    RoY: "yes"

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/Ptfy6Xgmu_c?si=66Jw2XSvncq2Hph3",

  Excerpt: `Known for his dynamic offensive skills and versatility, primarily at shortstop, Ramírez won the National League Rookie of the Year in 2006 with the Florida Marlins and earned three All-Star selections throughout his career. 
  He also won the NL batting title in 2009, hitting .342. Ramírez had stints with the Boston Red Sox and Los Angeles Dodgers, where his combination of power and speed made him one of the top players of his era.`
},

//Jose Bautista

{
  personalDetails: {
      name: "Jose Bautista",
      mainTeam: "Blue Jays",
      birthPlace: "santo D",
      teams: ["Orioles", "Rays", "Royals", "Pirates", "Blue Jays", "Braves", "Mets", "Phillies"],
      number: 19,
      image: images["Bautista"],
  },
  
  rank: 17,
  position: "Outfielder",
  CareerStats: {
      avg: .247,
      obp: .361,
      slg: .475,
      ops: .836,
      opsPlus: 124,
      hr: 344,
      h: 1496,
      rbi: 975,
      war: 43.6,
      
  },

  careerYear:{
    avg : .302,
    obp : .447,
    slg : .608,
    ops : 1.056,
    opsPlus : 182,
    hr: 43,
    rbi: 103,
    war: 8.3
    
  },


  accomplishments : {
    allStar: 6,
    SilverSlugger: 3,
    

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/-UdsVO7HaJg?si=9x_solGFRY7Ci3Cq",

  Excerpt: `
 Best known for his powerful hitting and iconic bat flip during the 2015 playoffs, Bautista played for several teams, but rose to prominence with the Toronto Blue Jays, where he became a six-time All-Star and led the league in home runs twice. 
His 54 homers in 2010 solidified his status as one of the game's premier sluggers. 
Bautista’s leadership and clutch performances made him a fan favorite in Toronto.`
},


//Juan Soto

{
  personalDetails: {
      name: "Juan Soto",
      mainTeam: "Nationals",
      birthPlace: "Santo Domingo",
      teams: ["Nationals", "Padres", "Yankees"],
      number: 22,
      image: images["Soto"],
  },
  
  rank: 18,
  position: "Outfielder",
  CareerStats: {
      avg: .285,
      obp: .421,
      slg: .533,
      ops: .954,
      opsPlus: 160,
      hr: 200,
      bb: 764,
      war: 36.3,
      
  },

  careerYear:{
    avg : .341,
    obp : .408,
    slg : .474,
    ops : .882,
    opsPlus : 146,
    hr: 15,
    sb: 36,
    war: 6.2
    
  },


  accomplishments : {
    allStar: 4,
    SilverSlugger: 4,
    battingTitle: 1,

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/7F6I_bDfdOg?si=X1Jwv6LCT5zqD8fd",

  Excerpt: `Known for his unique batting stance and remarkable longevity, Franco made his MLB debut in 1982 and played for several teams, including the Cleveland Indians, Texas Rangers, and Atlanta Braves. 
  A versatile infielder, Franco won the American League batting title in 1991 and was a three-time All-Star. 
  He holds the record as the oldest player to hit a home run, achieving this at age 48.`
},


//Felipe Alou

{
  personalDetails: {
      name: "Felipe Alou",
      mainTeam: "Giants",
      birthPlace: "Hato Mayor",
      teams: ["Giants", "Braves", "Athletics", "Yankees", "Expos", "Brewers"],
      number: 29,
      image: images["Alou"],
  },
  
  rank: 19,
  position: "Outfielder",
  CareerStats: {
      avg: .286,
      obp: .328,
      slg: .433,
      ops: .761,
      opsPlus: 113,
      h: 2101,
      r: 985,
      doubles: 352,
      war: 42.2,
      hr: 206
      
  },

  careerYear:{
    avg : .327,
    obp : .361,
    slg : .533,
    ops : .894,
    opsPlus : 142,
    hr: 31,
    rbi: 74,
    doubles: 32,
    war: 6.2
    
  },


  accomplishments : {
    allStar: 3,
    

  },

  trivia: "One of four Dominican players to win MVP",
  youtubeUrl: "https://www.youtube.com/embed/1qOpEkKyQ2U?si=3nw6RaVMZB7M23e-",

  Excerpt: `Felipe Alou had a distinguished playing and managerial career. As a player, Alou was a versatile outfielder and first baseman, earning three All-Star selections. 
  He played for teams like the San Francisco Giants and Atlanta Braves during his 17-year career, excelling as a hitter with over 2,100 hits and 200 home runs. 
  Alou also became the first Dominican manager in MLB history, leading the Montreal Expos and later the Giants. He is celebrated for his contributions both on and off the field.`
},

    ]






    export default stats;
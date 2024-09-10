const mongoose = require('mongoose');
const stats = require('./stats');  // Assuming stats.js is in the same folder

// Connect to MongoDB (replace with your own MongoDB URI)
mongoose.connect('mongodb://localhost:27017/mlb_players', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Connection error', err);
    });

// Define a Schema for player stats
const playerSchema = new mongoose.Schema({
    personalDetails: {
        name: String,
        mainTeam: String,
        birthPlace: String,
        number: Number,
        image: String,
    },
    position: String,
    allStar: Number,
    hallOfFame: String,
    CareerStats: {
        avg: Number,
        obp: Number,
        slg: Number,
        ops: Number,
        opsPlus: Number,
        hr: Number,
        rbi: Number,
        r: Number,
        sb: Number,
        w: Number,
        l: Number,
        ip: String,
        era: Number,
        k: String,
        whip: Number,
        eraPlus: Number,
        bb: Number,
        sho: Number
    },
    accomplishments: [String],
    trivia: String,
    youtubeUrl: String,
    Excerpt: String
});

// Create a model
const Player = mongoose.model('Player', playerSchema);

// Insert stats data into MongoDB
Player.insertMany(stats)
    .then(() => {
        console.log('Data successfully inserted');
        mongoose.connection.close(); // Close connection once data is inserted
    })
    .catch(err => {
        console.error('Error inserting data', err);
    });

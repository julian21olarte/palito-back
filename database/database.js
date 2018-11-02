'use strict';
const mongoose = require('mongoose');
const mongo_url = process.env.DATABASE_URL;
const reservationSeed = require('./seeders/reservation.seed.js');

// MongoDB Setup (Mongoose)
mongoose.connect(mongo_url, { useNewUrlParser: true })
.then( () => {
    console.log('Database connection OK...');

    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV == 'seed') {
        console.log('Seeding database');
        // Drop database
        mongoose.connection.db.dropDatabase()

            // seed database
            .then(() => reservationSeed.seed())
            .catch(error => console.log('Error on seed data'));
    }
})
.catch(err => console.log(err));
mongoose.Promise = global.Promise;
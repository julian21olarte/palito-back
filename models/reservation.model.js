'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationSchema = new Schema({
    //internal_id:                { type: String, required: true },
    intermediary_provider_id:   { type: String, required: true },
    provider_id:                { type: String, required: true },
    provider_name:              { type: String, required: true },    
    crm_id:                     { type: String, required: true },    
    reservation_channel:        { type: String, enum: ['Plataforma Palito', 'Directo Sabre', 'Directo Amadeus'], required: true, default: 'Plataforma Palito' },
    total:                      { type: Number, required: true },
    reservation_date:           { type: Date, required: true },
    status:                     { type: String, enum: ['Booked', 'Cashed', 'Billed', 'Cancelled'], required: true },
    client_id:                  { type: String, required: true },
    business_client_id:         { type: String, required: true },
    travel_date:                { type: Date, required: true },
    origin:                     { type: String, maxlength: 3, required: true },
    destiny:                    { type: String, maxlength: 3, required: true }
});
module.exports = mongoose.model('Reservation', reservationSchema);
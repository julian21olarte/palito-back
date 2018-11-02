'use strict';
const reservationModel = require('../../models/reservation.model');

const AUTH0_USER_ID = '5bd5294f3f325f0d8f8115cd';
const AUTH0_USER_ID2 = '5bd683fec3094a3a0d39afe7';
const BUSINESS_USER_ID = 'TRAVEL';

const seed = () => {

  let reservations = [];

  for(let i = 1; i <= 20; ++i) {
    reservations.push({
      intermediary_provider_id:   'SABREID' + i,
      provider_id:                'AVIANCA' + i,
      provider_name:              'AVIANCA',
      crm_id:                     'CRM' + i,
      reservation_channel:        (i <= 7) ? 'Directo Sabre' : ((i > 8 && i < 15) ? 'Directo Amadeus' : 'Plataforma Palito'),
      total:                      i * 45.9,
      reservation_date:           new Date(2018, i, (i * 2)),
      status:                     'Booked',
      client_id:                  i <= 10 ? AUTH0_USER_ID : AUTH0_USER_ID2,
      business_client_id:         BUSINESS_USER_ID + (i <= 10 ? AUTH0_USER_ID : AUTH0_USER_ID2),
      travel_date:                new Date(2018, 11, (i * 3)),
      origin:                     'BOG',
      destiny:                    'UIO',
    });
  }
  reservationModel.insertMany(reservations)
    .then(resp => console.log('Reservations seed load succesfully'))
    .catch(error => console.log('Error on load reservations Seed'));
}


module.exports = {
  seed
}
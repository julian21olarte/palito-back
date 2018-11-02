'use strict';
const reservationService = require('./reservation.service');


const pay = (pay) => {
  return reservationService.payReservation(pay.reservation_id);
}

module.exports = {
  pay
}
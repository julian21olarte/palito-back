'use strict';
const reservationService = require('../services/reservation.service.js');


const getReservationsBySomeIdAndUserId = (req, res) => {
  const code = req.query.code;
  const clientId = req.query.client_id;
  if(!code || !clientId) {
    return res.status(404).send({message: 'Id not exist.'});
  }
  reservationService.getReservationsBySomeIdAndUserId(code, clientId)
    .then(reservation => {
      if(!reservation) {
        return res.status(404).send({message: 'Any reservation found by id ' + code + ' or client id ' + clientId});
      }
      reservation = reservation.toObject();
      reservation.code = code;
      return res.status(200).send(reservation);
    }).catch(error => {
      return res.status(500).send({message: 'Internal error', error});
    });
}

const getReservations = (req, res) => {
  reservationService.getReservations()
    .then(reservations => {
      if(!reservations || !reservations.length) {
        res.status(404).send({message: 'Any reservation found by id ' + id});
      }
      res.status(200).send(reservations);
    }).catch(error => {
      res.status(500).send({message: 'Internal error', error});
    });
}

module.exports = {
  getReservationsBySomeIdAndUserId,
  getReservations
}
'use strict';
const reservationModel = require('../models/reservation.model');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;


const getReservations = () => reservationModel.find();


const getReservationsBySomeIdAndUserId = (id, clientId) => {
  let or = [{ intermediary_provider_id: id }, {provider_id: id}];
  if(ObjectId.isValid(id)) {
    or.push({ _id: new ObjectId(id) });
  }
  return reservationModel
    .findOne({$and: [
      {status: 'Booked'},
      {client_id: clientId},
      {$or: or}
    ]});
}

const payReservation = (_id) => {
  return reservationModel.updateOne({_id: new ObjectId(_id)}, {status: 'Cashed'});
}


module.exports = {
  getReservations,
  getReservationsBySomeIdAndUserId,
  payReservation
}
'use strict';
const payService = require('../services/pay.service.js');
const ticketService = require('../services/ticket.service');


const pay = (req, res) => {
  const pay = req.body.pay;
  payService.pay(pay)
    .then(response => ticketService.createTicket(pay))
    .then(ticketResponse => res.status(200).send(ticketResponse))
    .catch(error => {
      return res.status(500).send({message: 'Internal error', error});
    });
}

module.exports = {
  pay
}
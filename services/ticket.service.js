'use strict';
const ticketUtil = require('../util/ticket.util');
const Zendesk = require('zendesk-node-api');

const zendeskClient = new Zendesk({
  url: process.env.ZENDESK_URL,
  email: process.env.ZENDESK_EMAIL,
  token: process.env.ZENDESK_TOKEN
});


const createTicket = (pay) => {
  const ticketSend = {
    subject: pay.subject,
    comment: {
      body: pay.description
    },
    custom_fields: getCustomFields(pay)
  }
  return zendeskClient.tickets.create(ticketSend);
}


const getCustomFields = (pay) => {
  const ticketMap = ticketUtil.ticketMap;
  const customFields = Object.keys(pay)
    .filter(key => ticketMap[key] ? true : false)
    .map(key => {
      return {
        id: ticketMap[key],
        value: pay[key]
      };
    });
    return customFields;
}

module.exports = {
  createTicket,
  getCustomFields
}
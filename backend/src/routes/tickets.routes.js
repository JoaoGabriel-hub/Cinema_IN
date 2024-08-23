const express = require('express');
const ticketRoutes = express.Router();


const { buyTicket } = require('../controllers/tickets.controllers');


// Rota para comprar um ingresso
ticketRoutes.patch('/buy-ticket', buyTicket);

module.exports = ticketRoutes;
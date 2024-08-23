const express = require('express');
const bodyParser = require('body-parser');
const { buyTicket } = require('./controllers/ticketController');

const app = express();
app.use(bodyParser.json());

// Rota para comprar um ingresso
app.post('/buy-ticket', comprarIngresso);


const express = require('express');
const seatRoutes = express.Router();

// Inclusão dos middlewares

// Inclusão dos Controllers

const seatsControllers = require('../controllers/seats.controllers');

seatRoutes.get('/:id', seatsControllers.getSeats);
seatRoutes.patch('/assentos/:id', seatsControllers.updateSeat);

// Exportação
module.exports = seatRoutes;
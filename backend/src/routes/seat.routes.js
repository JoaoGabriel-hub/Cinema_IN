const express = require('express');
const seatRoutes = express.Router();

// Inclusão dos middlewares

// Inclusão dos Controllers

const seatsControllers = require('../controllers/seats.controllers');

seatRoutes.get('/:id', seatsControllers.getSeats);

// Exportação
module.exports = seatRoutes;
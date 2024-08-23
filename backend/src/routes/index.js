const express = require('express');
const router = express.Router();

// Importar as rotas individuais
const filterRoutes = require('./filter.routes');
const userRoutes = require('./user.routes');
const movieRoutes = require('./movie.routes')
const sessionRoutes = require('./session.routes');
const seatRoutes = require('./seat.routes');
const ticketRoutes = require('./tickets.routes');

// Usar as rotas individuais
router.use('/filters', filterRoutes);
router.use('/users', userRoutes);
router.use('/movies', movieRoutes);
router.use('/sessions', sessionRoutes);
router.use('/seats', seatRoutes);
router.use('/tickets', ticketRoutes);

// Exportar o roteador centralizado
module.exports = router;
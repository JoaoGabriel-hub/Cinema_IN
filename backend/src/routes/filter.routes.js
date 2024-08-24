const express = require('express');
const filterRoutes = express.Router();

// Inclusão dos Controllers
const filterController = require('../controllers/filter.controller');

// Rotas
filterRoutes.get('/', filterController.getGenres);
filterRoutes.get('/hr', filterController.getMoviesByGenreAndRating);
filterRoutes.get('/hr/:movieId/:neighborhood', filterController.getSessionsByNeighborhood);

// Exportação
module.exports = filterRoutes;
const express = require('express');
const filterRoutes = express.Router();

// Inclusão dos Controllers
const filterController = require('../controllers/filter.controller');

// Rotas
filterRoutes.get('/genre', filterController.getGenres);
filterRoutes.get('/moviesfilter', filterController.getMoviesByGenreAndRating);

// Exportação
module.exports = filterRoutes;
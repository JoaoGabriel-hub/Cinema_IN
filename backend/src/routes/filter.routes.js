const express = require('express');
const filterRoutes = express.Router();

// Inclusão dos Controllers
const filterController = require('../controllers/filter.controller');

// Rotas
filterRoutes.get('/', filterController.getGenres);
filterRoutes.get('/hr', filterController.getMoviesByGenreAndRating);

// Exportação
module.exports = filterRoutes;
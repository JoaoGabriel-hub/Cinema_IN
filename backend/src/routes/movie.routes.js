const express = require('express');
const movieRoutes = express.Router();

// Inclusão dos middlewares

// Inclusão dos Controllers

const movieController = require('../controllers/movie.controllers');

movieRoutes.get('/:id', movieController.getMovieId);
movieRoutes.get('/', movieController.getMovie);
movieRoutes.post('/', movieController.postMovie);

// Exportação
module.exports = movieRoutes;
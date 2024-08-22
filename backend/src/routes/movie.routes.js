const express = require('express');
const movieRoutes = express.Router();

// Inclusão dos middlewares

// Inclusão dos Controllers

const movieController = require('../controllers/movie.controllers');

movieRoutes.get('/', movieController.getMovie);


// Exportação
module.exports = movieRoutes;
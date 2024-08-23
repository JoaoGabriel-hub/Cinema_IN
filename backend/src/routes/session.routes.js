const express = require('express');
const sessionRoutes = express.Router();

// Inclusão dos middlewares

// Inclusão dos Controllers

const sessionController = require('../controllers/sessions.controllers');

sessionRoutes.get('/city', sessionController.getCities);
sessionRoutes.get('/:id', sessionController.getSession);
sessionRoutes.post('/:id', sessionController.postSession);

// Exportação
module.exports = sessionRoutes;
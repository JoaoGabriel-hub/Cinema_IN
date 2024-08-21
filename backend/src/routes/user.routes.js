const express = require('express');
const userRoutes = express.Router();

const { registerUser } = require('../controllers/user.controllers');

// Rota para registrar um usuário
userRoutes.post('/', registerUser);

// Exportando 
module.exports = userRoutes;
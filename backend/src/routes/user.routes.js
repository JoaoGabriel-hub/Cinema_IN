const express = require('express');
const userRoutes = express.Router();

const { registerUser } = require('../controllers/user.controller');

// Rota para registrar um usuário
userRoutes.post('/register', registerUser);

// Exportando 
module.exports = userRoutes;
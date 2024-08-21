const express = require('express');
const userRoutes = express.Router();

const { registerUser, loginUser } = require('../controllers/user.controllers');

// Rota para registrar um usuário
userRoutes.post('/register', registerUser);

// Rota para logar um usuário existente
userRoutes.post('/login', loginUser);

module.exports = userRoutes;
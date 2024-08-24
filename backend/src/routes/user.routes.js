const express = require('express');
const userRoutes = express.Router();

const { registerUser, loginUser, getUser } = require('../controllers/user.controllers');


// Rota pegar id do usuario

userRoutes.get('/:username', getUser);

// Rota para registrar um usuário
userRoutes.post('/register', registerUser);

// Rota para logar um usuário existente
userRoutes.post('/login', loginUser);


module.exports = userRoutes;
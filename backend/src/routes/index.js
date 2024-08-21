const express = require('express');
const router = express.Router();

// Importar as rotas individuais
const filterRoutes = require('./filter.routes');
const userRoutes = require('./user.routes');

// Usar as rotas individuais
router.use('/filters', filterRoutes);
router.use('/users', userRoutes);

// Exportar o roteador centralizado
module.exports = router;
const express = require('express');
const router = express.Router();

// Importar as rotas individuais
const filterRoutes = require('./filter.routes');

// Usar as rotas individuais
router.use('/filters', filterRoutes);

// Exportar o roteador centralizado
module.exports = router;
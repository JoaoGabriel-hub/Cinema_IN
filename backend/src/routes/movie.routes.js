const express = require('express');
const movieRoutes = express.Router();

// Inclusão dos middlewares

// Inclusão dos Controllers
app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
// Exportação
module.exports = movieRoutes;
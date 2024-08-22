const { Movie } = require('../models/models'); 

const getMovie = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const postMovie = async (req, res) => {
    const { title, imageUrl, synopsis, genre, rating, director } = req.body;

    try {
        // Criar um novo filme
        const newMovie = await Movie.create({ title, imageUrl, synopsis, genre, rating, director });
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getMovie,
    postMovie
};
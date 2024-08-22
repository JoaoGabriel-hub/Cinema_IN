const { Movie } = require('../models/models'); 

const getMovie = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
        
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getMovie
};
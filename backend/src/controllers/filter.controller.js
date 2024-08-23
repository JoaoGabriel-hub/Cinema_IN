const { Movie } = require('../models/models'); 

const getGenres = async (req, res) => {
    try {
        // Buscar todos os filmes do banco de dados
        const movies = await Movie.findAll();

        // Criar um conjunto para armazenar gêneros únicos
        const genresSet = new Set();

        // Iterar sobre os filmes e adicionar os gêneros ao conjunto
        movies.forEach(movie => {
            if (movie.genre) {
                genresSet.add(movie.genre);
            }
        });

        
        const genresArray = Array.from(genresSet);

        
        res.status(200).json(genresArray);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// GET /movies?genre=Action&rating=4.5&page=2&limit=10
const getMoviesByGenreAndRating = async (req, res) => {
    try {
        const { genre, rating, page = 1, limit = 10 } = req.query;
        const whereClause = {};

        if (genre) {
            whereClause.genre = genre;
        }

        if (rating) {
            const ratingValue = parseFloat(rating);
            if (isNaN(ratingValue) || ratingValue < 0 || ratingValue > 5) {
                return res.status(400).json({ message: 'Rating must be a number between 0 and 5' });
            }
            whereClause.rating = ratingValue;
        }

        const offset = (page - 1) * limit;

        const { count, rows: movies } = await Movie.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset)
        });

        res.status(200).json({
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            currentPage: parseInt(page),
            movies
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSessionsByNeighborhood = async (req, res) => {
    try {
        const { neighborhood } = req.query;
        const whereClause = {};

        if (neighborhood) {
            whereClause.neighborhood = neighborhood;
        }

        const sessions = await Session.findAll({
            where: whereClause,
            include: [{ model: Movie, as: 'movie' }]
        });

        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = {
    getGenres,
    getMoviesByGenreAndRating,
    getSessionsByNeighborhood
};
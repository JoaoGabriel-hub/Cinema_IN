const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Leitura de Filmes
const { Movie } = require('./src/models/models'); 

app.get('/movies', async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para criar um novo filme
app.post('/movies', async (req, res) => {
    const { title, imageUrl, synopsis, genre, rating, director } = req.body;

    try {
        // Criar um novo filme
        const newMovie = await Movie.create({ title, imageUrl, synopsis, genre, rating, director });
        res.status(201).json(newMovie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Importar o modelo Session
const { Session } = require('./src/models/models');

// Leitura de Sessões
app.get('/sessions', async (req, res) => {
    try {
        const sessions = await Session.findAll();
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Rota para criar uma nova sessão
app.post('/sessions', async (req, res) => {
    const { movieId, time } = req.body;

    if (!movieId || !time) {
        return res.status(400).json({ error: 'Não foi possivel resgatar o movieId ou o time.' });
    }

    try {
        // Criar uma nova sessão
        const newSession = await Session.create({ movieId, time });

        // Criar assentos automáticos para a sessão
        const seats = await criarAssentos(newSession.id);

        res.status(201).json({ id: newSession.id, movieId, time, seats });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Importar o modelo Seat
const { Seat } = require('./src/models/models');

// Função para criar assentos automaticamente
async function criarAssentos(sessionId) {
    const seats = [];
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    rows.forEach(row => {
        for (let number = 1; number <= 18; number++) {
            seats.push({ sessionId, row, number, ocupado: false });
        }
    });

    // Inserir todos os assentos de uma vez
    await Seat.bulkCreate(seats);

    return seats;
}

// Leitura de Assentos por Sessão
app.get('/sessoes/:id/assentos', async (req, res) => {
    const sessionId = req.params.id;

    try {
        const seats = await Seat.findAll({ where: { sessionId } });
        res.json(seats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
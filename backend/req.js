const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data');

const app = express();
app.use(bodyParser.json());

// Leitura de Filmes
const { Movie } = require('./models'); 

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

// Leitura de Sessões
app.get('/sessions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const sessions = await Session.findAll({ where: { id } });
        if (sessions.length === 0) {
            return res.status(404).json({ error: 'No sessions found for the given id' });
        }
        res.json(sessions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Criação de Sessão com assentos automáticos
app.post('/sessions', (req, res) => {
    const { movieId, time } = req.body;

    if (!movieId || !time) {
        return res.status(400).json({ error: 'FilmeId e Horario são obrigatórios' });
    }

    db.run('INSERT INTO sessoes (filmeId, horario) VALUES (?, ?)', [movieId, time], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const sessionId = this.lastID;
        const seats = criarAssentos(sessionId);

        res.status(201).json({ id: sessionId, movieId, time, seats });
    });
});

// Função para criar assentos automaticamente
function criarAssentos(sessionId) {
    const seats = [];
    const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    rows.forEach(rows => {
        for (let number = 1; number <= 18; number++) {
            db.run('INSERT INTO seats (sessionId, row, number) VALUES (?, ?, ?)', 
                [sessionId, row, number]);
            seats.push({ row, number, ocupado: false });
        }
    });

    return seats;
}

// Leitura de Assentos por Sessão
app.get('/sessoes/:id/assentos', (req, res) => {
    const sessionId = req.params.id;
    db.all('SELECT * FROM assentos WHERE sessionId = ?', [sessionId], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


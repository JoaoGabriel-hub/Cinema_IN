const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data');

const app = express();
app.use(bodyParser.json());

// Leitura de Filmes
app.get('/movies', (req, res) => {
    db.all('SELECT * FROM movies', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
});

// Leitura de Sessões
app.get('/sessions', (req, res) => {
    db.all('SELECT * FROM sessions', [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
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


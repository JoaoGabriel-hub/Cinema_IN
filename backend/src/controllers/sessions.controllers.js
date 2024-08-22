const { Session } = require('../models/models'); 

const getSession = async (req, res) => {
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
};
// Importar o modelo Seat
const { Seat } = require('../models/models');

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

const postSession = async (req, res) => {
    const { movieId, time, city, neighborhood, type, sessionId } = req.body;
    
    try {
        // Criar uma nova sessão
        const newSession = await Session.create({ movieId, time, city, neighborhood, type, sessionId });

        // Criar assentos automáticos para a sessão
        const seats = await criarAssentos(newSession.sessionId);

        res.status(201).json({ id: newSession.sessionId, movieId, time, city, neighborhood, type, seats });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getSession,
    postSession
};
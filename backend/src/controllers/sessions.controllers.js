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
async function criarAssentos(sessionId, price) {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const seats = [];

    rows.forEach(row => {
        for (let number = 1; number <= 18; number++) {
            seats.push({ sessionId, row, number, price, ocupado: false });
        }
    });

    // Inserir todos os assentos de uma vez
    Seat.bulkCreate(seats);
};

const postSession = async (req, res) => {
    const { time, city, neighborhood, type, sessionId } = req.body;
    const { id: movieId } = req.params;
    const { price } = req.body; 
    
    try {
        // Criar uma nova sessão
        const newSession = await Session.create({ movieId, time, city, neighborhood, type, sessionId });

        // Criar assentos automáticos para a sessão
        const seats = await criarAssentos(newSession.sessionId, price);

        res.status(201).json(newSession);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const { Session } = require('../models/models');

const getNeighborhoods = async (req, res) => {
    const { city } = req.params;

    try {
        // Buscar todas as sessões da cidade especificada
        const neighborhoods = await Session.findAll({
            attributes: ['neighborhood'],
            where: { city },
            group: ['neighborhood']
        });

        res.json(neighborhoods);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getSession,
    postSession,
    getNeighborhoods
};
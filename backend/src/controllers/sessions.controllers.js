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

const postSession = async (req, res) => {
    const { movieId, time } = req.body;
    
    try {
        // Criar uma nova sessão
        const newSession = await Session.create({ movieId, time });

        // Criar assentos automáticos para a sessão
        const seats = await criarAssentos(newSession.id);

        res.status(201).json({ id: newSession.id, movieId, time, seats });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getSession,
    postSession
};
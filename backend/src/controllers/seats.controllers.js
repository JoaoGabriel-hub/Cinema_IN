const { Seat } = require('../models/models'); 

const getSeats = async (req, res) => {
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
};

module.exports = getSeats;
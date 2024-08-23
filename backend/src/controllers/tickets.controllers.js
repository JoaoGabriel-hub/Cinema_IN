const { Seat } = require('../models/models');

// Função para comprar um ingresso
const buyTickets = async (req, res) => {
    const { sessionId, row, number } = req.body;

    try {
        // Verificar se o assento está disponível
        const seat = await Seat.findOne({ where: { sessionId, row, number } });

        if (!seat) {
            return res.status(404).json({ error: 'Assento não encontrado' });
        }

        if (seat.ocupado) {
            return res.status(400).json({ error: 'Assento já está ocupado' });
        }

        // Marcar o assento como ocupado
        seat.ocupado = true;
        await seat.save();

        res.status(200).json({ message: 'Ingresso comprado com sucesso', seat });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    buyTickets
};
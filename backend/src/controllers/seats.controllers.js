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

const updateSeat = async (req, res) => {
    const seatId = req.params.id;
    const { userId, userName, userCpf } = req.body; // Dados do usuário que está comprando

    try {
        const seat = await Seat.findByPk(seatId);

        if (!seat) {
            return res.status(404).json({ error: 'Seat not found' });
        }

        // Atualizar apenas os campos que estão nulos
        if (seat.userId === null) seat.userId = userId;
        if (seat.userName === null) seat.userName = userName;
        if (seat.ocupation === false) seat.ocupation = true;
        if (seat.userCpf === null) seat.userCpf = userCpf;

        await seat.save();
        res.json(seat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getSeats,
    updateSeat
};
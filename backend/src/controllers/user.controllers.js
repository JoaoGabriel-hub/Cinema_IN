const bcrypt = require('bcrypt');
const { User } = require('../models/models');  // Certifique-se de desestruturar corretamente


const registerUser = async (req, res) => {
    const { name, lastName, cpf, birthday, username, email, password } = req.body;

    try {
        // Verifique se o e-mail, CPF ou nome de usuário já estão em uso
        const existingUser = await User.findOne({ where: { email } });
        const existingCpf = await User.findOne({ where: { cpf } });
        const existingUsername = await User.findOne({ where: { username }});
      
        if (existingUser) {
            return res.status(400).json({ message: 'E-mail já cadastrado.' });
        }
        else if (existingCpf) {
            return res.status(400).json({ message: 'CPF já cadastrado.' });
        }
        else if (existingUsername) {
            return res.status(400).json({ message: 'Nome de usuário já existente.' });
        }

        // Criptografe a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crie o novo usuário
        const user = await User.create({
            name,
            lastName,
            cpf,
            birthday,
            username,
            email,
            password: hashedPassword,
        });

        // Resposta de sucesso
        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

module.exports = { registerUser };

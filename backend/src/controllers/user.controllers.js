const bcrypt = require('bcrypt');
const { User } = require('../models/models');  
const Sequelize = require('sequelize');


const registerUser = async (req, res) => {
    const { userId, name, lastName, cpf, birthday, username, email, password } = req.body;

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

        // Criptografando a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criando o novo usuário
        const user = await User.create({
            userId,
            name,
            lastName,
            cpf,
            birthday,
            username,
            email,
            password: hashedPassword,
        });

        return res.status(201).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao registrar usuário' });
    }
};

const loginUser = async (req, res) => {
    const { usernameOrEmail, password } = req.body;

    try {
        // Verificando se o usuário existe pelo nome de usuário ou e-mail
        const user = await User.findOne({
            where: {
                [Sequelize.Op.or]: [{ username: usernameOrEmail }, { email: usernameOrEmail }]
            }
        });

        if (!user) {
            return res.status(400).json({ message: 'Usuário ou e-mail não encontrado.' });
        }

        // Verificando se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Senha incorreta.' });
        }

        return res.status(201).json({ message: 'Usuário logado com sucesso!' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Erro ao realizar login' });
    }
};

module.exports = { registerUser, loginUser };
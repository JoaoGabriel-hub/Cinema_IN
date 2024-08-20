const sequelize = require('../config/database');

async function createDatabase() {
    try {
        await sequelize.sync({ alter: true});
        console.log("Banco de dados criado com sucesso.");
    } catch (error) {
        console.log("Erro na criação do Banco de Dados", error);
    }
};

module.exports = createDatabase;
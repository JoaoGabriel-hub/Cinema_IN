const { DataTypes } = require('sequelize');
const sequelize = require("../../config/database");
const { v4: UUIDV4 } = require("uuid");

// Modelo dos filmes
const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    synopsis: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rating: { // Talvez trocar esse nome
        type: DataTypes.INTEGER,
        allowNull: false
    },
    director: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Modelo das sessões
const Session = sequelize.define("Session", {
    time: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

// Modelo dos assentos
const Seat = sequelize.define("Seat", {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
        defaultValue: () => UUIDV4(),
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    row: {
        type: DataTypes.STRING,
        allowNull: false
    },

    price: {
        typ: DataTypes.FLOAT,
        allowNull: false
    },
    userCpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userName: {
    type: DataTypes.STRING,
    allowNull: false
    }
});

// Modelo do Usuário (Conteúdo BONUS)
const User = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Relação entre Movie e Session
Movie.hasMany(Session, {onDelete: "CASCADE", foreignKey: "SessionTime"}); // Em caso de erros, devo olhar essa linha, principalmente a foreignKey
Session.belongsTo(Movie);

// Relação entre Session e Seat
Session.hasMany(Seat, {onDelete: "CASCADE", foreignKey: "SeatId"}); // Em caso de erros, devo olhar essa linha, principalmente a foreignKey
Seat.belongsTo(Session);

// Exportação das variáveis
module.exports = {
    User,
    Seat,
    Session,
    Movie
};
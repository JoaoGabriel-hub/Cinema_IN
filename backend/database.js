const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(() => {
    // Tabelas de Filmes e Sessões
    db.run(`CREATE TABLE movies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        synopsis TEXT,
        genre TEXT,
        rating INTEGER,
        director TEXT
    )`);

    db.run(`CREATE TABLE sessions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        movieId INTEGER,
        time TEXT,
        city TEXT,
        neighborhood TEXT,
        type INTEGER,
        FOREIGN KEY(movieId) REFERENCES movie(id)
    )`);

    db.run(`CREATE TABLE seats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        sessionId INTEGER,
        row TEXT,
        number INTEGER,
        price FLOAT,
        userCpf TEXT,
        userName TEXT,
        ocupado INTEGER DEFAULT 0,
        FOREIGN KEY(sessionId) REFERENCES session(id)
    )`);

    db.run(`CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        lastName TEXT,
        cpf INTEGER,
        birthday TEXT,
        username TEXT,
        email TEXT,
        password TEXT,
        ocupado INTEGER DEFAULT 0,
        FOREIGN KEY(sessionId) REFERENCES session(id)
    )`);

    // Adicionando filmes de exemplo
    db.run(`INSERT INTO movies (title) VALUES ('Movie 1')`);
    db.run(`INSERT INTO movies (title) VALUES ('Movie 2')`);
});

module.exports = db;

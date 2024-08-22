const express = require('express')
const cors = require('cors');
const app = express()
const port = 3000

app.use(cors());

const routes = require('./routes/index');
const createDb = require('../scripts/createDatabase');

app.use(express.json())
app.use('/', routes);

app.get('/', (req, res) => {
    res.send('hello!')
})

createDb();

app.listen(port, () => {
    console.log('Servidor está rodando na porta ' + port)
})
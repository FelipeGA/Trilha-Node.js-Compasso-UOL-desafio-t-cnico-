const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Inicializando o servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//Rota raiz da API
app.get('/', (req,res) => {
    res.send("API de registro de clientes.");
});
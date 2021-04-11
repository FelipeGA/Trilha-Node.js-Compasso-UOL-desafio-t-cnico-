const express = require('express');
const cidadeRoutes = require('./API/routes/cidadeRoute.js');
const clienteRoutes = require('./API/routes/clienteRoute.js');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//Inicializando o servidor na porta 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

//Rota raiz da API
app.get('/', (req,res) => {
    res.send("API de registro de clientes e cidades.");
});

//Rotas raiz para acesso das entidades: clientes e cidades
app.use('/clientes', clienteRoutes);
app.use('/cidades', cidadeRoutes);
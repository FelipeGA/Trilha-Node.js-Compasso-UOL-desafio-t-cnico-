const database = require('../config/dataBase.js');
const Cliente = require('../models/cliente.js'); 

//GET clientes
module.exports.getClientes = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cliente = await Cliente.findAll();
            console.log(cliente);

            res.send(cliente)
        } catch (error) {
            console.log(error);
            res.send('Erro ao consultar cliente por Id')
        }
    })();
}

//GET clientes by Id
module.exports.getClientesById = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cliente = await Cliente.findByPk(req.params.clienteId);
            console.log(cliente);

            res.send(cliente)
        } catch (error) {
            console.log(error);
            res.send('Erro ao consultar cliente por Id')
        }
    })();
}

//GET clientes by nome
module.exports.getClientesByNome = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cliente = await Cliente.findOne({ where: {nome: req.params.clienteNome} });
            console.log(cliente);

            res.send(cliente)
        } catch (error) {
            console.log(error);
            res.send('Erro ao consultar cliente por nome')
        }
    })();
}

//POST clientes
module.exports.postClientes = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);
     
            const resultadoCreate = await Cliente.create({
                nome: req.body.nome,
                sexo: req.body.sexo,
                dataNascimento: req.body.dataNascimento ,
                idade: req.body.idade,
                cidadeId: req.body.cidadeId
            })
            console.log(resultadoCreate);

            res.send(resultadoCreate)
        } catch (error) {
            console.log(error);
            res.send('Erro ao resgistrar cliente.')
        }
    })();
}

//UPDATE nome dos clientes
module.exports.putClientesById = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cliente = await Cliente.findByPk(req.body.id);
            console.log(cliente);

            await cliente.update({
                nome: req.body.nome
            });

            res.send(cliente)
        } catch (error) {
            console.log(error);
            res.send('Erro tentar atualizar o nome do cliente')
        }
    })();
}

//DELETE clientes by Id
module.exports.delClientes = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cliente = await Cliente.findByPk(req.params.clienteId);
            console.log(cliente);

            await cliente.destroy();

            res.send(`Cliente ${req.params.clienteId} deletado`)
        } catch (error) {
            console.log(error);
            res.send(`Erro ao tentar deletar o cliente do id: ${req.params.clienteId}`)
        }
    })();
}
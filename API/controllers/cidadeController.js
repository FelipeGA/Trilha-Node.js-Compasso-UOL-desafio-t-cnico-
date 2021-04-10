const database = require('../config/dataBase.js');
const Cidade = require('../models/cidade.js'); 

//GET cidades
module.exports.getCidades = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cidades = await Cidade.findAll();
            console.log(cidades);

            res.send(cidades)
        } catch (error) {
            console.log(error);
            res.send('Erro ao consultar cidades')
        }
    })();
}

//GET cidades by Id
module.exports.getCidadesById = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cidades = await Cidade.findByPk(req.params.cidadeId);
            console.log(cidades);

            res.send(cidades)
        } catch (error) {
            console.log(error);
            res.send('Erro ao consultar cidades por Id')
        }
    })();
}

//GET cidades by nome
module.exports.getCidadesByNome = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cidades = await Cidade.findOne({ where: {nome: req.params.cidadeNome} });
            console.log(cidades);

            res.send(cidades)
        } catch (error) {
            console.log(error);
            res.send('Erro ao consultar cidades por nome')
        }
    })();
}

//GET cidades by estado
module.exports.getCidadesByEstado = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);

            const cidades = await Cidade.findOne({ where: {estado: req.params.cidadeEstado} });
            console.log(cidades);

            res.send(cidades)
        } catch (error) {
            console.log(error);
            res.send('Erro ao consultar cidades por estado')
        }
    })();
}

//POST cidades
module.exports.postCidades = (req,res) => {
    (async () => {
     
        try {
            const resultado = await database.sync();
            console.log(resultado);
     
            const resultadoCreate = await Cidade.create({
                nome: req.body.nome,
                estado: req.body.estado
            })
            console.log(resultadoCreate);

            res.send(resultadoCreate)
        } catch (error) {
            console.log(error);
            res.send('Erro ao resgistrar cidade.')
        }
    })();
}
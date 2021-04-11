const express = require('express');
const { getCidades,getCidadesById,getCidadesByNome,getCidadesByEstado,postCidades } = require('../controllers/cidadeController.js');

const router = express.Router();

//GET de todas as cidades
router.get('/', getCidades);

//GET de cidades por Id
router.get('/:cidadeId', getCidadesById);

//GET de cidades por nome
router.get('/nome/:cidadeNome', getCidadesByNome);

//GET de cidades por estado
router.get('/estado/:cidadeEstado', getCidadesByEstado);

//POST para cadastro de novas cidades
router.post('/', postCidades);

module.exports = router;
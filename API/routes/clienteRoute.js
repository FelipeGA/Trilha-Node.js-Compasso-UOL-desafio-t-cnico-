const express = require('express');
const { getClientes,getClientesById,getClientesByNome,postClientes,putClientesById,delClientes } = require('../controllers/clienteController.js');

const router = express.Router();

//GET de todos os clientes
router.get('/', getClientes)

//GET de clientes por Id
router.get('/id/:clienteId', getClientesById);

//GET de clientes por nome
router.get('/nome/:clienteNome', getClientesByNome);

//POST para cadastro de novos clientes
router.post('/', postClientes);

//PUT para atualização do nome de um cliente
router.put('/', putClientesById);

//DELETE para deleção de clientes a partir do Id
router.delete('/:clienteId', delClientes);

module.exports = router;
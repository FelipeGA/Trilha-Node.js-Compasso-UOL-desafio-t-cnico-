const express = require('express');
const { getClientes,postClientes,delClientes } = require('../controllers/clienteController.js');

const router = express.Router();

router.get('/', getClientes);
router.post('/', postClientes);
router.delete('/', delClientes);

module.exports = router;
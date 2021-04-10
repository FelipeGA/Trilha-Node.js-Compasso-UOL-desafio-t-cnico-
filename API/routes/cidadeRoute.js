const express = require('express');
const { getCidades,getCidadesById,getCidadesByNome,getCidadesByEstado,postCidades } = require('../controllers/cidadeController.js');

const router = express.Router();

router.get('/', getCidades);
router.get('/:cidadeId', getCidadesById);
router.get('/nome/:cidadeNome', getCidadesByNome);
router.get('/estado/:cidadeEstado', getCidadesByEstado);
router.post('/', postCidades);

module.exports = router;
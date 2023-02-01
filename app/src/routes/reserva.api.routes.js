const {Router} = require('express');
const router = Router();

const {all, reservaId , nuevaReserva, reservaBorrar} = require('../controllers/api/reservaApi.js');

router.get('/', all);

router.get('/:id', reservaId);

router.post('/', nuevaReserva);

router.delete('/:id', reservaBorrar);

module.exports = router;
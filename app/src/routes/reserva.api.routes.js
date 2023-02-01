const {Router} = require('express');
const router = Router();

const {all, reservaId , nuevaReserva} = require('../controllers/api/reservaApi.js');

router.get('/', all);

router.get('/:id', reservaId);

router.post('/', nuevaReserva);


module.exports = router;
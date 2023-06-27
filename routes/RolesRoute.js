const { Router } = require('express');
const routes = Router();

const {
	getRoles,
	getRolId,
	postRol,
	putRol,
	deleteRol,
} = require('../controllers/RolesController');

routes.get('/', getRoles);
routes.get('/:id', getRolId);
routes.post('/', postRol);
routes.put('/', putRol);
routes.delete('/:id', deleteRol);

module.exports = routes;
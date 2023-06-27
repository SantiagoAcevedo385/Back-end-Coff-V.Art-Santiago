const { Router } = require("express");
const routes = Router();

const {getInsumo, getInsumoId, postInsumo, putInsumo, deleteInsumo} = require("../controllers/InsumoController");

routes.get("/", getInsumo);
routes.get("/:id", getInsumoId);
routes.post("/", postInsumo);
routes.put('/', putInsumo);
routes.delete('/:id', deleteInsumo);

module.exports = routes;
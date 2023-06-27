const { Router } = require("express");
const routes = Router();

const {getEmpaquetados, postEmpaquetado,putEmpaquetado,deleteEmpaquetado,getEmpaquetadoId} = require("../controllers/EmpaquetadoController");

routes.get("/", getEmpaquetados);
routes.post("/", postEmpaquetado);
routes.put("/", putEmpaquetado);
routes.delete("/", deleteEmpaquetado);
routes.get("/:Id", getEmpaquetadoId);

module.exports = routes;
const { Router } = require("express");
const routes = Router();

const {getContracts, postContract,putContract,deleteContract,getContractId} = require("../controllers/ContractController");

routes.get("/", getContracts);
routes.post("/", postContract);
routes.put("/", putContract);
routes.delete("/", deleteContract);
routes.get("/:id", getContractId);


module.exports = routes;
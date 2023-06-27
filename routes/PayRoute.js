const { Router } = require("express");
const routes = Router();

const {getPays, postPay,putPay,deletePay,getPayId} = require("../controllers/PayController");

routes.get("/", getPays);
routes.post("/", postPay);
routes.put("/", putPay);
routes.delete("/:id", deletePay);
routes.get("/:id", getPayId);


module.exports = routes;
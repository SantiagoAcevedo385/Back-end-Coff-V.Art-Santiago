const { Router } = require("express");
const routes = Router();

const {getShop, getShopId, postShop, putShop, deleteShop} = require("../controllers/ShopController");

routes.get("/", getShop);
routes.get("/:id", getShopId);
routes.post("/", postShop);
routes.put('/', putShop);
routes.delete('/:id', deleteShop);

module.exports = routes;
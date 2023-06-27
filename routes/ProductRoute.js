const { Router } = require("express");
const routes = Router();

const {getProduct, getProductId, postProduct, putProduct, deleteProduct} = require("../controllers/ProductController");

routes.get("/", getProduct);
routes.get("/:id", getProductId);
routes.post("/", postProduct);
routes.put('/', putProduct);
routes.delete('/:id', deleteProduct);

module.exports = routes;
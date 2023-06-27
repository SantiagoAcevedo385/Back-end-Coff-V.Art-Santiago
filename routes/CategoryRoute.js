const { Router } = require("express");
const routes = Router();

const {getCategory, getCategoryId, postCategory, putCategory, deleteCategory} = require("../controllers/CategoryController");

routes.get("/", getCategory);
routes.get("/:id", getCategoryId);
routes.post("/", postCategory);
routes.put('/', putCategory);
routes.delete('/:id', deleteCategory);

module.exports = routes;
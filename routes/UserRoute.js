const { Router } = require("express");
const routes = Router();

const {getUsers, getUserId, postUser, putUser, deleteUser} = require("../controllers/UserController");

routes.get("/", getUsers);
routes.get("/:id", getUserId);
routes.post("/", postUser);
routes.put('/', putUser);
routes.delete('/:id', deleteUser);

module.exports = routes;
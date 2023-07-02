const { Router } = require("express");
const routes = Router();

const {getUsers, getUserId, postUser, putUser, deleteUser} = require("../controllers/UserController");
const  {isAuthenticated}  = require('../controllers/auth');

routes.get("/", isAuthenticated, getUsers);
routes.get("/:id",  getUserId);
routes.post("/", isAuthenticated, postUser);
routes.put('/', putUser);
routes.delete('/:id', deleteUser);

module.exports = routes;
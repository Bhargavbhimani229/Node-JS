const { Router } = require("express");
const catController = require("../controllers/catControllers");
const catRouters  = Router();

catRouters.get("/",catController.homePage);

module.exports = catRouters;
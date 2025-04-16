const { Router } = require("express");

const blogRouter = Router();
const blogController = require("../controller/blogController");

blogRouter.get("/", blogController.homePage);

module.exports = blogRouter;

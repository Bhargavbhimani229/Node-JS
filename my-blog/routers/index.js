const { Router } = require("express");
const blogRouter = require("./blogRouter");
const IndexRouter = Router();

IndexRouter.use("/",blogRouter);

module.exports = IndexRouter;

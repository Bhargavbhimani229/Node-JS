const { Router } = require("express");

const indexRouter = Router();
const blogRouter = require("../routers/blogRouter");

indexRouter.use("/",blogRouter);

module.exports = indexRouter;
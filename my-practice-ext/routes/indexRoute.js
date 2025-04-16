const { Router } = require("express");

const indexRouter = Router();
const blogRoute = require("./blogRoute");

indexRouter.use("/", blogRoute);

module.exports = indexRouter;

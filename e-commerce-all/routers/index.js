const { Router } = require("express");
const catRouters = require("./catRouters");
const indexRouter = Router();

indexRouter.use("/",catRouters);

module.exports = indexRouter;
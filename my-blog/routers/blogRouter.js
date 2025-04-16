const { Router } = require("express");
const blogController = require("../controllers/blogController");
const upload = require("../middleware/imageUploads");
const passport = require("passport");
const blogRouter = Router();

blogRouter.get("/login",blogController.loginPage);
blogRouter.get("/registerPage",blogController.registerPage);
blogRouter.post("/registerPage",blogController.createPost);
blogRouter.post("/login",passport.authenticate("local",{failureRedirect:"/login", successRedirect:"/"}))
blogRouter.use(passport.userPassportAuth);

blogRouter.get('/',blogController.homePage);
blogRouter.get("/addBlog",blogController.blogPage);
blogRouter.post(
  "/addBlog",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "authorImage", maxCount: 1 },
  ]),
  blogController.create
);
blogRouter.get("/singleBlog/:id", blogController.singleBlog);
module.exports = blogRouter;

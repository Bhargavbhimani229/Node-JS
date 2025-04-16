const { Router } = require("express");

const blogController = require("../controllers/blogController");
const upload = require("../middlewares/blogImage");
const passport = require("passport");

const blogRouter = Router();

// blogRouter.use(passport.sweetFlash);

blogRouter.get("/login", blogController.login);
blogRouter.get("/singUp", blogController.singUp);
blogRouter.post("/createCred", blogController.createCred);
blogRouter.post("/login",passport.authenticate("local",{ failureRedirect: "/login" }),blogController.loginFlash);
blogRouter.use(passport.userPassportAuth);

blogRouter.get("/homePage", blogController.homePage);
blogRouter.post("/create", upload, blogController.create);
blogRouter.get("/form", blogController.formPage);
blogRouter.get("/delete/:id", blogController.blogDelete);
blogRouter.get("/edit/:id", blogController.blogEdit);
blogRouter.post("/update/:id", upload, blogController.blogUpdate);
blogRouter.get("/blogView/:id", blogController.view);
blogRouter.get("/profile", blogController.profile);
blogRouter.get("/logOut",blogController.logOut);
blogRouter.get("/contact",blogController.contactPage);
blogRouter.get("/aboutPage",blogController.aboutPage);
blogRouter.get("/change-password", blogController.changePasswordPage);
blogRouter.post("/change-password", blogController.submitChangePassword);

module.exports = blogRouter;

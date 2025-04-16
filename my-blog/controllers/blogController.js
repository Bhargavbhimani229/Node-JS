const { render } = require("ejs");
const BlogModel = require("../models/blogSchema");
const userModel = require("../models/userSchema");

module.exports.homePage = async (req, res) => {
  let blog;
  try {
    blog = await BlogModel.find();
    return res.render("index", { blog });
  } catch (error) {
    console.log(error.message);
    return res.render("index", { blog: [] });
  }
};

module.exports.blogPage = (req, res) => {
  return res.render("./pages/addBlog");
};

module.exports.create = async (req, res) => {
  try {
    let imageUrl = req.files?.image?.[0]?.path || "";
    let authorUrl = req.files?.authorImage?.[0]?.path || "";
    console.log(req.body);
    let blog = await BlogModel.create({
      ...req.body,
      image: imageUrl,
      authorImage: authorUrl,
    });
    console.log("created...");
    return res.render("./pages/addBlog");
  } catch (error) {
    return res.json({ message: error.message });
  }
};

// Fetch Single Blog Page
module.exports.singleBlog = async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id);
    return res.render("pages/single-blog", { blog });
  } catch (error) {
    console.error(error.message);
    return res.render("pages/single-blog", { blog: [] });
  }
};

module.exports.loginPage = (req, res) => {
  return res.render("pages/login");
};
module.exports.registerPage = (req, res) => {
  return res.render("pages/register");
};

module.exports.createPost = async (req, res) => {
  try {
    let { username, email, password, confirmPassword } = req.body;
    console.log(req.body);
    if (password === confirmPassword) {
      let user = await userModel.create({ username, email, password , confirmPassword });
      console.log("User Created:", user);
     return res.render("./pages/login");
    } else {
      console.log("Password & Confirm Password should be the same!");
     return res.render("./pages/register");
    }
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

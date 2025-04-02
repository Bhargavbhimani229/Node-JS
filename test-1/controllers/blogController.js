const blogModel = require("../models/blogSchema");
const fs = require("fs");
const userCred = require("../models/pwSchema");

module.exports.homePage = async (req, res) => {
  try {
    let blogs = await blogModel.find({});
    return res.render("index", { blogs });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.AddBlogPage = (req, res) => {
  return res.render("pages/addBlog");
};

module.exports.addBlog = async (req, res) => {
  try {
    let blogs = await blogModel.create({ ...req.body, image: req.file.path });
    console.log("blog Created...!", blogs);
    return res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);

    if (blog) {
      fs.unlinkSync(blog.image);
      await blogModel.findByIdAndDelete(id);
      return res.redirect("/");
    } else {
      console.log("Blog not found...!");
      return res.redirect("/");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.editPage = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    return res.render("pages/edit", { blog });
  } catch (error) {
    console.log(error.message);
    return res.render("pages/edit", { blog: {} });
  }
};

module.exports.editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    let updateBlog = { ...req.body };
    const blog = await blogModel.findById(id);
    if (req.file) {
      fs.unlinkSync(blog.image);
      updateBlog.image = req.file.path;
      console.log("Blog Updated..");
    } else {
      updateBlog.image = req.body.old_image;
    }
    await blogModel.findByIdAndUpdate(id, updateBlog);
    return res.redirect("/");
  } catch (error) {
    console.log(error.messsage);
  }
};

module.exports.viewPage = async (req, res) => {
  let { id } = req.params;
  const blogs = await blogModel.findById(id);
  return res.render("pages/singal", { blogs });
};

module.exports.loginPage = (req,res) => {
  return res.render("pages/login");
}

module.exports.registerPage = (req,res) => {
  return res.render("pages/register");
}

module.exports.createCred = async (req, res) => {
  let { password, confirmPw } = req.body;
  if (password === confirmPw) {
    await userCred.create(req.body);
    res.render("./pages/login", req.body);
  } else {
    console.log("Password & Confirm Password should be same!");
    res.render("./pages/singUp", req.body);
  }
};


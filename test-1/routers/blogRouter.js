const { Router } = require("express");

const blogRoter = Router();

const blogController = require("../controllers/blogController");
const upload = require("../middlewares/blogMiddleware");
const userCred = require("../models/pwSchema");

blogRoter.get("/",blogController.homePage);

blogRoter.get("/addBlog",blogController.AddBlogPage);
blogRoter.post("/addBlog",upload,blogController.addBlog);

blogRoter.get("/delete/:id",blogController.deleteBlog);

blogRoter.get("/edit/:id",blogController.editPage);
blogRoter.post("/edit/:id",upload,blogController.editBlog);

blogRoter.get("/views/:id",blogController.viewPage);

blogRoter.get("/register",blogController.registerPage);
blogRoter.get("/login" , blogController.loginPage);
blogRoter.post("/createCred", blogController.createCred);

blogRoter.post('/login', async (req, res) => {
  try {
  const { username, password } = req.body;
  const user = await userCred.findOne({ username });
  if (!user) {
  return res.status(401).json({ error: 'Authentication failed' });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
  return res.status(401).json({ error: 'Authentication failed' });
  }
  const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
  expiresIn: '1h',
  });
  res.status(200).json({ token });
  } catch (error) {
  res.status(500).json({ error: 'Login failed' });
  }
  })

module.exports = blogRoter; 
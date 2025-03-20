const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  content: String,
  image: String,
  authorImage: String,
  category: String,
  tag : String,
  publishedDate: { type: Date, required: true },
})

const BlogModel = mongoose.model("BlogTbl",blogSchema);

module.exports = BlogModel;
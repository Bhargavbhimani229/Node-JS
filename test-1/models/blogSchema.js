const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    image: String,
    description: String,
    publishedDate : String,
  },
  { timestamps: true }
);

const blogModel = mongoose.model("blogTBL", blogSchema);
module.exports = blogModel;

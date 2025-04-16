const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema({

}, { timestamps: true });

const blogModel = mongoose.model("blogSchema", blogModel);

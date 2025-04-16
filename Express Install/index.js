// const express = require("express");
// const port = 8093;
// const app = express();
// app.set('view engine','ejs');


// app.get("/", (req, res) => {
//   res.render('index')
// });
// app.get("/about", (req, res) => {
//   res.render('about')
// });
// app.get("/contact", (req, res) => {
//   res.render('contact')
// });
// app.get("/blog", (req, res) => {
//   res.render('blog')
// });

// app.listen(port, (error) => {
//   if (error) {
//     console.log("serer is not start in port");
//   } else {
//     console.log("server is start");
//     console.log("http://localhost:" + port);
//   }
// });

const express = require('express');
const app = express();
const port = 8094;

app.set('view engine','ejs');

app.get('/',(req,res)=>{
  res.render('index');
})
app.get('/about',(req,res)=>{
  res.render('about');
})
app.get('/contact',(req,res)=>{
  res.render('contact');
})
app.get('/blog',(req,res)=>{
  res.render('blog');
})

app.listen(port,(err)=>{
  if(err){
    console.log("Server is not start");
  }
  else{
    console.log("sever is start");
    console.log("http://localhost:"+port);
  }
})



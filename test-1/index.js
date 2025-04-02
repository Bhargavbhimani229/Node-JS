const express = require("express");
const db = require("./configs/database");
const bodyParser = require("body-parser");
const app = express();
const port = 8095;

app.set("view engine", "ejs");
app.use("/uploads",express.static(__dirname + "/uploads"));
app.use(bodyParser.urlencoded({extended:true}))
app.use('/auth', authRoutes);
app.use('/protected', protectedRoute);

app.use("/",require("./routers"));

app.listen(port,(error)=>{
  if(!error){
    db();
    console.log("Server starts on port \nhttp://localhost:"+port);
  }
});
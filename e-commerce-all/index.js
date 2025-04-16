const express = require("express");
const db = require("./configs/database");
const app = express();
const port = 8093;

app.set("view engine","ejs");
app.use(express.static("public"));



app.use("/",require("./routers"));
app.listen(port ,(error) => {
  if(!error){
    db();
    console.log("Server satrt in this port \nhttp://localhost:" + port);
  }
})
const express = require("express");
const db = require("./configs/database");
const bodyParser = require("body-parser");
const upload = require("./middleware/imageUploads");
const LocalStrategy = require("./middleware/passpot-local");
const passport = require("passport");
const session = require("express-session");
const app = express();
const port = 8091;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  secret: "secretkey",
  resave: false,
  saveUninitialized: false,
  cookie : {maxAge : 1000 * 60 * 60}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));
app.use("/uploads",express.static(__dirname + '/uploads'));
app.use("/", require("./routers/index"));

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("server runs on\nhttp://localhost:" + port);
  }
});

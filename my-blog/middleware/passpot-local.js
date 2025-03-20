const passport = require("passport");
const userModel = require("../models/userSchema");
const LocalStrategy = require("passport-local").Strategy;

passport.use(new LocalStrategy(async(username,password,done)=>{
 try {
  let user = await userModel.findOne({username});
  if(user){
    if(user.password === password){
      return done(null,user);
    }
    else{
      return done (null,false)
    }
  }
  else{
    return done (null,false)
  }
  
} catch (error) {
  return done(error,false)
}

}));

passport.serializeUser((user,done)=>{
  return done(null,user.id);
})

passport.deserializeUser(async(id,done)=>{
  let user = await userModel.findById(id);
  return done(null,user);
})

passport.userPassportAuth = (req,res,next) =>{
  if(!req.isAuthenticated()){
    return res.redirect("/login");
  }
  return next();
}

passport.userLocalsData = (req,res,next) => {
  if(req.isAuthenticated()){
    res.locals.user = req.user;
  }
  return next();
}

module.exports = passport;
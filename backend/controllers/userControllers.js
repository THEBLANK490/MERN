const router = require('express').Router();
const User =require('../models/userModel');
const bcrypt =require("bcrypt");
const jwt = require("jsonwebtoken")


//create a test route
router.get('/hello', (req, res) =>{
    res.send('Welcome to API');
  });

//create a route for user registration
router.post('/register',async (req, res) =>{
  console.log(req.body);

  // destructuring
  const {fname, lname, email, password}= req.body;

  //validation
  if(!fname||!lname||!email||!password){
    return res.status(400).json({msg:"Please enter all the fields"});
  }

  try {
    
    //check existing user
    const existingUser = await User.findOne({email});
    //hash the password
    const salt=await bcrypt.genSaltSync(10);
    const passwordHash = await bcrypt.hashSync(password,salt);

    if(existingUser){
      return res.status(400).json({msg:"User already exists"});
    }

    //create a new user
    const newUser = new User({
      fname: fname,
      lname: lname, 
      email: email,
      password: passwordHash,
    });

    //save the user
    newUser.save();
    res.json({msg:"User registered Sucessfully"});
  
  } catch (error) {
    res.status(500).json("User registration failed");
  }

});

// //create a route for login
// router.post('/login',async (req, res) =>{
//   console.log(req.body);
//   //destructing
//   const {email, password} = req.body;
//   //check existing user
//   const existingUser = await User.findOne({email});
//   if(!existingUser)
//   {
//     return res.status(500).json("Email register garera aaija pahila.")
//   }
  
//   const validPassword = await bcrypt.compareSync(password, existingUser.password);
//   console.log(validPassword)
//   if(!validPassword){
//     return res.status(500).json("Login failed")
//   }
//   return res.status(200).json("Login Success")
// });

//create a route for login
router.post('/login',async (req, res) =>{

  console.log("login")
  console.log(req.body);
  //destructing
  const {email, password} = req.body;

  //validation
  if(!email||!password){
    return res.status(400).json({msg:"Please enter all the fields"});
  }
  try{
    const user = await User.findOne({email});

    //check if user exists
    if(!user){
      return res.status(400).json({msg:"User does not exist"});
    }

    // checkc if paswrod is correct
    const isCorrectPassword = await bcrypt.compareSync(password, user.password);
    if(!isCorrectPassword){
      await res.status(400).json({msg:"Invalid Credentials"})
    }

    //creating a token and signing with jwt
    const token =jwt.sign({id: user._id},process.env.JWT_SECRET);


    //send the token in a HTTP- only cookie
    res.cookie("token",token,{
      httpOnly: true,
      secure: true,
      expires: new Date(Date.now()+24*60*60*1000)
    });

    //send user data
    res.json({
      token,
      user,
      msg:"User logged in successfully"
    });


    } catch(error){
    console.log(error);
  }
});


  module.exports = router;


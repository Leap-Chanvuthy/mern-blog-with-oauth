const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const errorHandler = require('../utils/error');

const signup = (async (req , res , next) =>{
   const {username , email , password} = req.body;
   if (!username || !email || !password || username === '' || email === '' || password === ''){
    next(errorHandler(400 , 'All fields must be filled'));
   }
   
   const hashed = bcrypt.hashSync(password , 10);

   const newUser = new User({username , email , password : hashed});
   try{
       await newUser.save();
       res.json({'message' : 'Sign up successfully'});
   }
   catch(error){
        next(error);
   }



});

module.exports = {signup};
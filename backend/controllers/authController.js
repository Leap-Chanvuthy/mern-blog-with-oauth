const User = require('../models/userModel');
const bcrypt = require('bcryptjs');

const signup = (async (req , res) =>{
   const {username , email , password} = req.body;
   if (!username || !email || !password || username === '' || email === '' || password === ''){
    return res.status(400).json({'message' : 'All fields must be filled'});
   }
   
   const hashed = bcrypt.hashSync(password , 10);

   const newUser = new User({username , email , password : hashed});
   try{
       await newUser.save();
       res.json({'message' : 'Sign up successfully'});
   }
   catch(error){
        return res.status(500).json({'message' : error.message});
   }



});

module.exports = {signup};
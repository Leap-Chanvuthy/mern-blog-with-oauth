const User = require('../models/userModel');
const errorHandler = require('../utils/error');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


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

const signin = async(req , res , next) => {
    const {email , password} = req.body;
    if (!email || !password || email === '' || password === ''){
        next(errorHandler(400 , 'All fields must be filled'));
    }


    try{
        const validUser = await User.findOne({email});
        if (!validUser){
            next(errorHandler(404 , 'Please enter a valid email'));
        }
        const validPassword = bcrypt.compareSync(password , validUser.password);
        if (!validPassword){
            return next(errorHandler(400 , 'Please enter a correct password'));
        }

        const token = jwt.sign({id : validUser._id} , process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;
        res.status(200).cookie('access_token' , token , {httpOnly : true}).json(rest);
    }
    catch (error){
        next(error);
    }
}


const google = async (req , res , next) => {
    const {name , email , googlePhotoUrl}  = req.body;
    try {
        const user = await User.findOne({email});
        if (user){
            const token = jwt.sign({id : user._id} , process.env.JWT_SECRET);
            const {password , ...rest} = user._doc;
            res.status(200).cookie('access_token' , token , {httpOnly : true}).json(rest);
        }else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);;
            const hashPassword = bcrypt.hashSync(generatedPassword , 10);
            const newUser = new User({
                username : name.toLowerCase().split(' ').join('') +
                Math.random().toString(9).slice(-4),
                email,
                password: hashPassword,
                profilePicture: googlePhotoUrl,
            })

            await newUser.save();
            const token = jwt.sign({id : newUser._id} , process.env.JWT_SECRET);
            const {password , ...rest} = newUser._doc;
            res.status(200).cookie('access_token' , token , {httpOnly : true}).json(rest);
        }
    }
    catch (error){
        next(error);
    }
}

module.exports = {signup , signin , google};
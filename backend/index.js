const express = require('express');
const mongoose = require('mongoose');

const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');

require('dotenv').config();
const app = express();


//middleware
app.use(express.json());

mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log('database connect sucessfully');
    })
    .catch(error => {
        console.log('It has been an error connected to the database', error);
    })

app.listen (process.env.PORT , ()=>{
    console.log ('App is running on port' , process.env.PORT);
})

app.use('/api/user' , userRoute);
app.use('/api/auth' , authRoute);

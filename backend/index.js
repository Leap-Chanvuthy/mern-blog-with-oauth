import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const app = express();



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
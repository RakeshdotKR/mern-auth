dotenv.config();
import express from "express"; //Add this line in package.json "description": "","type":"module",
import mongoose from "mongoose";
import dotenv from 'dotenv';

// console.log("Mongo Uri: ",process.env.MONGOURI);


mongoose
.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Successfully connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
});

const app = express();

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
});
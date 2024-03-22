import express from "express"; //Add this line in package.json "description": "","type":"module",

const app = express();

app.listen(3000,()=>{
    console.log("Server listening on port 3000");
});
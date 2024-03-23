dotenv.config();
import express from "express"; //Add this line in package.json "description": "","type":"module",
import mongoose from "mongoose"; //ES6 type import
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js'; //.js at end is necessary
import authRoutes from './routes/auth.route.js'; //.js at end is necessary
// console.log("Mongo Uri: ",process.env.MONGOURI);

mongoose
  .connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use(express.json()); //This allows JSON as the input of our backend

app.listen(process.env.PORT, () => {
  console.log("Server listening on port 3000");
});


app.use('/api/user',userRoutes); //http://localhost:3000/api/user/
app.use('/api/auth',authRoutes); //http://localhost:3000/api/auth/signup

app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal server error';
  return res.status(statusCode).json({
    success:false,
    message,
    statusCode,
  });
});
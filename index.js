const express = require('express');
const dotenv=require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const app=express();
dotenv.config();
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan("common"));
mongoose.connect(process.env.MONGO_URI).then(()=>{
console.log("Mongodb connected sucessfully");
}).catch((error)=>{console.log(error); })
const PORT=process.env.PORT||5000;
app.get("/", (req, res)=>{
  res.send("Welcome to Home Page")
})
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("api/posts", postRoute);
app.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`);
})




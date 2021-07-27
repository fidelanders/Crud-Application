const express = require("express");
const dotenv = require("dotenv");
const { json } = require("body-parser");
const userModel = require("./route/userRoute");
const router = require("./route/userRoute");
const database=require("./database/db")
const app=express();
dotenv.config();
app.use(express.json())


//route
app.get("/", (req, res)=>res.send({message:"WELCOME TO MY API"}))

//database connection
database()

//middleware
app.use("/api/user", router)









//listening to server connection
const PORT = process.env.PORT||5050
app.listen(PORT, () => console.log(`Server is connected on port http://localhost:${PORT}`));

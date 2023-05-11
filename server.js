const express = require("express");
const app = express();
const dbConnect = require("./config/db")
require("dotenv").config();
const cors = require("cors");

app.use(express.json())
app.use(cors())

port = process.env.PORT || 6006

dbConnect().
then(()=>{
    app.listen(port,(req, res)=>{
console.log(`Server is running on ${port}`)
    })
})
.catch((err)=>{
    console.log(err.message)
})
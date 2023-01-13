const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config")
const bodyParser = require("body-parser")

const postRoute = require('./routes/posts')

app.use(bodyParser.json())

//Middleware
app.use('/posts',postRoute)

//Routes
//GET()-Fetch the data, POST()- Push the data
//PUT()-update the data, DELETE-Delete the data


app.get('/',(req,res) => {
    res.send('I am in the home page')
})


//connect the mongodb
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log("connected to mongoDB")
})

//Create a listening port
app.listen(5000,() => {
   console.log('Server is listening on port 5000....')
})
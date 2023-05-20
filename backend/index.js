const express = require('express');
const connectDB = require('./database/Databse');
const cors = require('cors');


//Dotenv Config
require("dotenv").config();
const app = express();

//express json
app.use(express.json());

//cors config
const corsOptions = {
  origin:true,
  credentials:true,
  optionSuccessStatus:200
};

app.use(cors(corsOptions));

// Create a Route
app.get('/', (req, res) =>{
    res.send('Welcome to API');
  });

app.use('/api/user',require('./controllers/userControllers'))

//Connect to DB
connectDB();


// Listen to the server
app.listen(process.env.PORT, () =>{
    console.log(`Server is Running on port ${process.env.PORT}`);
});
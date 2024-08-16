// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const database = require("./config/Database")
const productRoutes = require('./routes/product'); 
const userRoutes = require('./routes/User')
const dotenv = require("dotenv")
dotenv.config()

const app = express();
app.use(bodyParser.json());
app.use(cors());
const Port = process.env.PORT ||5000

//database connect 
database.connect()

// Use the routes
app.use('/api', productRoutes);
app.use('/api',userRoutes)


app.get("/", (req, res) => {
	return res.json({
		success:true,
		message:'Your server of walmart is up and running....'
	});
})


app.listen(Port , ()=>{
    console.log(`App is running at ${Port}`)
})

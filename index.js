const express = require('express');
require('dotenv').config();

const connect = require('./src/configs/db');


const app = express();

const productController = require('./src/controllers/products.controller');


app.use(express.json());

app.use('/', productController);


app.listen(process.env.PORT || 5000, async() => {
    try {
        await connect();
        console.log('Rocking On Port 5000');
    }
    catch(err){
        console.log(err.message);
    }
});
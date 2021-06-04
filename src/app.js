const express = require('express');

// App
const app = express();

//cors
const cors = require('cors');

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","*");
    app.use(cors());
    next();
})

// Load routes
const indexRoutes = require('./routes/routes');
app.use('/', indexRoutes);

module.exports = app;
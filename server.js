// import env file
require('dotenv').config();

// import express modules
const express = require('express'); // common js
const app = express(); // app express

// front-end port
const port = process.env.port || 3000; // port

const configViewEngine = require('./src/config/viewEngine');
const webRoutes = require('./src/routes/web');


// config template engine
configViewEngine(app);

// khai bao route
app.use('/', webRoutes);

// call the port
app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});

const path = require('path');
const express = require('express');
const exp = require('constants');
const configViewEngine = (app) => {
    // app.use(express.static(path.join(__dirname, 'views')));
    app.set('views', path.join("./src", 'views'));
    app.set('view engine', 'ejs');
    
    //config static files: images/css/js
    app.use(express.static(path.join('./src', 'public')));
}

module.exports = configViewEngine;
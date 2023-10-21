const path = require('path');

const getHomepage = (req, res) => {
  res.status(200).render(path.resolve('./src/views/homepage', 'homepage.ejs')); // render homepage.ejs in views/homepage
};

const getAbout = (req, res) => {
  res.status(200).render(path.resolve('./src/views/about', 'about.ejs')), {
    title: 'About',
  }; // render about.ejs in views/about
};

const getLogin = (req, res) => {
  res.status(200).render(path.resolve('./src/views/login', 'index.ejs')); // render login.ejs in views/login
};

const getRegister = (req, res) => {
  res.status(200).render(path.resolve('./src/views/register', 'index.ejs')); // render index.ejs in views/register
};

const getBMI = (req, res) => {
  res.status(200).render(path.resolve('./src/views/functions/bmi', 'bmi.ejs')); // render bmi.ejs in views/services/bmi
};

const get404 = (req, res) => {
  res.status(404).render(path.resolve('./src/views/404', '404.ejs')); // render 404.ejs in views/404
};

module.exports = {
  getHomepage,
  getAbout,
  getLogin,
  get404,
  getRegister,
  getBMI,
};

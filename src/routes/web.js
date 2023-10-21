const express = require('express');
const router = express.Router();
const {getHomepage, getAbout, getLogin, get404, getRegister} = require('../controllers/homeController');

// router.Method('/route', handler);

// Home
router.get('/', getHomepage);

// About
router.get('/about', getAbout);

// Login
router.get('/login', getLogin);

// Register
router.get('/register', getRegister);

// Display 404 PAGE NOT FOUND IF THE DOMAIN IS NOT EXIST WHEN THE USER ACCESS NONEXISTENT PAGE LINK
router.get('*', get404);

module.exports = router; // export default (xuat ra 1 bien duy nhat)

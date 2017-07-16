// only routing in here!
'use strict'

const mainController = require('./controllers/main.controller'),
      loginController = require('./controllers/login.controller');


module.exports = (app, passport) => {
    // =====================================
    // HOME PAGE ===========================
    // =====================================
    app.get('/', mainController.showHome);

    // =====================================
    // LOGIN ===============================
    // =====================================
    app.get('/login', loginController.showLogin);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    app.get('/signup', loginController.showSignup);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    app.get('/profile', isLoggedIn, loginController.showProfile);

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', loginController.doLogout);
};

// route middleware to make sure a user is logged in
const isLoggedIn = (req, res, next) => {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
    return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

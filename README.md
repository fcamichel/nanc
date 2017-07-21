# nanc
NoT aNoThEr Nodejs CRUD 🙈

## app structure
```
- app
------ controllers     <!-- all the controllers -->
------ models
---------- user.js     <!-- user model -->
------ routes.js       <!-- all the routes for the application -->
- config
------ database.js     <!-- will hold the database connection
------ passport.js     <!-- configuring the strategies for passport -->
- public               <!-- contains all static assets -->
- sass                 <!-- Syntactically Awesome Style Sheets in here -->
- tests                <!-- contains all the tests -->
- views
------ pages
---------- home.ejs    <!-- show the home page -->
------ login
---------- login.ejs   <!-- show the login form -->
---------- signup.ejs  <!-- show the signup form -->
---------- profile.ejs <!-- show the user profile of the logged in user -->
------ layout.ejs      <!-- contains the basic layout -->
- package.json         <!-- handle all npm packages -->
- server.js            <!-- setup of the application -->
```

### Hand-picked registry of Node.js frameworks
See http://nodeframework.com/

## Are you new to node?
Chances are you're new to nodejs. If this is the case you may wanna take a look at our [Tips for new nodies](https://github.com/fcamichel/nanc/wiki/Node-Beginner-Tips)

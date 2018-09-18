const PORT = process.env.PORT || 8070;
const express = require("express");
const app = express();
//const bodyParser = require("body-parser");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./app/public"));  

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));

// parse application/jsoon
//app.use(bodyParser.json());

var routes = require('./app/controller/router.js');
app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
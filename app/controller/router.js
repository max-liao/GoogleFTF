// Dependencies
// =============================================================
const express = require("express");
const router = express.Router();
const path = require("path");
//var app = express();

require('dotenv').config();

// Routes
// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Export routes for server.js to use.
module.exports = router;
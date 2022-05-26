const express = require("express");
const path = require("path");
const router = express.Router();
router
    .route("/")
    .get((req,res) => res.sendFile(path.resolve("html/login.html")))
    .post((req,res) => res.send("hello"));
module.exports = router;
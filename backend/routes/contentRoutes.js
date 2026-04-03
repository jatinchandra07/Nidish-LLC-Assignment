const express = require("express");
const router = express.Router();
const { createContent } = require("../controllers/contentController.js");

router.post("/", createContent);

module.exports = router;
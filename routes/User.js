const express = require("express");
const router = express.Router();
const UserController = require("../controllers/User");

router.post("/signin", UserController.signin);

router.post("/signup", UserController.signup);

module.exports = router;

const express = require("express");
const router = express.Router();
const ThingController = require("../controllers/thing");
const auth = require('../middlewares/auth');

router.post("/",auth, ThingController.create);

router.get("/",auth, ThingController.getAll);

router.get("/:id",auth, ThingController.getOne);

router.put("/:id",auth, ThingController.update);

router.delete("/:id",auth, ThingController.delete);

module.exports = router;

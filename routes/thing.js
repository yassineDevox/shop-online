const express = require("express");
const router = express.Router();
const ThingController = require("../controllers/thing");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");

router.post("/", auth, multer, ThingController.create);

router.get("/", auth, ThingController.getAll);

router.get("/:id", auth, ThingController.getOne);

router.put("/:id", auth,multer, ThingController.update);

router.delete("/:id", auth, ThingController.delete);

module.exports = router;

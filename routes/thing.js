const express = require("express");
const router = express.Router();
const ThingController = require("../controllers/thing");

router.post("/", ThingController.create);

router.get("/", ThingController.getAll);

router.get("/:id", ThingController.getOne);

router.put("/:id", ThingController.update);

router.delete("/:id", ThingController.delete);

module.exports = router;

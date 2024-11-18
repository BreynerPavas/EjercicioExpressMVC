const express = require("express");
const ProductController = require("../controllers/ProductController");
const router = express.Router();

router.post("/", ProductController.create);
router.put("/id/:id",ProductController.update);
router.get("/",ProductController.showAll);
router.get("/categories",ProductController.showAllCategories);
router.get("/id/:id",ProductController.showId);
router.get("/desc",ProductController.showDesc);
router.get("/name/:name",ProductController.showName);
router.delete("/id/:id",ProductController.delete);

module.exports = router;
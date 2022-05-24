const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.get("/all/:lang", postController.getContentCategory);
router.get("/single-post/:currentlang/:lang/:id", postController.singleContent);

module.exports = router;

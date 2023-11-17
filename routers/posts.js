const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.js");
const multer = require("multer");
const fs = require("fs");



router.get("/", postsController.index);
router.get("/create", postsController.create);
router.get("/:slug", postsController.show);
router.get("/:slug/download", postsController.download);
// ! implemento store, passo come secondo argomento multer con il percorso
router.post("/", multer({ dest: "public/imgs/posts" }).single("image"), postsController.store)
// ! implemento destroy
router.delete("/:id", postsController.destroy)



module.exports = router;
import express from "express";
import controller from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", controller.getPosts);
router.post("/", controller.createPost);
router.post("/comentarios", controller.createComentario);

export default router;
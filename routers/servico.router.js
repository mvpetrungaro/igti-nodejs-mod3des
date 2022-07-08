import express from "express";
import controller from "../controllers/servico.controller.js";

const router = express.Router();

router.get("/", controller.getServicos);
router.get("/:id", controller.getServico);
router.post("/", controller.createServico);
router.put("/", controller.updateServico);
router.delete("/:id", controller.deleteServico);

export default router;
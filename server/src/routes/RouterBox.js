import express from "express";
import { createBox } from "../controllers/box_controllers.js";
import { getItemsByBox } from "../controllers/box_controllers.js";
const router = express.Router();

router.post("/", createBox);
router.get("/:boxNumber/items", getItemsByBox)

export default router;
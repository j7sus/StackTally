import express from "express";
import { getDeliveries, createDelivery } from "../controllers/deliveries_controllers.js";
// import { getItemsByBox } from "../controllers/box_controllers.js"

const router = express.Router();

router.get("/", getDeliveries);
router.post("/", createDelivery);

// router.get("/:boxId/items", getItemsByBox)


export default router;
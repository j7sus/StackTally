import express from "express";
import { getDeliveries, addDelivery } from "../controllers/deliveries_controllers.js";
// import { getItemsByBox } from "../controllers/box_controllers.js"

const router = express.Router();

router.get("/", getDeliveries);
router.post("/", addDelivery);

// router.get("/:boxId/items", getItemsByBox)


export default router;
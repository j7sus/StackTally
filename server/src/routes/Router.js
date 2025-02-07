import express from "express";
import { getDeliveries, addDelivery } from "../controllers/deliveries_controllers.js";

const router = express.Router();

router.get("/", getDeliveries);
router.post("/", addDelivery);

export default router;
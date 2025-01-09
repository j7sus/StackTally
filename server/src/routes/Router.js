import express from "express";
import { getDeliveries, createDelivery } from "../controllers/deliveries_controllers.js";

const router = express.Router();

router.get("/", getDeliveries);
router.post("/", createDelivery);

export default router;
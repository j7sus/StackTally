import Delivery from "../models/Delivery.js";

export const getDeliveries =  async (req, res) => {
    try {
        const deliveries = await Delivery.findAll();
        res.json(deliveries);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch deliveries"});
    }
};

export const createDelivery =  async (req, res) => {
    try {
        const { userName, date } = req.body;
        const newDelivery = await Delivery.create({ userName, date });
        res.status(201).json(newDelivery);
    } catch (error) {
        res.status(500).json({ error: "Failed to create delivery" });
    }
};
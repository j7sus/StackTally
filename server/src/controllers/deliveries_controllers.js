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
    const { userName, date } = req.body;
    try {
        const delivery = new Delivery({ userName, date });
        const savedDelivery = await  delivery.save();
        res.status(201).json(savedDelivery);
    } catch (error) {
        res.status(400).json({ error: "Failed to save delivery" });
    }
};
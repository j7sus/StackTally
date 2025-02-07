import Delivery from "../models/Delivery.js";

export const getDeliveries = async (req, res) => {
  try {
    const deliveries = await Delivery.find();
    res.json(deliveries);
  } catch (error) {
    console.error("Error fetching deliveries:", error.message);
    res.status(500).json({ error: "Failed to fetch deliveries" });
  }
};

export const addDelivery = async (req, res) => {
  const { userName, date, totalBoxes } = req.body;
  try {
    const newDelivery = await Delivery.create({ userName, date, totalBoxes });
    res
      .status(201)
      .json({
        message: "Delivery created successfully!",
        delivery: newDelivery,
      });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create delivery", details: error.message });
  }
};

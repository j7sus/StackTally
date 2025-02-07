import Box from "../models/Box.js";
import Item from "../models/Item.js";

export const createBox = async (req, res) => {
  try {
    const { numberBox, store, totalItems, delivery } = req.body;
    console.log("Creating box with data:", {
      numberBox,
      store,
      totalItems,
      delivery,
    });
    // New Box
    const box = new Box({ numberBox, store, totalItems, delivery });
    const savedBox = await box.save();
    console.log("Box saved:", savedBox);

    res.status(201).json(savedBox);
  } catch (error) {
    console.error("Error creating box:", error.message);
    res.status(500).json({ error: "Failed to create box" });
  }
};

export const getItemsByBox = async (req, res) => {
  try {
    const { numberBox } = req.params;

    // Search for box
    const box = await Box.findOne({ numberBox });
    if (!box) {
      return res.status(404).json({ error: "Box not found 🤷" });
    }
    // Search for item
    const items = await Item.find({ box: numberBox }).populate("box");
    if (!items || items.length === 0) {
      return res.status(404).json({ error: "No Items" });
    }
    res.status(200).json(items);
  } catch (error) {
    console.error("Error fetching items for the box", error.message);
    res.status(500).json({ error: "Failed to fetch items for the box" });
  }
};

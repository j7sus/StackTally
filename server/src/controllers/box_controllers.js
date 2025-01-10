import Box from "../models/Box.js"
import Item from "../models/Item.js"

export const createBox = async (req, res) => {
    try {
        const { boxNumber, store, totalItems, delivery } = req.body;
        console.log("Creating box with data:", { boxNumber, store, totalItems, delivery });
        // New Box
        const box = new Box({ boxNumber, store, totalItems, delivery});
        const savedBox =await box.save();
        console.log("Box saved:", savedBox);

        res.status(201).json(savedBox);
    } catch (error) {
        console.error("Error creating box:", error.message);
        res.status(500).json({ error: "Failed to create box" });
    }
}

export const getItemsByBox = async (req, res) => {
    try {
        const { boxId } = req.params;

        const items = await Item.find({ box: boxId}).populate("box");
        if (!items || items.length === 0) {
            return res.status(404).json({ error: "No Items"})
        }
        res.status(200).json(items);

    } catch (error) {
        console.error("Error fetching items for the box", error.message);
        res.status(500).json({error: "Failed to fetch items for the box"});
    }
}
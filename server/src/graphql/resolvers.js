import Delivery from "../models/Delivery.js";
import Box from "../models/Box.js";
import Item from "../models/Item.js";

const resolvers = {
  Query: {
    deliveries: async () => await Delivery.find().populate("boxes"),
    boxes: async (_, { deliveryId }) =>
      await Box.find({ delivery: deliveryId }).populate("items"),
    items: async (_, { boxId }) => await Item.find({ boxes: boxId }),
  },
  Mutation: {
    addDelivery: async (_, { userName, date, totalBoxes }) => {
      const delivery = new Delivery({ userName, date, totalBoxes });
      return await delivery.save();
    },
    addBox: async (_, { numberBox, store, deliveryId }) => {
      try {
        const newBox = new Box({
          numberBox,
          store,
          delivery: deliveryId,
        });
        await newBox.save();

        // Actualiza la entrega para incluir la nueva caja
        await Delivery.findByIdAndUpdate(deliveryId, {
          $push: { boxes: newBox._id },
        });

        return newBox;
      } catch (error) {
        console.error("Error in addBox resolver:", error.message);
        throw new Error("Failed to add box");
      }
    },
    assignItemsToBox: async (_, { boxId }) => {
      try {
        const box = await Box.findById(boxId).populate("items");
        if (!box) {
          throw new Error("Box not found");
        }
        return box;
      } catch (error) {
        console.error("Error syncing items:", error.message);
        throw new Error("Failed to sync items");
      }
    },
  },
};

export default resolvers;

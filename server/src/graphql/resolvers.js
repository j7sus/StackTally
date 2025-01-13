import Delivery from "../models/Delivery";
import Box from "../models/Box";
import Item from "../models/Item";

const resolvers = {
    Query: {
        deliveries: async () => await Delivery.find().populate("boxes"),
        boxes: async (_, {deliveryId}) => await Box.find({ delivery: deliveryId}).populate("items"),
        items: async (_, {boxId}) => await Item.find({boxes: boxId}), 
    },
    Mutation: {
        addDelivery: async (_, {userName, date, totalBoxes}) => {
            const delivery = new Delivery({ userName, date, totalBoxes });
            return await delivery.save();
        },
        addBox: async (_, {boxNumber, store, deliveryId}) => {
            const box = new Box({ boxNumber, store, delivery: deliveryId});
            return await box.save();
        },
        assignItemToBoxes: async (_, {barcode, boxIds}) => {
            let item = await Item.findOne({ barcode });
            if (!item) {
                item = new Item({ barcode, boxes: boxIds });
            } else {
                item.boxes.push(...boxIds)
            }
            return await item.save();
        }
    },
};

export default resolvers;
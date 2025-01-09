// Models imported
import Delivery from "./Delivery.js";
import Box from "./Box.js";
import Item from "./Item.js";

// Relacionar modelos
Box.belongsTo(Delivery, { foreignKey: "deliveryId" });
Delivery.hasMany(Box, { foreignKey: "deliveryId" });
Item.belongsTo(Box, { foreignKey: "boxId" });
Box.hasMany(Item, { foreignKey: "boxId" });

export { Delivery, Box, Item}
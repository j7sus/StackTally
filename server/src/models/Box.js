import { DataTypes } from "sequelize";
import sequelize from "./db.js";
import Delivery from "./Delivery.js";

const Box = sequelize.define("Box", {
    boxNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    store: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    totalItems: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

// Delivery Boxes
Box.belongsTo(Delivery, { foreignKey: "deliveryId" });
Delivery.hasMany(Box, { foreignKey: "deliveryId"});
// https://sequelize.org/docs/v7/associations/belongs-to/

export default Box;

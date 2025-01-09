const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const Delibery = require("./Delivery");

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
Box.belongsTo(Delibery, { foreignKey: "deliveryId" });
Delibery.hasMany(Box, { foreignKey: "deliveryId"});

module.exports = Box;
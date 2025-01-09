const { DataTypes } = require("sequelize");
const sequelize = require("./db");
const Box = require("./Box");

const Item = sequelize.define("Item", {
    barcode: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    style: {
        type: DataTypes.STRING,
    },
    item: {
        type: DataTypes.STRING,
    },
    color: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    size: {
        type: DataTypes.STRING
    },
});

// Boxes Items
Item.belongsTo(Box, { foreignKey: "boxId" });
Box.hasMany(Item, { foreignKey: "boxId" });
// https://sequelize.org/docs/v7/associations/belongs-to/

export default Item;

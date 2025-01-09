import { DataTypes } from 'sequelize';
const sequelize = require("./db");

const Delibery = sequelize.define("Delivery", {
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    totalBoxes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
    },
});

module.exports = Delibery;
// https://sequelize.org/docs/v7/models/data-types/
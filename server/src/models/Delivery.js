import { DataTypes } from 'sequelize';
import sequelize from "./db.js";

const Delivery = sequelize.define("Delivery", {
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

export default Delivery;
// https://sequelize.org/docs/v7/models/data-types/
import "dotenv/config";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: "postgres",
        logging: console.log,
});


// Sync DataBase
const syncDataBase = async () => {
    // Testing the connection
    try {
        console.log("Connecting to database...")
        await sequelize.authenticate();
        console.log("Database connectd!");
        await sequelize.sync({force: true});
        console.log("Database Synchronized!!")
    } catch (error) {
        console.error("Database failed", error);
    }
};

syncDataBase();

export default sequelize;
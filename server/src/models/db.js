import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set('strictPopulate', false);
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log(`| MongoDB CONNECT ⚡️🔌 to ${conn.connection.host} |`);
      } catch (err) {
        console.error(`Not connecting to MongoDB: ${err.message}`);
        process.exit(1);
      }
};

export default connectDB;
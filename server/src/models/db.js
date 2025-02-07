import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.set("strictPopulate", false);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {});
    console.log(
      `| MongoDB CONNECT ⚡️🔌 > Hooked up to the data warehouse! Fetching 📦`
    );
  } catch (err) {
    console.error(`Not connecting to MongoDB: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;

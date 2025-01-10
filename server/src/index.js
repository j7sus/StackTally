import express from "express";
import deliveriesRoutes from "./routes/Router.js";
import connectDB from "./models/db.js";
import boxesRoutes from "./routes/RouterBox.js"

const app = express();

app.use(express.json());

connectDB()
.then(() => console.log("| Database connected SUCCESFULLY!👌 |"))
.catch(err => console.error("Database connection failed:", err.message));

// Routes
app.use("/api/deliveries", deliveriesRoutes);
app.use("/api/boxes", boxesRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`| SERVER 🏃✨ running on port  ${PORT} |`));

export default app;
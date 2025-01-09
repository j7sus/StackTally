import express from "express";
import routes from "./routes/Router.js";

const app = express();

app.use(express.json());

app.use("/api/deliveries", routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running 🏃✨ on port ${PORT}`));

export default app;
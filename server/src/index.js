import express from "express";
import cors from "cors";

//Routes imports
import deliveriesRoutes from "./routes/Router.js";
import boxesRoutes from "./routes/RouterBox.js";

//Data
import connectDB from "./models/db.js";

//GraphQL
import { ApolloServer } from "apollo-server-express"
import typeDefs from "./graphql/typeDefs.js";
import resolvers from "./graphql/resolvers.js";

const app = express();
app.use(cors());
app.use(express.json());

//Connect to the DataBase
connectDB()
.then(() => console.log("| Database connected SUCCESFULLY!👌 |"))
.catch(err => console.error("Database connection failed:", err.message));

//Apollo Server
const starApolloServer = async () => {
    const server = new ApolloServer({typeDefs, resolvers});
    await server.start();
    server.applyMiddleware({app});
    console.log("| APOLLO SERVER 🚀 initialized successfully! |");
}

starApolloServer().catch((error) => {
    console.error("Error initializing Apollo Server:", error.message);
});

//REST Routes
app.use("/api/deliveries", deliveriesRoutes);
app.use("/api/boxes", boxesRoutes)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`| SERVER 🏃✨ running on port  ${PORT} |`));

export default app;
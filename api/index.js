import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// routes
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";

// loads .env file contents into process.env
dotenv.config();

// connecting to our database
mongoose
.connect(process.env.MONGO_URI)
  .then(() => console.log("[SUCCESS]: Connected to database."))
  .catch((err) => console.log("[ERROR]: Failed to connect to database.", err))

const app = express();

// incoming json parser
app.use(express.json());


// app routing
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);


app.listen(3000, () => {
  console.log("Server listening on port...3000");
});
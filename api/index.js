import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// loads .env file contents into process.env
dotenv.config();

// connecting to our database
mongoose
.connect(process.env.MONGO_URI)
  .then(() => console.log("[SUCCESS]: Connected to database."))
  .catch((err) => console.log("[ERROR]: Failed to connect to database.", err))

const app = express();

app.listen(3000, () => {
  console.log("Server listening on port...3000");
});
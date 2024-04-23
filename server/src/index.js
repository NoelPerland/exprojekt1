import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/users.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);

// Define your MongoDB connection string
const mongoURI =
  "mongodb+srv://noeltech:GreenTea4@recipes.snt3pcb.mongodb.net/recipes";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start your server after successfully connecting to the database
    app.listen(3001, () => console.log("Server Started!"));
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username: username });

  if (user) {
    return res.json({ message: "User already exists!" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserModel({ username, password: hashedPassword });
  await newUser.save();

  res.json({ message: "User Registered Successfully" }); // Corrected from req.json(user)
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({ username: username });
  if (!user) {
    return res.json({ message: "User Does Not Exist" }); // Check get request with postman
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    // Corrected from "!isPasswordValid"
    return res.json({ message: "Username or Password is Incorrect!" });
  }
  const token = jwt.sign({ id: user._id }, "secret");
  res.json({ token, userID: user._id });
});
export { router as userRouter };

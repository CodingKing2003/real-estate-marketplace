import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (typeof password !== "string") {
    return next(errorHandler(400, "Invalid password"));
  }

  try {
    const user = await User.findOne({ email, username });
    if (user) {
      return next(errorHandler(401, "User already exists"));
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

import bcryptjs from "bcryptjs";

import User from "../models/user.model.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // ensure user sent all data
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return res.status(400).json({
      success: false,
      error: "All fields are required",
    });
  }

  // check if username or email already exists
  const usernameExists = await User.findOne( { username });
  const emailExists = await User.findOne( { email });
  if (usernameExists || emailExists) {
    return res.status(400).json({ success: false, message: "User already exists" });
  }

  // generate salt and hash user password
  // the sync allow us to omit the await keyword
  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hashSync(password, salt);
  
  // create a new user
 const newUser = new User({
    username: username.toLowerCase(),
    email,
    password: hashedPassword,
  });

  // save new user in database
  try {
    await newUser.save();
    res
      .status(201)
      .json({ success: true, message: "User account created successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

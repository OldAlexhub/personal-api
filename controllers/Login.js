import UserModel from "../models/Users.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: `User doesn't exist` });
    }
    // console.log("User:", user);
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: `Invalid Credentials` });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRESIN,
    });
    const userId = user._id;
    const name = `${user.fname || ""} ${user.lname || ""}`.trim();
    // if (!name) {
    //   console.warn(`User's name is undefined or empty for email: ${email}`);
    //   // Decide how to handle users without a name
    // }
    res.status(200).json({
      message: `Login Successfull`,
      userId,
      token: token,
      name,
    });
  } catch (error) {
    res.status(500).json({ message: `Serve Error!` });
  }
};
export default Login;

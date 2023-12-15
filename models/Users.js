import mongoose from "mongoose";
import validator from "validator";

const UserSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  fname: { type: String, required: true },
  lname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Email format is incorrect",
    },
  },
  password: { type: String, minlength: 6, required: true },
  confirmPassword: {
    type: String,
    default: undefined,
    select: false,
    validate: {
      validator: function (value) {
        return value === this.password;
      },
      message: "Passwords do not match",
    },
  },
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;

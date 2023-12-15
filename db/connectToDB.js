import mongoose from "mongoose";

const connectToDB = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected Successfully with MongoDB`);
  } catch (error) {
    console.log("Failed to conenct to MongoDB");
  }
};
export default connectToDB;

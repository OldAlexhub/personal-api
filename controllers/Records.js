import FinanceModel from "../models/Finances.js";

const Records = async (req, res) => {
  try {
    const {
      department,
      vendor,
      expense,
      income,
      incomee,
      userId,
      type,
      transaction_Date,
    } = req.body;

    const newRecord = await FinanceModel({
      department,
      vendor,
      expense,
      income,
      incomee,
      userId,
      type,
      transaction_Date,
    });
    await newRecord.save();
    res.status(201).json({ message: `Recorded Successfully` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default Records;

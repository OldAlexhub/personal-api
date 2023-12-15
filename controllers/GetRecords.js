import FinanceModel from "../models/Finances.js";

const GetRecords = async (req, res) => {
  try {
    const userId = req.query.userId;
    const records = await FinanceModel.find({ userId });
    res.status(200).json({ message: `Records`, records });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Server Error!` });
  }
};
export default GetRecords;

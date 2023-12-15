import FinanceModel from "../models/Finances.js";

const DeleteRecords = async (req, res) => {
  try {
    const _id = req.params.Id;
    // console.log(_id);
    const deleteRecord = await FinanceModel.findOneAndDelete({ _id: _id });

    if (!deleteRecord) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error("Error in DeleteRecords:", error);
    res.status(500).json({ message: "Server Error!" });
  }
};

export default DeleteRecords;

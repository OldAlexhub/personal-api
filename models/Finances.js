import mongoose from "mongoose";

const FinanceSchema = new mongoose.Schema({
  transaction_Id: { type: Number, unique: true },
  transaction_Date: { type: Date, default: new Date() },
  userId: { type: String },
  date: { type: Date, default: new Date() },
  department: { type: String, default: " " },
  vendor: { type: String, default: " " },
  expense: { type: Number, default: 0 },
  income: { type: Number, default: 0 },
  incomee: { type: String, default: " " },
  type: { type: String, enum: ["expense", "income"], default: "" },
});

FinanceSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const lastRecord = await mongoose
        .model("money")
        .findOne()
        .sort({ transaction_Id: -1 })
        .limit(1);
      this.transaction_Id = lastRecord ? lastRecord.transaction_Id + 1 : 10001;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

const FinanceModel = mongoose.model("money", FinanceSchema);
export default FinanceModel;

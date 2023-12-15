import express from "express";
import cors from "cors";
import helmet from "helmet";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/routes.js";
import connectToDB from "./db/connectToDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDirectoryPath = path.join(__dirname, "./public");

app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json({ limit: "32mb", extended: true }));
app.use(express.urlencoded({ limit: "32mb", extended: true }));
app.use(express.static(publicDirectoryPath));
connectToDB();
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

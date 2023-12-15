import { Router } from "express";
import Signup from "../controllers/Signup.js";
import Login from "../controllers/Login.js";
import Records from "../controllers/Records.js";
import GetRecords from "../controllers/GetRecords.js";
import DeleteRecords from "../controllers/DeleteRecords.js";
import protectRoute from "../middleware/protectedRoute.js";

const router = Router();
//credtentials
router.post("/signup", Signup);
router.post("/login", Login);

//INFOS
router.post("/recording", protectRoute, Records);
router.get("/myrecords", protectRoute, GetRecords);
router.delete("/delete/:Id", protectRoute, DeleteRecords);

// exports
export default router;

import express from "express"
const router=express.Router()
import { getAllData } from "../controllers/controller.js";

router.route("/").get(getAllData)

export default router;
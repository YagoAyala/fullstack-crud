import express from "express";
import { getUsers } from "../constrollers/user_constrollers.js";

const router = express.Router();

router.get("/", getUsers)

export default router;
import express from "express";
import { addUser, deleteUser, getUsers, updateUser } from "../constrollers/user_constrollers.js";

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/:id", updateUser)

router.delete("/:id", deleteUser)

export default router
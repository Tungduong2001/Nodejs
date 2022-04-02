import { Router } from "express";
import { listUser, removeUser, signIn, signUp } from "../controllers/auth";

const router = Router()

router.post("/signin", signIn)
router.post("/signup", signUp)
router.get("/users", listUser)
router.delete("/users/:id", removeUser)
export default router
import { Router } from "express";
import { listUser, removeUser } from "../controllers/user";
const router = Router()

router.get("/users", listUser)
router.delete("/users/:id", removeUser)

export default router

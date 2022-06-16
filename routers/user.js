import { Router } from "express";
import { listUser, removeUser, Update } from "../controllers/user";
const router = Router()

router.get("/users", listUser)
router.delete("/users/:id", removeUser)
router.patch("/users/:id", Update)


export default router

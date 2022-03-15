import { Router } from "express";
import { AddPost, Delete, GetOnePost, ListPost, Update } from "../controllers/post";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

router.get("/api/posts", checkAuth, ListPost)
router.get("/api/post/:id", checkAuth, GetOnePost)
router.post("/api/post", checkAuth, AddPost)
router.delete("/api/post/:id", checkAuth, Delete)
router.put("/api/post/:id", checkAuth, Update)
export default router;
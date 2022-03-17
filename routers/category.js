import { Router } from "express";
import { AddCategory, DetailCate } from "../controllers/category";

const router = Router()
import { checkAuth } from "../middlewares/checkAuth";

router.post('/category', checkAuth, AddCategory);
router.get('/category/:id', checkAuth, DetailCate);

export default router

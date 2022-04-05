import { Router } from "express";
import { AddProduct, Delete, GetOneProduct, List, search, Update } from "../controllers/product";
import { userById } from "../controllers/user";
const router = Router();
import { checkAuth, isAdmin, isAuth, requireSignin } from "../middlewares/checkAuth"

router.get("/products", checkAuth, List)
router.get("/product/:id", checkAuth, GetOneProduct)
router.post("/product/:userId", requireSignin, isAuth, isAdmin, AddProduct)
router.delete("/product/:id", checkAuth, Delete)
router.put("/product/:id", checkAuth, Update)
router.post("/search", search)

router.param("userId", userById)
export default router;
import { Router } from "express";
import { AddProduct, Delete, GetOneProduct, List, Update } from "../controllers/product";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

router.get("/products", checkAuth, List)
router.get("/product/:id", checkAuth, GetOneProduct)
router.post("/product", checkAuth, AddProduct)
router.delete("/product/:id", checkAuth, Delete)
router.put("/product/:id", checkAuth, Update)
export default router;
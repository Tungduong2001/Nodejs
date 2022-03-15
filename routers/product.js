import { Router } from "express";
import { AddProduct, Delete, GetOneProduct, List, Update } from "../controllers/product";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

router.get("/api/products", checkAuth, List)
router.get("/api/product/:id", checkAuth, GetOneProduct)
router.post("/api/product", checkAuth, AddProduct)
router.delete("/api/product/:id", checkAuth, Delete)
router.put("/api/product/:id", checkAuth, Update)
export default router;
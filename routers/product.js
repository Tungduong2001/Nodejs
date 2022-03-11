import { Router } from "express";
const router = Router();
import { checkAuth } from "../middlewares/checkAuth"

const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" }
];

router.get("/api/products", checkAuth, (req, res) => {
    res.json(products)
})
router.get("/api/products/:id", checkAuth, (req, res) => {
    res.json(products.find(item => item.id === +req.params.id))
})
router.post("/api/products", checkAuth, (req, res) => {
    products.push(req.body);
    res.json(products)
})
router.delete("/api/products/:id", checkAuth, (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id))
})
export default router;
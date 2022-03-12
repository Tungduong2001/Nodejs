import mongoose from "mongoose"

// const products = [
//     { id: 1, name: "Product A" },
//     { id: 2, name: "Product B" }
// ];
const Product = mongoose.model('Product', { name: String, price: Number })

export const List = async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const GetOneProduct = (req, res) => {
    res.json(products.find(item => item.id === +req.params.id))
}
export const AddProduct = async (req, res) => {
    // products.push(req.body);
    try {
        const product = await new Product(req.body).save()
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}
export const Delete = (req, res) => {
    res.json(products.filter(item => item.id !== +req.params.id))
}
export const Update = (req, res) => {
    res.json(products.map(item => item.id == req.params.id ? req.body : item))
}
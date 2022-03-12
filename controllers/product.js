import mongoose from "mongoose"

// const products = [
//     { id: 1, name: "Product A" },
//     { id: 2, name: "Product B" }
// ];
const Product = mongoose.model('Product', { name: String, image: String, price: Number, Desc: String })

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
export const GetOneProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
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
export const Delete = async (req, res) => {
    try {
        const product = await Product.findByIdAndRemove(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const Update = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id)
        res.json(product)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
    // res.json(products.map(item => item.id == req.params.id ? req.body : item))
}
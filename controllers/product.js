import mongoose from "mongoose"

// const products = [
//     { id: 1, name: "Product A" },
//     { id: 2, name: "Product B" }
// ];
const Product = mongoose.model('Product', { name: String, image: String, price: Number, desc: String })

export const List = async (req, res) => {
    try {
        const listProduct = await Product.find()
        res.json(listProduct)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const GetOneProduct = async (req, res) => {
    try {
        const getOne = await Product.findById(req.params.id)
        res.json(getOne)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const AddProduct = async (req, res) => {
    // products.push(req.body);
    try {
        const addProduct = await new Product(req.body).save()
        res.json(addProduct)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được sản phẩm"
        })
    }
}
export const Delete = async (req, res) => {
    try {
        const remove = await Product.findByIdAndRemove(req.params.id)
        res.json(remove)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const Update = async (req, res) => {
    try {
        const update = await Product.findByIdAndUpdate(req.params.id, req.body)
        res.json(update)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
import Product from '../models/product'

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
        res.json({
            message: "Xóa thành công",
            data: remove
        })
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
export const Update = async (req, res) => {
    try {
        const update = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(update)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const search = async (req, res) => {
    try {
        // console.log(req.query);
        const searchString = req.query.q ? req.query.q : "";
        const result = await Product.find({ $text: { $search: searchString } }).exec();
        res.json(result)
    } catch (error) {
        res.status(400).json({
            message: "không tìm thấy sản phẩm"
        })
    }
}
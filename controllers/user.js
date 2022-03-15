import User from '../models/user'

export const AddUser = async (req, res) => {
    try {
        const addUser = await new User(req.body).save()
        res.json(addUser)
    } catch (error) {
        res.status(400).json({
            message: "Không thêm được bài viết"
        })
    }
}

export const ListUser = async (req, res) => {
    try {
        const listUser = await User.find()
        res.json(listUser)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const GetOneUser = async (req, res) => {
    try {
        const getOne = await User.findById(req.params.id)
        res.json(getOne)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}

export const Delete = async (req, res) => {
    try {
        const remove = await User.findByIdAndRemove(req.params.id)
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
        const update = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(update)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được sản phẩm"
        })
    }
}
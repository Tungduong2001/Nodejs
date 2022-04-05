import User from "../models/user"

export const userById = async (req, res, next, id) => {
    try {
        const user = await User.findById(id).exec()
        if (!user) {
            res.status(400).json({
                message: "Không tìm thấy user"
            })
        }
        req.profile = user;
        next()
    } catch (error) {

    }
}

export const listUser = async (req, res) => {
    try {
        const user = await User.find().exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Không tìm được user"
        })
    }
}

export const removeUser = async (req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }).exec()
        res.json(user)
    } catch (error) {
        res.status(400).json({
            message: "Xóa không thành công"
        })
    }
}
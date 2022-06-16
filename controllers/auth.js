import User from "../models/user";
import jwt from 'jsonwebtoken';
export const signUp = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const existUser = await User.findOne({ email }).exec()
        if (existUser) {
            res.status(400).json({
                message: "Email đã tồn tại"
            })
        } else {
            const user = await new User({ name, email, password }).save()
            res.json({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                }
            })
        }
    } catch (error) {

    }
}

export const signIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email }).exec()
        if (!user) {
            res.status(400).json({
                message: "Email không tồn tại"
            })
        }
        if (!user.authenticate(password)) {
            res.status(400).json({
                message: "Sai mật khẩu"
            })
        } else {
            const token = jwt.sign({ _id: user._id }, "123456")
            res.json({
                message: "Đăng nhập thành công",
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    status: user.status
                }
            })
        }
    } catch (error) {

    }
}


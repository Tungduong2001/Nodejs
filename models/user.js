import mongoose, { Schema } from "mongoose";
import { createHmac } from "crypto"

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    status: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

userSchema.methods = {
    authenticate(password) {
        return this.password == this.encryPassword(password)
    },
    encryPassword(password) {
        if (!password) return
        try {
            return createHmac("sha256", "332001").update(password).digest("hex")
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function (next) {
    this.password = this.encryPassword(this.password);
    next()
})

export default mongoose.model("User", userSchema)
import mongoose from "mongoose";
import { Schema } from "mongoose";
const userChema = new Schema({
    email: {
        type: String,
        minlength: 5,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('User', userChema)
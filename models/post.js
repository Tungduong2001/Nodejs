import mongoose from "mongoose";
import { Schema } from "mongoose";
const postChema = new Schema({
    title: {
        type: String,
        minlength: 5,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('Post', postChema)
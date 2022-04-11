import mongoose, { Schema } from "mongoose";


const slideSchema = new Schema({
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Slide", slideSchema);

import express from "express";
import cors from "cors"
import morgan from "morgan";
import mongoose from "mongoose";

//import router
import productRoute from "../routers/product"
import postRoute from "../routers/post"
import userRoute from "../routers/user"
import categoryRoute from "../routers/category";


const app = express();

//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json())

//route
app.use(productRoute);
app.use(postRoute);
app.use(userRoute)
app.use("/api", categoryRoute)

//connection database
mongoose.connect('mongodb://localhost:27017/we16309')
    .then(() => console.log("Kết nối DB thành công"))
    .catch((error) => console.log(error));

//connection
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
}) 
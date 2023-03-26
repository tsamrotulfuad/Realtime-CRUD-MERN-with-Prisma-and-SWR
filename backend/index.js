//import depedensi
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
//menggunakan .env file
dotenv.config();

//menggunakan fungsi dari express
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(ProductRoute);

//proses server
app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running');
})
import 'dotenv/config';
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());

//  CORS (safe for production + testing)
app.use(cors({
    origin: [
        "https://food-delivery-project-lac.vercel.app",
        "http://localhost:5173",
        "http://localhost:5174"
    ],
    credentials: true
}));

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// test route
app.get("/", (req, res) => {
    res.send("API Working");
});


//  STEP 1: Start server FIRST (IMPORTANT FIX)
app.listen(port, () => {
    console.log(` Server running on port ${port}`);
});


//  STEP 2: Then connect database
connectDB()
    .then(() => {
        console.log(" MongoDB Connected Successfully");
    })
    .catch((error) => {
        console.error(" MongoDB Connection Failed:", error.message);
    });
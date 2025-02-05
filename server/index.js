import express from "express";
import { connectDb } from "./database/db.js";
import Razorpay from "razorpay";
import cors from "cors";
//import bodyparser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

export const instance = new Razorpay({
  key_id: process.env.Razorpay_Key,
  key_secret: process.env.Razorpay_Secret,
});

const app = express();

// using middlewares
app.use(express.json());
app.use(cors());
// app.use(bodyparser.json())

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.use("/uploads", express.static("uploads"));

// // importing routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

// // using routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  connectDb()
});


app.get('/sampleRoute',async (req,res)=>{
  return res.send('Sample route success');
})

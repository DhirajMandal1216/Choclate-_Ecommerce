import dotenv from "dotenv";
dotenv.config();
import express from "express";
import DbConnection from "./config/db.js";
import userRoutes from "./Routes/newUserRoute.js";

const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());

//db connected
DbConnection();


//router
app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});

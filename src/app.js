import express from "express";
import routerUsers from "./routers/users.js";
import dotenv from "dotenv"
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routerUsers);
app.listen(process.env.PORT, () => {
    console.log("Server đang được chạy 8000");
});


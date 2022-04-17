//рабочие библиотеки
import express from "express";
import cors from "cors";

//импорт роутов
import authRouter from "../api/routes/auth.routes.js";
import userRouter from "../api/routes/user.routes.js";

//инициализация express
const app = express();

//для работы POST
app.use(cors());

//для нормальной работы JSON
app.use(express.json());

//подключение роутов
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

//экспорт
export default app;
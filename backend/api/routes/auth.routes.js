//импортируем библиотеки
import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const authRouter = Router();                    //роутер
const authController = new AuthController();    //контроллер

//регистрация
authRouter.post("/register", authController.createUser);

//логин
authRouter.get("/login", authController.userAuthorization);

//логин через access_token
//authRouter.get("/login_by_token", authController.userAuthorizationByToken);

//обновление access_token
authRouter.get("/update_token", authController.updateUserAccessToken);

export default authRouter;
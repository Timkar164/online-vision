//импортируем библиотеки
import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const userRouter =  Router();                   //роутер
const userController = new UserController();    //контроллер

//добавить данные в массив настроения
userRouter.put("/push_happiness", userController.pushHappiness);

//получить массив настроения
userRouter.get("/get_happiness", userController.getHappiness);

export default userRouter;
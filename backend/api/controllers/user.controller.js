import db from "../../shared/database.js";
import { jwt_key } from "../../shared/security_config.js";
import jwt from "jsonwebtoken";
import { log_in_console } from "../../shared/logger.js";

export class UserController {
    async pushHappiness(req, res) {
        log_in_console("Push in happiness array");                              //логирование

        let user_decoded;                                                       //переменная для хранения логина из токена
        try {                                                                   //отлавливаем невалидный токен
            user_decoded = jwt.verify(req.body.access_token, jwt_key);          //верификация токена
        } catch (_) {
            res.status(401).json("Invalid access token");                       //сообщаем о невалидном токене
            return;
        }

        let arr = await db.query(                                               //получаем уже имеющийся в БД массив
            `SELECT happiness_numerics FROM users WHERE login = '${user_decoded.login}'`
        );

        let new_arr;                                                            //переменная для хранения нового массива

        //concat вызывает исключение если пытаться объединить null и массив, поэтому делаем проверку
        if (arr.rows[0].happiness_numerics !== null) {                          //если в БД уже что-то было
            new_arr = arr.rows[0].happiness_numerics.concat(req.body.happiness) //то объединяем старые и новые данные
        }
        else {                                                                  //иначе
            new_arr = req.body.happiness;                                       //сохраняем лишь новые
        }

        await db.query(`UPDATE users SET happiness_numerics = '{${new_arr}}' WHERE login = '${user_decoded.login}'`)
        res.status(200).json();                                                 //сообщаем об успехе
        return;
    }

    async getHappiness(req, res) {
        log_in_console("Get happiness array");                          //логирование

        let user_decoded;                                               //переменная для хранения логина из токена
        try {                                                           //отлавливаем невалидный токен
            user_decoded = jwt.verify(req.body.access_token, jwt_key);  //верификация токена
        } catch (_) {
            res.status(401).json("Invalid access token");               //сообщаем о невалидном токене
            return;
        }

        let arr = await db.query(                                       //получаем уже имеющийся в БД массив
            `SELECT happiness_numerics FROM users WHERE login = '${user_decoded.login}'`
        );

        res.status(200).json(arr.rows[0]);                              //сообщаем об успехе и возвращаем массив счастья
        return;
    }
}

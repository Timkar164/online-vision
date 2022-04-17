import jwt from "jsonwebtoken"                                  //генератор jwt
import db from '../../shared/database.js'                       //БД
import { log_in_console } from "../../shared/logger.js"         //логирование
import { jwt_key } from "../../shared/security_config.js"       //токен из конфига
import { generate_token } from "../../shared/token_generator.js"

export class AuthController {
    //регистрация
    async createUser(req, res) {
        log_in_console("Register request");                     //логирование

        try {                                                   //отлавливаем случай когда логин уже занят
            //пробуем записать данные в БД
            await db.query(`INSERT INTO users (login, password) VALUES ('${req.body.login}', '${req.body.password}');`);
        }
        catch (_) {                                             //обрабатываем
            res.status(409).json("Already exists");             //возвращаем статус Conflict
            return;
        }

        res.status(201).json(generate_token(req.body.login));   //сообщаем об успешной регистрации и возвращаем токены
        return;
    }

    //авторизация через логин-пароль
    async userAuthorization(req, res) {
        log_in_console("Authorization request");                    //логирование

        //ищем пользователя с заданным логином к БД
        const user = await db.query(`SELECT password FROM users WHERE login = '${req.body.login}';`);

        if (!user.rowCount) {                                       //зарегистрирован ли пользователь
            res.status(404).json('User not found');                 //если нет, то возвращаем статус Not found
            return;
        }

        if (req.body.login === user.rows[0].password) {             //если пароль правильный

            res.status(200).json(generate_token(req.body.login));   //сообщаем об успешной авторизации и возвращаем токены
            return;
        }

        res.status(401).json('Wrong password');                     //сообщаем о том, что введённый пароль неверный
        return;
    }

    // //авторизация через access token
    // async userAuthorizationByToken(req, res) {
    //     log_in_console("Authorization by access token request")         //логирование

    //     let user_decoded;                                               //переменная для хранения логина из токена
    //     try {                                                           //отлавливаем невалидный токен
    //         user_decoded = jwt.verify(req.body.access_token, jwt_key);  //верификация токена
    //     }
    //     catch (err) {
    //         console.log(err);
    //         res.status(401).json('Invalid access token');               //сообщаем о невалидном токене
    //         return;
    //     }

    //     res.status(200).json(generate_token(user_decoded.login));       //сообщаем об успешной авторизации и возвращаем токены
    //     return;
    // }

    //обновление токенов
    async updateUserAccessToken(req, res) {
        log_in_console("Update access token request");

        let user_decoded;                                                       //переменная для хранения логина из токена
        try {                                                                   //отлавливаем невалидный токен
            user_decoded = jwt.verify(req.body.refresh_token, jwt_key);         //верификация токена
        }
        catch (_) {
            res.status(401).json('Invalid refresh token');                      //сообщаем о невалидном токене
            return;
        }

        const access_token = generate_token(user_decoded.login).access_token;

        res.status(200).json({ access_token });                                 //сообщаем об успешной авторизации и возвращаем токены
        return;
    }
}
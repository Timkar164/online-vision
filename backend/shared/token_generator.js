import { jwt_key } from "./security_config.js"
import jwt from "jsonwebtoken"

export function generate_token(username) {
    return {                                        //генерируем токены
        access_token: jwt.sign(
            { login: username },
            jwt_key,
            { expiresIn: 900 }                      //15 минут
        ),
        refresh_token: jwt.sign(
            { login: username },
            jwt_key,
            { expiresIn: 2592000 }                  //30 дней
        )
    };
}
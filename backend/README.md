# Как установить backend.

1) Установите [Docker](https://www.docker.com/get-started/)

____
2) Скачайте папку backend из корня репозитория 

____
3) Откройте консоль в данной директории и напишите 
```
docker-compose up
```

# Как использовать backend.

## Инструкция по созданию запросов.

Время действия JWT токенов:<br>
Access token: 15 минут<br>
Refresh token: 30 дней<br>

## Запросы авторизации

### Регистрация нового пользователя
`http://<ip-адрес>:<порт>/api/auth/register`<br>
(login **обязан** быть уникальным)<br>
```
POST:
{
    "login": "admin",
    "password": "admin"
}
```
> Статус 201: Пользователь добавлен в БД, обратно возвращается объект с access_token и refresh_token.<br>

> Статус 409: login уже занят.<br>

### Авторизация пользователя по логину и паролю
`http://<ip-адрес>:<порт>/api/auth/login`<br>
```
GET:
{
    "login": "admin",
    "password": "admin"
}
```
> Статус 200: Логин и пароль валидные, обратно возвращается объект с access_token и refresh_token.<br>

> Статус 401: Пользователь найден, но введён неправильный пароль.<br>
> Статус 404: Пользователь с таким login не найден.<br>

### Авторизация пользователя через Access token - **УСТАРЕЛО**
`http://<ip-адрес>:<порт>/api/auth/login_by_token`<br>
```
GET:
{
    "access_token": "someaccesstoken"
}
```
> Статус 200: Токен валидный, обратно возвращается объект с access_token и refresh_token.<br>

> Статус 401: Невалидный access_token.<br>

### Обновление токенов через Refresh token
`http://<ip-адрес>:<порт>/api/auth/login_by_token`<br>
```
GET:
{
    "refresh_token": "somerefreshtoken"
}
```
> Статус 200: Токен валидный, обратно возвращается объект с access_token и refresh_token.<br>

> Статус 401: Невалидный refresh_token.<br>
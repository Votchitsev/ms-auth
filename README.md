# Микросервис для авторизации и аутентификации пользователей

## Запуск

```
git clone https://github.com/Votchitsev/ms-auth.git
```

```
cd ms-auth/
```

```
# Создайте в корне проекта .env файл со следующими переменными:

APP_PORT=<порт внутри контейнера>
EXTERNAL_APP_PORT=<внешний порт приложения>

DB_NAME=<имя базы данных>
DB_USER=<имя пользователя>
DB_PASSWORD=<пароль>
DB_PORT=<порт базы данных в контейнере>
EXTERNAL_DB_PORT=<внешний порт базы данных>
```

```
docker-compose up
```

После запуска приложение должно быть доступно на ```http://<HOSTNAME>:<EXTERNAL_APP_PORT>```

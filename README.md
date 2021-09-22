# guia-perguntas

### Install

1- Create your databases and then create a config/config.json with your databases enviroments

> Example:
> {
> "test": {
> "username": "YOUR_USER",
> "password": "YOUR_PASSWORD",
> "database": "yourDB_test",
> "host": "YOUR_HOST",
> "dialect": "mysql"
> },
> "development": {
> "username": "YOUR_USER",
> "password": "YOUR_PASSWORD",
> "database": "yourDB_development",
> "host": "YOUR_HOST",
> "dialect": "mysql"
> },
> "production": {
> "username": "YOUR_USER",
> "password": "YOUR_PASSWORD",
> "database": "yourDB_production",
> "host": "YOUR_HOST",
> "dialect": "mysql"
> }
> }

2- Run migrations:

> npx sequelize-cli db:migrate

3- Run the application:

> node index.js

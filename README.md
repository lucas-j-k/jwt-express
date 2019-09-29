Test app implementing JWT authentication with Express, Sequelize and SQLite3.

## To run locally
+ Create an empty file called `.database.sqlite3` in the project root to hold the SQLite database
+ Make sure you have sequelize-cli installed, and run `npx sequelize db:migrate` to set up the user table in database.sqlite3
+ Database connection is handled in models/index.js as part of the sequelize boilerplate
+ Run `npm start` to start server on localhost:3000

You can use Postman to send requests to the following endpoints:

+ POST - `/api/user/register` with `{username, email, password}` in the request body
+ POST - `/api/user/login` with `{email, password}` as the request body
+ GET  - `/api/protected` which you will only be able to access if successfully logged in

Based on [this](https://www.youtube.com/watch?v=2jqok-WgelI) video tutorial

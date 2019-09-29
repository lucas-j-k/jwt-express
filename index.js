const express = require('express');

//Import and initialise the environment variables - stored in .dotenv file in project root
require('dotenv').config();

//Import Routes
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

//Initialise Express
const app = express();

//Set up parser so we can read JSON info from the request
app.use(express.json());

//Set up API routes
app.use('/api/user', authRoutes);
app.use('/api/protected', protectedRoutes);

//404 Error route as a catch-all
app.use((req, res, next)=>{
    res.status(404).send("Error 404 - Resource not found");
});

//Set default port to serve app on
const port = process.env.PORT || 3000;

app.listen(port, console.log(`App running on port: ${port}`));
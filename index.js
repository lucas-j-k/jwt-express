const express = require('express');
const authRoutes = require('./routes/auth');

const port = process.env.PORT || 3000;
const app = express();


//API routes middleware
app.use('/api/user', authRoutes);



//404 Error route as a catch-all if it doesn't match any defined routes
app.use((req, res, next)=>{
    res.status(404).send("Error 404 - Resource not found");
})

app.listen(port, console.log(`App running on port: ${port}`));
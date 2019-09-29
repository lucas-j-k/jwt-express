//Authentication Routes

const router = require('express').Router();

router.post('/register', (req, res)=>{
    //Create a user account based on the information in the request body
})


router.get('/ping', (req, res)=>{
    res.send("Route found => /API/PING");
})

module.exports = router;
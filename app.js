const express = require('express')
const cors = require('cors')
const app = express()
var bodyParser = require('body-parser'); 
 require('dotenv').config()
const userRoute = require('./routes/user.route')
 app.use(cors()) 
 app.use(bodyParser.urlencoded({ extended: false }))
 
 app.use(bodyParser.json())


 
 app.use('/', userRoute)



 
 app.get('/', (req, res) => { 
     // res.send('this is practice server')
     res.send("hello server")
    });
 

app.use((req, res, next)=> {
     res.status(404).json({ 
        message: "404 not found",
        
     })
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({
        message: 'Something went wrong!',
        error: err.message,
    });
});
 




module.exports = app;
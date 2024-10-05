 
 const express = require('express');
const { getUser, createUser,deleteUser, updateUser } = require('../controller/user.controller');

 const router = express.Router();

//  router.post('/register', register)
 router.get('/users', getUser)
 router.post('/users', createUser)
 router.delete('/users/:id', deleteUser)
 router.put('/users/:id', updateUser)

 module.exports = router;
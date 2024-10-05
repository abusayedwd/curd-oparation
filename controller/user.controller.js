
let users = require("../model/user.model")
const { v4: uuidv4 } = require('uuid');

const getUser = (req, res) => { 
   res.status(201).json({
    message: 'user get success',
    data: users
   })
//    console.log(users);
   
}

const updateUser = (req, res) => { 
    const id = req.params.id;
    const {name, email} = req.body;
    users.filter(user => user.id === id).map(selectuser => {
       selectuser.name = name,
       selectuser.email = email
    })
   res.status(200).json({
    message: 'user Update success',
    data: users
   })
//    console.log(users);
   
}

const createUser = (req, res) => { 
    const newUser = {
         name : req.body.name,
         email : req.body.email,
          id : uuidv4()
    }
    users.push(newUser)
   res.status(201).json({
    message: 'user create success',
    data: users
   }) 
}

const deleteUser = (req, res) => { 
    const id = req.params.id;
    users = users.filter(user => user.id !==id)
   res.status(201).json({
    message: 'user delete success',
    data: users
   }) 
}

module.exports = {
    createUser,
    getUser,
    deleteUser,
    updateUser,
}
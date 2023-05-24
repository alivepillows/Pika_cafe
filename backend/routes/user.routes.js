const express = require(`express`)
const app = express()
app.use(express.json())
const userController = require(`../controller/user.controller`)
const  auth = require(`../controller/auth.controller`)

//endpoint
app.post("/login", userController.login)
app.get("/get",auth.authVerify,userController.getAllUser)
app.post("/add",auth.authVerify,userController.addUser)
app.post("/find", userController.findUser)
app.put("/update/:id", auth.authVerify,userController.updateUser)
app.delete("/delete/:id", auth.authVerify,userController.deleteUser);

module.exports = app
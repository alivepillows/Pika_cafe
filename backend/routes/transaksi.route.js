const express = require(`express`)
const app = express()

app.use(express.json())

// call transaksiController
let transaksiController = require("../controller/transaksi.controller")
const  auth = require(`../controller/auth.controller`)

// endpoint get data transaksi
app.get("/get", auth.authVerify,transaksiController.getAlltransaksi)
app.post("/add",auth.authVerify, transaksiController.addtransaksi)
app.post("/find", auth.authVerify,  transaksiController.findtransaksi)
app.put("/update/:id", auth.authVerify,transaksiController.updatetransaksi)
app.delete("/delete/:id", auth.authVerify,transaksiController.deletetransaksi)


module.exports = app
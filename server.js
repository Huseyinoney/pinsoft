const express = require("express")
const app = express()
const serverController = require('./Controller/serverController')
const PORT = 3000

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.post("/", serverController.getMineSwepper) 


app.listen(PORT , ()=> {
    console.log("sunucu %d portunda hazır",PORT)
})
const express=require("express")
const app= express()
const bodyParser = require("body-parser") 
const db = require("./db")
const __htmlfiles="C:\\Users\\Ian Marcony\\Documents\\Programming\\Java\\Projeto-2019-Easy-Sale\\Venda_Facil_ProjetoIan\\Site\\"

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(__htmlfiles))

app.get("/",function (req,res) {
    res.sendFile(__htmlfiles+"index.html")
    
})

app.get("/tutorial",function(req,res) {
    res.sendFile(__htmlfiles+"tutorial.html")
})



app.listen("8081",function() {
    console.log("Rodando Servidor")
})
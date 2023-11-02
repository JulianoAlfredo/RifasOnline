const express = require("express")
const bodyParser = require('body-parser');


const { login } = require("./src/controllers/auth/AuthController");
const OrderController = require("./src/controllers/buyTickets/OrderController");
const BuyController = require("./src/controllers/buyTickets/BuyController");
const CreateRifaController = require("./src/controllers/createRifa/CreateRifaController");
const { compraNumero, monitorarAlteracoesNoArquivo } = require("./src/database/lowdb");

const app = express()
app.use(bodyParser.json());

app.post("/createUser", function(req, res) {
    login(req, res);
})

app.post("/createOrder", function(req, res){
    OrderController.createOrder(req, res);
})
app.post("/buyTicket", function(req, res){
    BuyController.Buy(req, res);
})
app.post("/createRifa", function(req, res){
    compraNumero(req, res)
})
monitorarAlteracoesNoArquivo()
app.listen(3000, () =>{
    console.log("Servidor iniciado porta 3000")
})
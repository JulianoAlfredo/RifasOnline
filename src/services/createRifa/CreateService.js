const { criarRifa } = require("../../database/lowdb")

class CreateRifaService{
    async serviceCreateRifa(nome, descricao, precoNumero, res){
        criarRifa(nome, descricao, precoNumero)
        res.send("Endpoint enviado")
    }
}


module.exports = new CreateRifaService()
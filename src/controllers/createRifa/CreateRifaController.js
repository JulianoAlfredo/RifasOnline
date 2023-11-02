const CreateRifaService = require("../../services/createRifa/CreateService.js")

class CreateRifaController {
    async createRifa(req, res){
        const {nome, descricao, precoNumero} = req.body
        

        CreateRifaService.serviceCreateRifa(nome, descricao, precoNumero, res)
    }
}

module.exports = new CreateRifaController()
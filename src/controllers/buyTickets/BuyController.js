const BuyService = require("../../services/buyTickets/BuyService")
class BuyController {
    async Buy(req, res){
        var {numerosEscolhidos} = req.body
        BuyService.buyTicket(...numerosEscolhidos)
    }
}


module.exports = new BuyController()
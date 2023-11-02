const BuyService = require("../../services/buyTickets/BuyService")
class BuyController {
    async Buy(req, res){
        var arr = [3,2,4,6,7]
        BuyService.buyTicket(...arr)
    }
}


module.exports = new BuyController()
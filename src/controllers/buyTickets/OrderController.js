const OrderService = require("../../services/buyTickets/OrderService.js")

class OrderController {
    async createOrder(req, res){
        const order = OrderService.createOrder(1, 123, "Pending", [1] ,"5", "100.00", "CREDIT")
    }
}

module.exports = new OrderController()
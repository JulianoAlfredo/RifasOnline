class OrderService {
    constructor(buyer, rifa, status, numbers,quantity, amount, payment) {
        this.order = {
          "buyerId": buyer,
          "rifaId": rifa,
          "orderStatus": status,
          "numberBuyed": numbers,
          "ticketQuantity": quantity,
          "totalAmount": amount,
          "paymentMethod": payment
        };
      }


    createOrder(buyer, rifaId, status, numbers, quantity, amount, payment){
        const order = new OrderService(buyer, rifaId, status, numbers, quantity, amount, payment)
        console.log(order)
    }

}

module.exports = new OrderService()
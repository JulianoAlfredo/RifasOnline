class BuyService {
    constructor(){
        this.numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
        this.numbersBuyed = []

    }
    async buyTicket(numArr){
        let numeros = this.numbers
        let numerosComprados = [2,9 , 6,10,30,20]
        let numerosEscolhidos = [...arguments]    // 2, 3, 4, 6, 7


        let numerosDisponiveis = numeros.filter(a => !numerosComprados.includes(a))
        
        if(numerosDisponiveis){
            let verifica = numerosComprados.filter(numero => numerosEscolhidos.includes(numero))
            if(verifica){
                console.log("Esse numero ja foi comprado: "+verifica)
                numerosComprados.push(...numerosEscolhidos)
            } 
            
        }
        console.log(numerosComprados)   
    }
}


module.exports = new BuyService()
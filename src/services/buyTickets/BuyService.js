const { buscarNumerosComprados,buscarNumerosDisponiveis, compraNumero } = require("../../database/lowdb")

class BuyService {
    async buyTicket(){
        let numeros = buscarNumerosDisponiveis(22566)
        let numerosComprados = buscarNumerosComprados(22566)
        let numerosEscolhidos = [...arguments]    // 2, 3, 4, 6, 7


        let numerosDisponiveis = numeros.filter(a => !numerosComprados.includes(a))
        
        if(numerosDisponiveis){
            let verifica = numerosComprados.filter(numero => numerosEscolhidos.includes(numero))
            if(verifica){
                console.log("Esse numero ja foi comprado: "+verifica)
                compraNumero(22566, ...numerosEscolhidos)
            } 
            
        }
        console.log(numerosComprados)   
    }
}


module.exports = new BuyService()
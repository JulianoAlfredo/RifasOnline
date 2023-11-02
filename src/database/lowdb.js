const fs = require('fs');

const databaseFile = 'rifas.json';
let rifas = [];


// Carregar dados do arquivo (se o arquivo existir)
try {
    let data = fs.readFileSync(databaseFile, 'utf8');
    rifas = JSON.parse(data);
} catch (err) {
    // Se o arquivo não existe, criaremos um novo
    saveRifas();
}

function carregarDados() {
    try {
        const data = fs.readFileSync(databaseFile, 'utf8');
        rifas = JSON.parse(data);
    } catch (err) {
        // Se o arquivo não existe, criaremos um novo
        saveRifas();
    }
}
function monitorarAlteracoesNoArquivo() {
    fs.watchFile(databaseFile, (curr, prev) => {
        if (curr.mtime > prev.mtime) {
            console.log(`O arquivo ${databaseFile} foi modificado. Recarregando dados...`);
            carregarDados();
        }
    });
}
function saveRifas() {
    const data = JSON.stringify(rifas, null, 2);
    fs.writeFileSync(databaseFile, data, 'utf8');
    console.log("Rifa salva")   
}
function generateId() {
    return Math.floor(Math.random() * 100000);
}
function buscarRifaId(id){
    return rifas.find(rifa =>rifa.id == id)
}
function buscarNumerosDisponiveis(rifaId){
    return buscarRifaId(rifaId).numeros
    
}
function buscarNumerosComprados(rifaId){
    return buscarRifaId(rifaId).numeros_comprados
}

function compraNumero(rifaId){
    const numerosEscolhidos  = [...arguments]
    const aa = numerosEscolhidos.shift()


    
    const rifa = buscarRifaId(rifaId)
    let novosNumeros = rifa.numeros.filter(a => !numerosEscolhidos.includes(a))

    rifa.numeros = novosNumeros
    rifa.numeros_comprados = numerosEscolhidos

    saveRifas()


    console.log(numerosEscolhidos)
   
}
// Rota para criar uma nova rifa
function criarRifa(nome, descricao, preco_numero) {
    const novaRifa = {
        id: generateId(),
        nome,
        descricao,
        numeros: Array.from({ length: 51 }, (_, i) => i), // Gera um array de 0 a 50
        numeros_comprados: [],
        preco_numero: parseFloat(preco_numero),
    };
    rifas.push(novaRifa);
    saveRifas();
    return novaRifa;
}



module.exports = {
    buscarNumerosComprados,
    compraNumero,
    buscarNumerosDisponiveis,
    monitorarAlteracoesNoArquivo,
    criarRifa,
};

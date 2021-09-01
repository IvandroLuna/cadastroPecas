const listaDePecas = ["Pneu", "Roda", "Motor", "Amortecedor"]

console.log(listaDePecas)

if (listaDePecas.length < 10)
    console.log("È possivelCadastrar mais pecas")
else {
    console.log("Limite de cadastro excedido")
}
let peso = 200;

if (peso > 300) {
    console.log("Peso da peca adequado")
}
else {
    console.log("peso insuficiente")
}

let nomePeca = "Embreagem"

if (nomePeca.length > 3) {
    console.log("Nome adequado !")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
} else {
    console.log("O nome deve possuir mais de 3 caracteres")
}






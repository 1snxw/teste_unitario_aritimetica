const leia = require('readline-sync')
const {som,sub,mult,div} = require('./aritimetica')

function main(){
console.log('----------------------------------------')
let a = Number(leia.question("digite o primeiro numero: "))
let b = Number(leia.question("digite o segundo numero: "))
console.log('----------------------------------------')
console.log("Digite uma operacao + , - , * , /")
let op = leia.question(" Qual a operação desejada: ")

console.log(a)
console.log(b)
console.log(op)

let resultado = 0

switch (op){
    case '+':
        resultado = som(a,b)
        break

    case '-':
        resultado = sub(a,b)
        break
    
    case '*':
        resultado = mult(a,b)
        break

    case '/':
        resultado = div(a,b)
        break
        
    default:
        console.log("opcao invalida")
}
console.log('o resultado e = ', resultado)
}

main()
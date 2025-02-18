let num1 = 3
let num2 = 3

let total = num1 + num2
console.log(total)

let numero1 = '1'
let numero2 = 1

console.log(num1 === num2) // strict tipo e valor tem que ser iguais
console.log(num1 == num2) // lose somente o valor igual

// Operador ternario
let driver = 90
let speed = driver > 110 ? 'ABOVE' : 'BElOW'
console.log(speed)

// and e &&
// or ou ||
// not !

let temIdadeMinima = true
let temTituloEleitor = true
let podevotar = temIdadeMinima && temTituloEleitor
console.log(podevotar)

let podeviajar = !podevotar
console.log(podeviajar)

// corCliente white
let corCliente = undefined
let corEstoque = 'Black'
let corVendida = corCliente || corEstoque
console.log(corVendida)
const num = [7, 8, 9]
num.push(10, 11, 12)
num.unshift(1, 2, 3)
num.splice(3, 0, 4, 5)
console.log(num)

let numero = [5, 8, 8]
numero.length = 0

numero.splice(0, numero.length)
console.log(numero)

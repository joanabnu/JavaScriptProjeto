console.log('JavaScript')
let firstName = 'Joana'
let lastname = 'Maria'

console.log(firstName)
console.log(lastname)

let price = 30
console.log(price)

let itemName = 'Pen'// String
let itemPrice = 3 // numero
let itemAvailable = true // boolean
let itemColor // valor indefinido - undefined
let item2 = null // valor null
console.log(itemName)

// objetos
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}
pen.itemColor = 'blue'
console.log(pen)
console.log(pen.itemName)

let friends = ['Marcos', 'Silvia', 'Elisa']
friends[1] = 'Junior'
console.log(friends)

// funcao
function salesStatus(Status,total) {
  console.log('Transação ' + Status + ' Total amount $ ' + total)
}
salesStatus('Aprovada',50)

// funcao com calculo

function percentage10(price){
    return price - (price * 10 / 100)
}
console.log(percentage10(40))

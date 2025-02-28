let favorite = ', pizza e burgues'
document.getElementById('text').innerHTML = favorite
console.log('Hallo')

let produtovalue = Number(prompt(`entre o valor : `))
console.log(produtovalue)

if (produtovalue >=20){
    document.getElementById('resultado').innerHTML = 'Aprovado'
}
else {
    document.getElementById('resultado').innerHTML = 'Não aprovado'
}
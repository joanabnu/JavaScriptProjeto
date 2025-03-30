function prince(){
    let total = 0
    for (let value of arguments)
        total+= value
    return total
}
console.log(prince(10,20,30,40))
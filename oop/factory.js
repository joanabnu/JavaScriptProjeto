function createBook(title,author,pages){
    const book = {
        bookTitle:title,
        bookAuthor:author,
        book:pages,
        printBook: function() {
            console.log('Printing...')
        }
    }
    return book
}
const book1 = createBook('Atomic', 'James',306)
const book2 = createBook('Trink', 'Napolean',408)
console.log(book1)
console.log(book2)
book1.color = 'white'
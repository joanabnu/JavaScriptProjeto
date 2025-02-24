


const book = {
    bookTitle: 'Habitos Atomicos',
    bookAuthor: 'James clear',
    bookPages:  306,
    bookChapters:{
        chap1: 'Fundamentals',
        chap2: '1st law'
    },
    printBook: function(){
       console.log('priting...')
    }
}

// function printBook(){
//     console.log('printing...')
// }
book.printBook()
console.log(book)

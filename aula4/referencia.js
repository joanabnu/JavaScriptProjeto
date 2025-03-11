const movies = [
    {id: 1, movieName: 'Dejavu'},
    {id: 2, movieNme: 'Back to the future'},
    {id: 3, movieName: 'The Matrix'}
]
console.log(movies.includes({id: 1, movieName: 'Dejavu'}))

// console.log(movies.find(function(movie){
//     return movie.movieName == 'The Matrix'
// }))


// arrow funcion
console.log(movies.find(movie => movie.movieName == 'The Matrix'
))

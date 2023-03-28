const movieDb = [
    {
        id: 1,
        title: "Harry Potter y el caliz de fuego",
        description: "Lorem Ipsum",
        year: 2005,
        director: "Mike Newell"
    },
    {
        id: 2,
        title: "Harry Potter pricipe",
        description: "Lorem Ipsum",
        year: 2003,
        director: "Newell"
    }
]
let movieId = 3

const findAllMovies = async () => {
    return movieDb
}
const findmovieById = async (id) => {
    const data = movieDb.find(movie => movie.id === id)
    return data
}

const createMovie = async (movieObj) => {
    const newmovie = {
        id: movieId++,
        title: movieObj.title || 'Anonymous',
        description: movieObj.description || 'Lorem Ipsum',
        year: movieObj.year || '2999',
        director: movieObj.director || 'Anonymous'
    }
    movieDb.push(newmovie)  
       return newmovie
}   

module.exports = { 
    findAllMovies, 
    findmovieById, 
    createMovie, }
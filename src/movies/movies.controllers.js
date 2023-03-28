const movieDb = [
    {
        id: 1,
        name: 'Sahid',
        email: "sahid.kick@academlo.com",
        password: 'root'
    },
    {
        id: 2,
        name: 'Alejandro Aguilar',
        email: "alejandro@gmail.com",
        password: 'root'
    }
]
let movieId = 3

const findAllmovies = async () => {
    return movieDb
}
const findmovieById = async (id) => {
    const data = movieDb.find(movie => movie.id === id)
    return data
}

const createmovie = async (movieObj) => {
    const newmovie = {
        id: movieId++,
        name: movieObj.name || 'Anonymous',
        email: movieObj.email || 'example@example.com',
        password: movieObj.password || 'root'
    }
    movieDb.push(newmovie)  
       return newmovie
}   

module.exports = { 
    findAllmovies, 
    findmovieById, 
    createmovie, }
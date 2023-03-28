const movieControllers = require('./movies.controllers')
//! const { findAllmovies, findmovieById, createmovie, updatemovies} = require('./movies.controllers') 



const getAllmovies = (req, res) => {
    movieControllers.findAllmovies()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({ message: 'Bad request', err })
        })
}

const getmovieById = (req, res) => {
    const id = Number(req.params.id)
    movieControllers.findmovieById(id).then(data => {
        //? En caso de que data no exista (el usuario no exista)  
        if (!data) {
            return res.status(404).json({ message: `movieswith id: ${id}, not found` })
        }
        res.status(200).json(data)
    })
        .catch(err => {
            res.status(400).json({ message: 'Bad request', err })
        })
}

const postNewmovies= (req, res) => {
    const movieObj = req.body
    movieControllers.createmovie(movieObj)
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.status(400).json({message: 'Bad request', err})
    })
}

module.exports = {
    getAllmovies,
    getmovieById,
    postNewmovies
}
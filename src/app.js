const express = require('express')

const moviesRouter = require ('./movies.router')
const app = express()

app.use(express.json())

app.get('/',(req,res) =>{
    res.json({message: 'Server Ok'})
})

app.use('/', moviesRouter)

app.listen(3000, () => {
    console.log('Server started at port 3000')
})

module.exports = app

// hola
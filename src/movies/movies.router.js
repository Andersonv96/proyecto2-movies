const router = require('express').Router()

const userServices = require('./movies.services');

router.get('/user', userServices.getAllUsers)
router.post('/users', userServices.postNewUser)
router.get('/users/:id', userServices.getUserById)
const express = require('express')
const UserController = require('../Controller/User')
const Router = express.Router()

Router.route('/').get(UserController.GetUser).post(UserController.CreateUser)

module.exports = Router
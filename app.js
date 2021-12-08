const express = require('express')
const morgan = require('morgan')
const fs = require('fs')

const app = express();
app.use(morgan('dev'))

let data = fs.readdirSync('./Routes')
data.forEach((el) => {
    
})



module.exports = app


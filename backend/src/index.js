const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()

//MongoDB (não-relacional)
mongoose.connect('mongodb+srv://userAdmin:adminUser@devmaps-m4bok.mongodb.net/semana-10?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333)
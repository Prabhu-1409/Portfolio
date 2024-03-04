const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json())
app.use(bodyparser.json())
const port = 3001

const mod = require('./model')

mongoose.connect('mongodb://127.0.0.1:27017/login').then(()=>{
    console.log('connected')
}).catch((err)=>{
    console.log(err)
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    mod.create(req.body)
})

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(port,(req,res)=>{
    console.log('Listening')
})
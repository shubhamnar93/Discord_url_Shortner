const express = require('express')
const {connetMongoose}=require('./connection.js')
const urlRouter = require('./routes/url.js')


const app = express()
const port = 3000;

connetMongoose('mongodb://127.0.0.1:27017/urlShortner')

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use('/url', urlRouter)


app.listen(port,()=>{console.log('hello from port 3000')})
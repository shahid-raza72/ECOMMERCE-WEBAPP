const express = require('express')
const products =require('./data/products')
const dotenv = require('dotenv') 
const connectdb = require('./config/db')


dotenv.config()
connectdb()
const app = express()

app.get('/',(req,res)=>{
    res.send('api is runing')
})

app.get('/api/product',(req,res)=>{
    res.json(products)
})

app.get('/api/product/:id',(req,res)=>{
    const product = products.find((p)=>p._id===req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log('server running at port 5000'))
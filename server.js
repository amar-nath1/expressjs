

const http=require('http')

const express=require('express')
const bodyParser=require('body-parser')
const app=express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{

  res.send("<form action='/product' method='POST'><input type='text' placeholder='item name' name='title'/><input type='text' placeholder='size' name='size'/> <button type='submit'>Submit</button> </form>")

})

app.use('/product',(req,res,next)=>{
  console.log(req.body)
  res.redirect('/')
})

app.use('/',(req,res,next)=>{

  res.send("<h2>mil gya item. or aa gya home par</h2>")

})

const server=http.createServer(app)

server.listen(3000)
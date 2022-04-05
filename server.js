const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());

app.get('/' , function (req,res){
    res.sendFile(path.resolve(__dirname, 'index.html'))
})
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "login.html"))
})
app.get("/signup", (req,res)=>{
    res.sendFile(path.response(__dirname,'signup.html'))
})
app.get('/cart', function (req,res){
    res.sendFile(path.resolve(__dirname,'cart.html'))
})
app.get('/home', function (req,res){
    res.sendFile(path.resolve(__dirname,'index.html'))
})
app.get('/menu', function (req,res){
    res.sendFile(path.resolve(__dirname,'menu.html'))
})
app.get('/order', function (req,res){
    res.sendFile(path.resolve(__dirname,'order.html'))
})

if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 4000;
    app.listen(port, ()=>console.log(`Server don start for port ${port}`));
}
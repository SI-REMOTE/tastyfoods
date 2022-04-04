const express = require('express');
const cors = require('cors');

const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());
app.get('/home',function (req,res){//takes two argument (url/callbackfunction)
    res.send("HHEll no wORLD");
}) //server side only uses relative path
app.get('/',(req,res)=>{
    res.send("<h1>Welcome to HOmepage")
})
app.get('/login',(req,res)=>{
    res.sendFile(path.resolve(__dirname,"express.html")) //send file with argument(__dirname,path)
})
//app.get('/login/submit', function (req,res){
//    res.sendFile(path.resolve(__dirname, ""))
//})
app.get('/login/submit', function (req,res){
    res.send(req.params)
})
app.get('/product/:type/:name', function (req,res){
    res.send(req.params.type+"/"+req.params.name)
})

if(process.env.NODE_ENV === 'production'){
    app.listen();
}
else{
    const port = process.env.PORT || 5000;
    app.listen(port, ()=>console.log(`Server don start for port may be ${port}  \n RITA GO CRY`));
}
//READ FORM, JAVA-SCRIPT, DATABASE

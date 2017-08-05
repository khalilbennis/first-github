const express =require('express');
const hbs =require('hbs');
const fs =require('fs');

const port=process.env.Port || 3000;
var app=express();

hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.use((req,res,next)=>{
  var now =new Date().toString();
  console.log(now+req.method+req.url);

  next();
});
app.use((req,res,next)=>{
  res.render('err.hbs');
});

app.get('/',(req,res)=>{
res.render('home.hbs',{
  pagetitle:'home page',
  desc:'fuck you',
  currentYear:new Date().getFullYear()
})
});


app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    pagetitle:'about page',
    currentYear:new Date().getFullYear()
});
});
app.listen(port,()=>{
  console.log(`port ising ${port}`);
});

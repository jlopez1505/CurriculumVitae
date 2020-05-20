const express = require('express'), project = express(), path = require('path'), cookieParser = require('cookie-parser'), 
cookieSession = require('cookie-session');

project.use(cookieParser()),
project.use(cookieSession({secret: "esto tiene alguna funcion de seguridad"}))

project.use(express.static(path.join(__dirname, "/public")));

project.get('/index', (req, res)=>{
    res.sendFile(`${__dirname}/vistas/index.html`);
});
project.get('/academia', (req, res)=>{
    res.sendFile(`${__dirname}/vistas/academia.html`);
});
project.get('/acerca', (req, res)=>{
    res.sendFile(`${__dirname}/vistas/acerca.html`);
});
project.get('/skills', (req, res)=>{
    res.sendFile(`${__dirname}/vistas/skills.html`);
});
project.get('/xperience', (req, res)=>{
    res.sendFile(`${__dirname}/vistas/xperience.html`);
});
project.get('/contact', (req, res)=>{
    res.sendFile(`${__dirname}/vistas/contact.html`)
});


project.listen(3000);
console.log("Está vivo");


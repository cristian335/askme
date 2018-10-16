const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log +'\n', (err) => {
        if (err) {
            console.log('Unable to appen server.log');
        }
    });
    next();
});

// app.use((req,res,next) => {
//     res.render('maintanance');
// make a true or false via socket.io
// });

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text)=>{
    return text.toUpperCase();
});

app.get('/', (req,res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to my website'

    });
});

app.get('/about', (req,res)=>{
    res.render('about.hbs', {
        pageTitle: 'About Page'

    });
});

app.get('/contact-us', (req,res)=>{
    res.render('contact-us.hbs', {
        pageTitle: 'About Page'

    });
});

app.get('/faq', (req,res)=>{
    res.render('faq.hbs', {
        pageTitle: 'About Page'

    });
});

app.get('/features', (req,res)=>{
    res.render('features.hbs', {
        pageTitle: 'About Page'

    });
});

app.get('/login', (req,res)=>{
    res.render('login.hbs', {
        pageTitle: 'About Page'

    });
});

app.get('/registration', (req,res)=>{
    res.render('registration.hbs', {
        pageTitle: 'About Page'

    });
});

app.get('/maintanance', (req,res)=>{
    res.render('maintanance.hbs', {
        pageTitle: 'About Page'

    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
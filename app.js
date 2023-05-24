const express = require('express');
require('dotenv').config();
const hbs = require('hbs');


const app = express();
const port = process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático
app.use( express.static('public'));


app.get('/', (req, res)  => {
    res.render('home', {
        nombre: 'Misael Guzmán',
        titulo: 'Curso de Node'
    });
});

app.get('/generic', (req, res)  => {
    res.render('generic', {
        titulo: 'Curso de Node Misael Guzmán'
    }); 
});

app.get('/elements', (req, res)  => {
    res.render('elements', {
        titulo: 'Curso de Node Misael Guzmán'
    }); 
});



app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
const { response } = require('express');
const express = require('express');

const route = express.Router();

route.get('/', (require, response) => response.render("index"));
route.get('/create-pass', (require, response) => response.render("create-pass"));
route.get('/room', (require, response) => response.render("room"));

//Formato que o formulário de dentro da modal tem que passar a informação
// route.post('/room/:room/:question/:action')


module.exports = route;
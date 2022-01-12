const { response } = require('express');
const express = require('express');
const QuestionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomCrontroller');

const route = express.Router();

route.get('/', (request, response) => response.render("index", {page: 'enter-room'}));
route.get('/create-pass', (request, response) => response.render("index", {page: 'create-pass'}));
route.get('/room/:room', (request, response) => response.render("room"));

//Formato que o formulário de dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index);
route.post('/create-room', RoomController.create);

module.exports = route;
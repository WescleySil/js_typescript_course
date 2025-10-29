const app = require('./app');
const axios = require('axios');
const path = require('path');
const { Pessoa } = app;
const p1 = new Pessoa('Luiz');
console.log(p1);
console.log(app);
axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e));

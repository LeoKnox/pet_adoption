const express = require('express');
const app = express();
const bodyParser =require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/public/dist/public'));
require('./static/routes')(app);

app.listen (8000, () => console.log('-- list port 8000'));
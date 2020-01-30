const express = require('express');
const BodyParser = require('body-parser');
const cors = require('cors');

// Iniciando a aplicação 
const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: false}));
app.use(cors());

require('./src/app/controllers/index')(app); 

app.listen(process.env.PORT || 3000);






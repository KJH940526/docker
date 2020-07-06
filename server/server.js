const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const api = require('./router/index');
const cors = require('cors');


app.use(cors());
app.use(express.static(__dirname+'/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/api', api);

const port = 3002;

app.listen(port, ()=>console.log('http://localhost:'+port));

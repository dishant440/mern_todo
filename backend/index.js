const express =  require('express');
const bodyParser =  require('body-parser');
const {ConnectToDB} = require('./database/db');

const app = express();
app.use(bodyParser.json());

ConnectToDB();

app.post('/todo',function (req,res) {
    
});
app.get('/todos',function (req,res) {
    
});
app.put('/completed',function (req,res) {
    
});
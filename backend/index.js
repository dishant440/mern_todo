const express =  require('express');
const bodyParser =  require('body-parser');
const {ConnectToDB} = require('./database/db');
const todoRouter = require('./routes/todoRoutes');

const app = express();

app.use(bodyParser.json());
ConnectToDB();
app.use('/api',todoRouter)


app.listen(3000,()=>console.log('server running on 3000'))


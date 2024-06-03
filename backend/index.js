const express =  require('express');
const bodyParser =  require('body-parser');
const {ConnectToDB} = require('./database/db');
const todoRouter = require('./routes/todoRoutes');
const cors = require('cors');


const app = express();

app.use(bodyParser.json());
app.use(cors());

ConnectToDB();
app.use('/api',todoRouter);
app.use('/api',userRouter);


app.listen(3000,()=>console.log('server running on 3000'))


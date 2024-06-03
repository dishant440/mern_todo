const express =  require('express');
const bodyParser =  require('body-parser');
const {ConnectToDB} = require('./database/db');
const cors = require('cors');
const rootRouter = require('./routes/index')

const app = express();

app.use(bodyParser.json());
app.use(cors());

ConnectToDB();
app.use('/api',rootRouter);

app.listen(3000,()=>console.log('server running on 3000'))


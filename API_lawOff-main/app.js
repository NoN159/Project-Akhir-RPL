const express = require('express');
const association = require('./util/assoc');
const cors = require('cors');
const custErrLogger = require('./middleware/custErrLogger');
const route  = require('./routes/route');
const bodyparser = require('body-parser');

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(route);

app.use(custErrLogger);

association()
.then(()=>{
    app.listen(5000,()=>{
        console.log('server is running on port 5000');
    })
})
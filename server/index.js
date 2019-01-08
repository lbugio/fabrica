const express = require('express');
const morgan = require('morgan');
const app = express ();
const cors = require('cors');



const {mongoose} = require('./database');

//Setting

app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/avios',require('./routes/avios.routes'));
app.use('/api/telas',require('./routes/telas.routes'));


//starting the server
app.listen(app.get('port'), ()=> {
    console.log('Server on port', app.get('port'));
});
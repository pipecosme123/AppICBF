const express = require('express');
const morgan = require('morgan');

const app = express();

// app.set('port', )
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3032, () => {
   console.log('Server on port 3032');
});

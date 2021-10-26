const express = require('express');
const morgan = require('morgan');
const mysqlConnection = require('./database.js');
const app = express();


app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.get('/prueba', (req, res) => {
    mysqlConnection.query('SELECT * FROM Pacientes;', (err, row, fields) => {
        if (!err) {
            res.json(row);
            // console.log(res)
        } else {
            console.log(err);
        }
    })
});

module.exports = app;
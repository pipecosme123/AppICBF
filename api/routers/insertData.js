const express = require('express');
const morgan = require('morgan');
const mysqlConnection = require('./database.js');
const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/infoPaciente', (req, res) => {

    const {
        noDocumentoPaciente,
        nombrePaciente,
        apellidoPaciente,
        fechaNacimiento,
        lugarNacimiento,
        ubicacionLugarNacimiento,
        direccionResidencial,
        barrioResidencial,
        ciudadResidencial,
        ubicacionResidencial,
        escuela,
        ubicacionEscuela,
        eps,
        acudienteIdentificación,
        acudienteNombre,
        acudienteApellido,
        acudienteTeléfono,
        acudienteParentesco
    } = req.body;

    const query = "call insertData_Paciente(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"

    mysqlConnection.query(query, [
        noDocumentoPaciente,
        nombrePaciente,
        apellidoPaciente,

        fechaNacimiento,
        lugarNacimiento,
        ubicacionLugarNacimiento,

        direccionResidencial,
        barrioResidencial,
        ciudadResidencial,
        ubicacionResidencial,

        escuela,
        ubicacionEscuela,

        eps,

        acudienteIdentificación,
        acudienteNombre,
        acudienteApellido,
        acudienteTeléfono,
        acudienteParentesco
    ],
        (err, row, fields) => {
            if (!err) {
                let response = row[0];

                response.map((resp, index) => {
                    res.json(resp.Respuesta);
                })
                // res.send(response);
            } else {
                console.log(err);
            }
        })
});

app.post('/antecedentes', (req, res) => {

    const {
        documentoPaciente,
        ultimaConsulta,
        motivoConsulta,
        motivoConsulta_cual,
        fechaControlMedico,
        talla,
        peso,
        ComplicacionEmbarazo,
        ComplicacionEmbarazo_cual,
        tiempoEsperado,
        enfermedadAntiguna,
        enfermedadAntiguna_cual,
        hospitalizacion,
        hospitalizacion_cuantoTiempo,
        hospitalizacion_porque,
        medicamento,
        medicamento_cual,
        cirugia,
        cirugia_cual,
        cirugia_haceCuanto,
        cuidadoEspecial,
        cuidadoEspecial_cual,
        textPregunta72,
        ultimaConsultaOdontologo,
        ultimaConsultaOdontologo_CadaCuanto,
        motivoUltimaConsulta,
        motivoUltimaConsulta_haceCuanto,
        experiencias
    } = req.body;

    const query = "INSERT INTO Antecedentes VALUES(NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);"

    mysqlConnection.query(query, [
        documentoPaciente,
        ultimaConsulta,
        motivoConsulta,
        motivoConsulta_cual,
        fechaControlMedico,
        talla,
        peso,
        ComplicacionEmbarazo,
        ComplicacionEmbarazo_cual,
        tiempoEsperado,
        enfermedadAntiguna,
        enfermedadAntiguna_cual,
        hospitalizacion,
        hospitalizacion_cuantoTiempo,
        hospitalizacion_porque,
        medicamento,
        medicamento_cual,
        cirugia,
        cirugia_cual,
        cirugia_haceCuanto,
        cuidadoEspecial,
        cuidadoEspecial_cual,
        textPregunta72,
        ultimaConsultaOdontologo,
        ultimaConsultaOdontologo_CadaCuanto,
        motivoUltimaConsulta,
        motivoUltimaConsulta_haceCuanto,
        experiencias
    ], 
    (err, row, fields) => {
        if (!err) {
            res.json(row);
        } else {
            console.log(err);
        }
    }
    );
});

module.exports = app;
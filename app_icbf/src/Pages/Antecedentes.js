import React, { useState } from 'react';
import InputText from '../Components/InputText';
import '../css/Antecedentes.css';

const Antecedentes = () => {

   const [data, setData] = useState({
      // jardin: null,
      // ubicacionJardin: null,
      // fechaNacimiento: null,
      // edad: null
   })

   const fecha = new Date();

   const hnadleInputText = (e) => {
      const newData = { ...data };
      newData[e.target.name] = e.target.value.trim();
      setData(newData);
   }

   // function getEdad(event) {
   //    let hoy = new Date()
   //    let fechaNacimiento = new Date(event.target.value)
   //    let edadFunction = hoy.getFullYear() - fechaNacimiento.getFullYear()
   //    let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
   //    if (
   //       diferenciaMeses < 0 ||
   //       (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
   //    ) {
   //       edadFunction--
   //    }
   //    setData({ edad: edadFunction })
   //    console.log(data);
   // }

   const handleSubmit = (e) => {
      console.log(data);
      e.preventDefault();
   }

   return (
      <div className='Antecedentes content'>
         <h1 className="title">Antecedentes de salud general y bucal del niño(a)</h1>
         <h3 className="subtitle">(Formato para diligenciar antes de la valoración)</h3>

         <form onSubmit={handleSubmit}>
            <div className="formAntecedentes">
               <div className="informacionPersonal">
                  <div className="fecha">
                     <span>Fecha: </span>
                     <p>{fecha.getDate()}</p>
                     <p>{fecha.getMonth() + 1}</p>
                     <p>{fecha.getFullYear()}</p>
                  </div>

                  <div className="divInputText">
                     <InputText type="text" arrayInput={{ id: "jardin", title: "Jardín" }} handle={hnadleInputText} />
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "ubicacionJardin",
                              array: [
                                 { id: "ubicacionJardin_Rural", title: "Rural", valueBotton: "Rural" },
                                 { id: "ubicacionJardin_Urbano", title: "Urbano", valueBotton: "Urbano" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText} />
                  </div>

                  {/* <hr /> */}
                  <br />
                  <h3>Información Personal del niño(a)</h3>
                  <div className="divInputText">
                     <InputText type="number" arrayInput={{ id: "numDocumento", title: "N° Documento" }} handle={hnadleInputText} />
                  </div>
                  <div className="divInputText">
                     <InputText type="text" arrayInput={{ id: "nombre", title: "Nombre del niño(a)" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "apellido", title: "Apellidos" }} handle={hnadleInputText} />
                     {/* <p>Edad: {data.edad}</p> */}
                     {/* <InputText type="text" arrayInput={{ id: "edad", title: "Edad", value: data.edad }} /> */}
                     <InputText type="date" arrayInput={{ id: "fechaNacimiento", title: "Fecha de nacimiento" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "lugarNacimiento", title: "Lugar de nacimiento" }} handle={hnadleInputText} />

                  </div>
                  <div className="divInputText">
                     <InputText type="text" arrayInput={{ id: "direccionResidencial", title: "Dirección de residencia" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "barrioResidencial", title: "Barrio" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "ciudadResidencial", title: "Ciudad/Municipio" }} handle={hnadleInputText} />
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "ubicacionResidencial",
                              array: [
                                 { id: "ubicacionResidencial_Rural", title: "Rural", valueBotton: "Rural" },
                                 { id: "ubicacionResidencial_Urbano", title: "Urbano", valueBotton: "Urbano" }
                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />

                  </div>

                  <div className="divInputText">
                     <InputText
                        type="radio"
                        arrayRadioButton={
                           {
                              nameButton: "subsidio",
                              array: [
                                 { id: "Aseguramiento", title: "Aseguramiento subsidiado", valueBotton: "aseguramiento" },
                                 { id: "Contributivo", title: "Contributivo", valueBotton: "contributivo" },
                                 { id: "Otro", title: "Otro", valueBotton: "otro" }

                              ]
                           }}
                        check={data}
                        handle={hnadleInputText}
                     />
                     <InputText type="text" arrayInput={{ id: "eps", title: "E.P.S." }} handle={hnadleInputText} />
                  </div>
                  <br />
                  <h3>Persona responsable-Tutor del niño(a)</h3>
                  <div className="divInputText">
                     <InputText type="number" arrayInput={{ id: "pIdentificación", title: "Identificación" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "pResponsable", title: "Nombres y Apellidos" }} handle={hnadleInputText} />
                     <InputText type="number" arrayInput={{ id: "pTeléfono", title: "Teléfono(s)" }} handle={hnadleInputText} />
                     <InputText type="text" arrayInput={{ id: "pParentesco", title: "Parentesco con el niño(a)" }} handle={hnadleInputText} />
                  </div>
               </div>

               <h2 className="informacion"><b>Cordial saludo</b>, antes de realizar la valoración odontológica al niño(a), es importante conocer sus antecedentes médicos y odontológicos</h2>
               <h3 className="sub2">Maque con una X una de las opciones:</h3>

               <ol type="1">
                  <li>
                     <p>¿Cuándo fue la última vez que el niño(a) asistió a consulta con el Médico?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "ultimaConsulta",
                                 array: [
                                    { id: "1mes", title: "1 mes", valueBotton: "aseguramiento" },
                                    { id: "3a6meses", title: "3 a 6 meses", valueBotton: "contributivo" },
                                    { id: "6meses", title: "Más de 6 meses", valueBotton: "otro" },
                                    { id: "1año", title: "Más de 1 año", valueBotton: "otro" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                     </div>
                  </li>

                  <li>
                     <p>¿Cuál fue el motivo de la Consulta Médica del niño(a)?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "motivoConsulta",
                                 array: [
                                    { id: "control", title: "Control (Crecimiento y desarrollo)", valueBotton: "aseguramiento" },
                                    { id: "vacunacion", title: "Vacunación", valueBotton: "contributivo" },
                                    { id: "urgencias", title: "Urgencias", valueBotton: "otro" },
                                    { id: "otrosP2", title: "Otra", valueBotton: "otro" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                        <InputText type="text" arrayInput={{ id: "textPregunta2", title: "¿Cuál?" }} handle={hnadleInputText} />
                     </div>
                  </li>

                  <li>
                     <p>Fecha del último control médico:</p>
                     <div className="optionsQuestions">
                        <InputText type="date" arrayInput={{ id: "fechaControlMedico", title: "¿Cuál?" }} handle={hnadleInputText} />
                        <InputText type="text" arrayInput={{ id: "talla", title: "Talla" }} handle={hnadleInputText} />
                        <InputText type="text" arrayInput={{ id: "peso", title: "Peso" }} handle={hnadleInputText} />
                     </div>
                  </li>

                  <li>
                     <p>¿Durante el periodo de embarazo hubo alguna complicación?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "ComplicacionEmbarazo",
                                 array: [
                                    { id: "ComplicacionEmbarazo_Si", title: "Si", valueBotton: "Si" },
                                    { id: "ComplicacionEmbarazo_No", title: "No", valueBotton: "No" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                        <InputText type="text" arrayInput={{ id: "textPregunta4", title: "¿Cuál?" }} handle={hnadleInputText} />
                     </div>
                  </li>


                  <li>
                     <p>¿El parto fue en el tiempo esperado?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "tiempoEsperado",
                                 array: [
                                    { id: "tiempoEsperado_si", title: "Si", valueBotton: "Si" },
                                    { id: "tiempoEsperado_no", title: "No", valueBotton: "No" },
                                    { id: "tiempoEsperado_antes", title: "(Antes", valueBotton: "Antes" },
                                    { id: "tiempoEsperado_despues", title: "o Después de lo esperado)", valueBotton: "Después" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                     </div>
                  </li>


                  <li>
                     <p>¿Desde que el niño(a) nació hasta la fecha, ha sufrido de alguna enfermedad?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "enfermedadAntiguna",
                                 array: [
                                    { id: "enfermedadAntiguna_Si", title: "Si", valueBotton: "Si" },
                                    { id: "enfermedadAntiguna_No", title: "No", valueBotton: "No" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                        <InputText type="text" arrayInput={{ id: "textPregunta6", title: "¿Cuál?" }} handle={hnadleInputText} />
                     </div>
                  </li>


                  <li>
                     <p>¿El niño(a) ha estado hospitalizado?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "hospitalizacion",
                                 array: [
                                    { id: "hospitalizacion_Si", title: "Si", valueBotton: "Si" },
                                    { id: "hospitalizacion_No", title: "No", valueBotton: "No" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                        <InputText type="text" arrayInput={{ id: "textPregunta71", title: "¿Cuánto tiempo?" }} handle={hnadleInputText} />
                        <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Por qué?" }} handle={hnadleInputText} />
                     </div>

                  </li>


                  <li>
                     <p>¿El niño(a) está tomando algún medicamento de rutina?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "medicamento",
                                 array: [
                                    { id: "medicamento_Si", title: "Si", valueBotton: "Si" },
                                    { id: "medicamento_No", title: "No", valueBotton: "No" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                        <InputText type="text" arrayInput={{ id: "textPregunta81", title: "¿Cuál?" }} handle={hnadleInputText} />
                     </div>
                  </li>


                  <li>
                     <p>¿Le han practicado al niño(a) alguna cirugía?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "cirugia",
                                 array: [
                                    { id: "cirugia_Si", title: "Si", valueBotton: "Si" },
                                    { id: "cirugia_No", title: "No", valueBotton: "No" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                        <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Cuál?" }} handle={hnadleInputText} />
                        <InputText type="text" arrayInput={{ id: "textPregunta71", title: "¿Hace cuánto?" }} handle={hnadleInputText} />
                     </div>
                  </li>


                  <li>
                     <p>¿De acuerdo con recomendación del médico, el niño(a) requiere algún cuidado especial para la atención odontológica?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "cuidadoEspecial",
                                 array: [
                                    { id: "cuidadoEspecial_Si", title: "Si", valueBotton: "Si" },
                                    { id: "cuidadoEspecial_No", title: "No", valueBotton: "No" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                        <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Cuál?" }} handle={hnadleInputText} />
                     </div>
                  </li>


                  <li>
                     <div className="optionsQuestions">
                        <InputText type="text" arrayInput={{ id: "textPregunta72", title: "Fecha en la que se tomó talla y peso al niño(a)" }} handle={hnadleInputText} />
                        <InputText type="text" arrayInput={{ id: "talla", title: "Talla" }} handle={hnadleInputText} />
                        <InputText type="text" arrayInput={{ id: "peso", title: "Peso" }} handle={hnadleInputText} />
                     </div>
                  </li>


                  <li>
                     <p>¿Lo ha llevado al odontólogo en el último año?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "ultimaConsultaOdontologo",
                                 array: [
                                    { id: "ultimaConsultaOdontologo_Si", title: "Si", valueBotton: "Si" },
                                    { id: "ultimaConsultaOdontologo_No", title: "No", valueBotton: "No" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                     </div>
                     <div className="optionsQuestions">
                        <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Cada cuánto tiempo acostumbra llevarlo?" }} handle={hnadleInputText} />
                     </div>
                  </li>


                  <li>
                     <p>¿La última vez que llevo al niño(a) al odontólogo cuál fue el motivo?</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "motivoUltimaConsulta",
                                 array: [
                                    { id: "motivoUltimaConsulta_Valoracion", title: "Valoración", valueBotton: "Valoración" },
                                    { id: "motivoUltimaConsulta_AplicacionFluor", title: "Aplicación Flúor", valueBotton: "Aplicación Flúor" },
                                    { id: "motivoUltimaConsulta_Limpieza", title: "Limpieza", valueBotton: "Limpieza" },
                                    { id: "motivoUltimaConsulta_CalzarDientes", title: "Calzar Dientes", valueBotton: "Calzar Dientes" },
                                    { id: "motivoUltimaConsulta_RetirarNervio", title: "Retirar nervio del diente", valueBotton: "Retirar nervio del diente" },
                                    { id: "motivoUltimaConsulta_RetirarDiente", title: "Retirar un diente", valueBotton: "Retirar un diente" },
                                    { id: "motivoUltimaConsulta_Urgencia", title: "Urgencia (dolor, absceso...)", valueBotton: "Urgencia (dolor, absceso...)" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                     </div>
                     <div className="optionsQuestions">
                        <InputText type="text" arrayInput={{ id: "textPregunta72", title: "¿Hace cuánto?" }} handle={hnadleInputText} />
                     </div>

                  </li>

                  <li>
                     <p>La experiencia en las visitas previas del niño(a) al odontólogo han sido:</p>
                     <div className="optionsQuestions">
                        <InputText
                           type="radio"
                           arrayRadioButton={
                              {
                                 nameButton: "experiencias",
                                 array: [
                                    { id: "experiencias_MuyBuenas", title: "Muy buenas", valueBotton: "MuyBuenas" },
                                    { id: "experiencias_Buenas", title: "Buenas", valueBotton: "Buenas" },
                                    { id: "experiencias_PocoAgradables", title: "Poco agradables", valueBotton: "PocoAgradables" },
                                    { id: "experiencias_Malas", title: "Malas", valueBotton: "Malas" }
                                 ]
                              }}
                           check={data}
                           handle={hnadleInputText}
                        />
                     </div>
                  </li>
               </ol>
               <div className="buttonSubmit">
                  <input type="submit" value="Enviar" />
               </div>
            </div>
         </form>

      </div>
   );
};

export default Antecedentes;
/*
in input_no_documentos int,
in input_nombres varchar(45),
in input_apellidos varchar(45),
in input_fechasNacimiento date,
in input_lugaresNaamiento varchar(45),
in input_direccionesResidenciales varchar(45),
in input_telefonos varchar(45),
in input_jardin varchar(45),
in input_ubicacionJardin varchar(45),
in input_barrios varchar(45),
in input_ciudades varchar(45),
in input_ubicacionCiudades varchar(45),
in input_eps varchar(45),
in input_cedulaAcudientes int,
in input_nombresAcudientes varchar(45),
in input_apellidosAcudientes varchar(45),
in input_telefonosAcudientes varchar(45),
in input_parentescoAcudientes varchar(45),
*/
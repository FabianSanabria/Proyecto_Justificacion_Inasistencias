const express = require('express');
const fetch = (...args) =>
    import('node-fetch').then(({default: fetch}) => fetch(...args));
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: 'uploads/' });
var FormData = require('form-data');


router.post('/api/solicitud/create-solicitud', async (req, res) => {
    
    const {
        fechaInicio,
        fechaTermino,
        rutAlumno,
        motivo,
        nroFolio,
        cantRamos,
        nombreAlumno,
        correoAlumno,
        telefono,
        carrera,
        asignatura1Nombre,
        asignatura1Codigo,
        asignatura1NRC,
        asignatura1NombreDoc,
        asignatura1CorreoDoc,
        asignatura2Nombre,
        asignatura2Codigo,
        asignatura2NRC,
        asignatura2NombreDoc,
        asignatura2CorreoDoc,
        asignatura3Nombre,
        asignatura3Codigo,
        asignatura3NRC,
        asignatura3NombreDoc,
        asignatura3CorreoDoc,
        asignatura4Nombre,
        asignatura4Codigo,
        asignatura4NRC,
        asignatura4NombreDoc,
        asignatura4CorreoDoc,
        asignatura5Nombre,
        asignatura5Codigo,
        asignatura5NRC,
        asignatura5NombreDoc,
        asignatura5CorreoDoc,
        asignatura6Nombre,
        asignatura6Codigo,
        asignatura6NRC,
        asignatura6NombreDoc,
        asignatura6CorreoDoc,
        } = req.body;

    const body = JSON.stringify({
        rutAlumno,
        correoAlumno,
        telefono,
        fechaInicio,
        fechaTermino,
        motivo,
        nroFolio,
        cantRamos,
        carrera,
        nombreAlumno,
        asignatura1Nombre,
        asignatura1Codigo,
        asignatura1NRC,
        asignatura1NombreDoc,
        asignatura1CorreoDoc,
        asignatura2Nombre,
        asignatura2Codigo,
        asignatura2NRC,
        asignatura2NombreDoc,
        asignatura2CorreoDoc,
        asignatura3Nombre,
        asignatura3Codigo,
        asignatura3NRC,
        asignatura3NombreDoc,
        asignatura3CorreoDoc,
        asignatura4Nombre,
        asignatura4Codigo,
        asignatura4NRC,
        asignatura4NombreDoc,
        asignatura4CorreoDoc,
        asignatura5Nombre,
        asignatura5Codigo,
        asignatura5NRC,
        asignatura5NombreDoc,
        asignatura5CorreoDoc,
        asignatura6Nombre,
        asignatura6Codigo,
        asignatura6NRC,
        asignatura6NombreDoc,
        asignatura6CorreoDoc,
});
    try{
        console.log(body)
        
        const resgisterRes = await fetch(
           `${process.env.API_URL}/apiDjango/solicitudes/create-solicitud`,
           {
           method: 'POST',
           headers: 
           {
               Accept: 'application/json',
               'Content-Type': 'application/json',
           },
           body,
        });
        const data = await resgisterRes.json();
        
        return res.status(resgisterRes.status).json(data);
   }catch(err){
       return res.status(500).json({
           error: 'Ocurrió un error durante el registro de Solicitud'
       });

   }
    
});


router.post('/api/solicitud/create-ramos', async (req, res) => {
    
    const {
        cantRamos,
        asignatura1Nombre,
        asignatura1Codigo,
        asignatura1NRC,
        asignatura1NombreDoc,
        asignatura1CorreoDoc,
        asignatura2Nombre,
        asignatura2Codigo,
        asignatura2NRC,
        asignatura2NombreDoc,
        asignatura2CorreoDoc,
        asignatura3Nombre,
        asignatura3Codigo,
        asignatura3NRC,
        asignatura3NombreDoc,
        asignatura3CorreoDoc,
        asignatura4Nombre,
        asignatura4Codigo,
        asignatura4NRC,
        asignatura4NombreDoc,
        asignatura4CorreoDoc,
        asignatura5Nombre,
        asignatura5Codigo,
        asignatura5NRC,
        asignatura5NombreDoc,
        asignatura5CorreoDoc,
        asignatura6Nombre,
        asignatura6Codigo,
        asignatura6NRC,
        asignatura6NombreDoc,
        asignatura6CorreoDoc,
        } = req.body;

    const body = JSON.stringify({
        cantRamos,
        asignatura1Nombre,
        asignatura1Codigo,
        asignatura1NRC,
        asignatura1NombreDoc,
        asignatura1CorreoDoc,
        asignatura2Nombre,
        asignatura2Codigo,
        asignatura2NRC,
        asignatura2NombreDoc,
        asignatura2CorreoDoc,
        asignatura3Nombre,
        asignatura3Codigo,
        asignatura3NRC,
        asignatura3NombreDoc,
        asignatura3CorreoDoc,
        asignatura4Nombre,
        asignatura4Codigo,
        asignatura4NRC,
        asignatura4NombreDoc,
        asignatura4CorreoDoc,
        asignatura5Nombre,
        asignatura5Codigo,
        asignatura5NRC,
        asignatura5NombreDoc,
        asignatura5CorreoDoc,
        asignatura6Nombre,
        asignatura6Codigo,
        asignatura6NRC,
        asignatura6NombreDoc,
        asignatura6CorreoDoc,
});
    try{    
        
        const resgisterRes = await fetch(
           `${process.env.API_URL}/apiDjango/solicitudes/create-ramos`,
           {
           method: 'POST',
           headers: 
           {
               Accept: 'application/json',
               'Content-Type': 'application/json',
           },
           body,
        });
        const data = await resgisterRes.json();
        
        return res.status(resgisterRes.status).json(data);
   }catch(err){
       return res.status(500).json({
           error: 'Ocurrió un error durante el registro de Ramos'
       });

   }
    
});


router.post('/api/solicitud/subir-archivo',upload.single("file"), async (req, res) => {
    
    try{
        var data = new FormData();
        data.append('file',req.files[0].originalName);
        data.append('solicitud_id',req.body.solicitud_id);
        console.log(data);
        

        const subirArchivoRes = await fetch(
           `${process.env.API_URL}/apiDjango/solicitudes/subir-archivo`,
           {
           method: 'POST',
           headers: 
           {
               Accept: 'application/json',
           },
           body: data,
        });
        const dataRes = await subirArchivoRes.json();
        
        return res.status(subirArchivoRes.status).json(dataRes);
   }catch(err){
    console.log(err);
       return res.status(500).json({
           error: err
       });

   }
    
});



module.exports = router;
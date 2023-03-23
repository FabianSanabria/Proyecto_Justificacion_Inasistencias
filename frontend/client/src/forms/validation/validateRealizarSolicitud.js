import rutValidation from "./rutValidation"

export default function validateRealizarSolicitud(values){
    let errors = {}

    if(!values.nombreAlumno){
        errors.nombreAlumno = 'Ingrese su nombre'
    }
    if(!values.rutAlumno.trim()){
        errors.rutAlumno = 'Ingrese rut'
    }else if(!rutValidation(values.rutAlumno)){
        errors.rutAlumno = "Ingrese rut con formato válido"
    }
    if(!values.telefono){
        errors.telefono = 'Ingrese su número telefónico'
    }else if(!/(\+569)[0-9]{8}/.test(values.telefono)){
        errors.telefono = "Ingrese teléfono como el formato de ejemplo"
    }
    if(!values.correoAlumno){
        errors.correoAlumno = "Ingrese correo"
    }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura1CorreoDoc)) {
        errors.correoAlumno = 'Correo inválido, intentelo denuevo';
    }
    if(values.fechaInicio >= values.fechaTermino){
        errors.fecha = "Ingrese fechas en el orden correcto"
    } 
    if(values.motivo == "Médico"){
        if(!values.nroFolio){
            errors.nroFolio = "Ingrese número de folio"
        }else if (values.nroFolio.length > 10) {
            errors.nroFolio = 'Password tiene que tener menos de 10 caracteres';
        }
    }
    if(!values.carrera){
        errors.carrera = "Ingrese carrera"
    }
    if(values.cantRamos == 1){

        if(!values.asignatura1Nombre){
            errors.asignatura1Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura1Codigo){
            errors.asignatura1Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura1NRC){
            errors.asignatura1NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura1NombreDoc){
            errors.asignatura1NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura1CorreoDoc){
            errors.asignatura1CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura1CorreoDoc)) {
            errors.asignatura1CorreoDoc = 'Correo inválido, intentelo denuevo';
        }

    }
    if(values.cantRamos == 2){

        if(!values.asignatura1Nombre){
            errors.asignatura1Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura1Codigo){
            errors.asignatura1Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura1NRC){
            errors.asignatura1NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura1NombreDoc){
            errors.asignatura1NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura1CorreoDoc){
            errors.asignatura1CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura1CorreoDoc)) {
            errors.asignatura1CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura2Nombre){
            errors.asignatura2Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura2Codigo){
            errors.asignatura2Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura2NRC){
            errors.asignatura2NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura2NombreDoc){
            errors.asignatura2NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura2CorreoDoc){
            errors.asignatura2CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura2CorreoDoc)) {
            errors.asignatura2CorreoDoc = 'Correo inválido, intentelo denuevo';
        }

    }
    if(values.cantRamos == 3){

        if(!values.asignatura1Nombre){
            errors.asignatura1Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura1Codigo){
            errors.asignatura1Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura1NRC){
            errors.asignatura1NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura1NombreDoc){
            errors.asignatura1NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura1CorreoDoc){
            errors.asignatura1CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura1CorreoDoc)) {
            errors.asignatura1CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura2Nombre){
            errors.asignatura2Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura2Codigo){
            errors.asignatura2Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura2NRC){
            errors.asignatura2NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura2NombreDoc){
            errors.asignatura2NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura2CorreoDoc){
            errors.asignatura2CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura2CorreoDoc)) {
            errors.asignatura2CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura3Nombre){
            errors.asignatura3Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura3Codigo){
            errors.asignatura3Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura3NRC){
            errors.asignatura3NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura3NombreDoc){
            errors.asignatura3NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura3CorreoDoc){
            errors.asignatura3CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura3CorreoDoc)) {
            errors.asignatura3CorreoDoc = 'Correo inválido, intentelo denuevo';
        }

    }
    if(values.cantRamos == 4){

        if(!values.asignatura1Nombre){
            errors.asignatura1Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura1Codigo){
            errors.asignatura1Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura1NRC){
            errors.asignatura1NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura1NombreDoc){
            errors.asignatura1NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura1CorreoDoc){
            errors.asignatura1CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura1CorreoDoc)) {
            errors.asignatura1CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura2Nombre){
            errors.asignatura2Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura2Codigo){
            errors.asignatura2Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura2NRC){
            errors.asignatura2NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura2NombreDoc){
            errors.asignatura2NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura2CorreoDoc){
            errors.asignatura2CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura2CorreoDoc)) {
            errors.asignatura2CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura3Nombre){
            errors.asignatura3Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura3Codigo){
            errors.asignatura3Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura3NRC){
            errors.asignatura3NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura3NombreDoc){
            errors.asignatura3NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura3CorreoDoc){
            errors.asignatura3CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura3CorreoDoc)) {
            errors.asignatura3CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura4Nombre){
            errors.asignatura4Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura4Codigo){
            errors.asignatura4Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura4NRC){
            errors.asignatura4NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura4NombreDoc){
            errors.asignatura4NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura4CorreoDoc){
            errors.asignatura4CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura4CorreoDoc)) {
            errors.asignatura4CorreoDoc = 'Correo inválido, intentelo denuevo';
        }

    }
    if(values.cantRamos == 5){

        if(!values.asignatura1Nombre){
            errors.asignatura1Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura1Codigo){
            errors.asignatura1Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura1NRC){
            errors.asignatura1NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura1NombreDoc){
            errors.asignatura1NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura1CorreoDoc){
            errors.asignatura1CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura1CorreoDoc)) {
            errors.asignatura1CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura2Nombre){
            errors.asignatura2Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura2Codigo){
            errors.asignatura2Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura2NRC){
            errors.asignatura2NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura2NombreDoc){
            errors.asignatura2NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura2CorreoDoc){
            errors.asignatura2CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura2CorreoDoc)) {
            errors.asignatura2CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura3Nombre){
            errors.asignatura3Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura3Codigo){
            errors.asignatura3Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura3NRC){
            errors.asignatura3NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura3NombreDoc){
            errors.asignatura3NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura3CorreoDoc){
            errors.asignatura3CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura3CorreoDoc)) {
            errors.asignatura3CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura4Nombre){
            errors.asignatura4Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura4Codigo){
            errors.asignatura4Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura4NRC){
            errors.asignatura4NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura4NombreDoc){
            errors.asignatura4NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura4CorreoDoc){
            errors.asignatura4CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura4CorreoDoc)) {
            errors.asignatura4CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura5Nombre){
            errors.asignatura5Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura5Codigo){
            errors.asignatura5Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura5NRC){
            errors.asignatura5NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura5NombreDoc){
            errors.asignatura5NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura5CorreoDoc){
            errors.asignatura5CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura5CorreoDoc)) {
            errors.asignatura5CorreoDoc = 'Correo inválido, intentelo denuevo';
        }

    }
    if(values.cantRamos == 6){

        if(!values.asignatura1Nombre){
            errors.asignatura1Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura1Codigo){
            errors.asignatura1Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura1NRC){
            errors.asignatura1NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura1NombreDoc){
            errors.asignatura1NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura1CorreoDoc){
            errors.asignatura1CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura1CorreoDoc)) {
            errors.asignatura1CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura2Nombre){
            errors.asignatura2Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura2Codigo){
            errors.asignatura2Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura2NRC){
            errors.asignatura2NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura2NombreDoc){
            errors.asignatura2NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura2CorreoDoc){
            errors.asignatura2CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura2CorreoDoc)) {
            errors.asignatura2CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura3Nombre){
            errors.asignatura3Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura3Codigo){
            errors.asignatura3Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura3NRC){
            errors.asignatura3NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura3NombreDoc){
            errors.asignatura3NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura3CorreoDoc){
            errors.asignatura3CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura3CorreoDoc)) {
            errors.asignatura3CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura4Nombre){
            errors.asignatura4Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura4Codigo){
            errors.asignatura4Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura4NRC){
            errors.asignatura4NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura4NombreDoc){
            errors.asignatura4NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura4CorreoDoc){
            errors.asignatura4CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura4CorreoDoc)) {
            errors.asignatura4CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura5Nombre){
            errors.asignatura5Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura5Codigo){
            errors.asignatura5Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura5NRC){
            errors.asignatura5NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura5NombreDoc){
            errors.asignatura5NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura5CorreoDoc){
            errors.asignatura5CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura5CorreoDoc)) {
            errors.asignatura5CorreoDoc = 'Correo inválido, intentelo denuevo';
        }
        if(!values.asignatura6Nombre){
            errors.asignatura6Nombre = "Ingrese nombre de la asignatura"
        }
        if(!values.asignatura6Codigo){
            errors.asignatura6Codigo = "Ingrese código de la asignatura"
        }
        if(!values.asignatura6NRC){
            errors.asignatura6NRC = "Ingrese NRC de la asignatura"
        }
        if(!values.asignatura6NombreDoc){
            errors.asignatura6NombreDoc = "Ingrese nombre del docente"
        }
        if(!values.asignatura6CorreoDoc){
            errors.asignatura6CorreoDoc = "Ingrese correo del docente"
        }else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.asignatura6CorreoDoc)) {
            errors.asignatura6CorreoDoc = 'Correo inválido, intentelo denuevo';
        }

    }


    
    return errors;
}   
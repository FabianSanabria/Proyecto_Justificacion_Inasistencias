import rutValidation from "./rutValidation"

export default function validateRevisarSolicitud(values) {
    let errors = {}
    if(!values.rutAlumno.trim()){
        errors.rutAlumno = 'Ingrese rut'
    }else if(!rutValidation(values.rutAlumno)){
        errors.rutAlumno = "Ingrese rut válido"
    }

    return errors;

}
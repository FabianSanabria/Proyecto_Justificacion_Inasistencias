export default function validateLogin(values){
    let errors = {}

    if(!values.correo){
        errors.correo = "Ingrese correo"
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.correo)) {
        errors.correo = 'Correo inválido, intentelo denuevo';
    }

    if(!values.password){
        errors.password = 'Ingrese contraseña'
    }
    return errors;
}   
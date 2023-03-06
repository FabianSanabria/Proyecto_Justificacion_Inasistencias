export default function validateRegister(values){
    let errors = {}

    if(!values.nombreCompleto){
        errors.nombreCompleto = "Ingrese su nombre"
    }
    if(!values.correo){
        errors.correo = "Ingrese correo"
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(values.correo)) {
        errors.correo = 'Correo inválido, intentelo denuevo';
    }
    if(values.carreras == null ){
        errors.carreras = "Seleccione carrera/as"
    } else if(values.carreras.length == 0){
        errors.carreras = "Seleccione carrera/as"
    }
    if(!values.password){
        errors.password = 'Ingrese password'
    }else if (values.password.length < 6) {
        errors.password = 'Password tiene que tener 6 caracteres o más';
    }
    if (!values.password2) {
        errors.password2 = 'Ingrese password';
      } else if (values.password2 !== values.password) {
        errors.password2 = 'Passwords no coinciden';
      }
    return errors;
}   
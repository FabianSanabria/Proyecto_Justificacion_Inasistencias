import React from "react";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import validateRealizarSolicitud from "forms/validation/validateRealizarSolicitud";
import { enviarSolicitud } from "features/solicitud";
const useFormRealizarSolicitud = (callback) =>{


    const dateFormatter = Intl.DateTimeFormat('sv-SE');
    const [values,setValues] = useState({
        rutAlumno:'',
        nombreAlumno: '',
        correoAlumno: '',
        telefono: '',
        fechaInicio: '2021-12-31',
        fechaTermino: '2021-12-31',
        motivo: 'Fuerza Mayor',
        nroFolio: '',
        cantRamos: '1',
        asignatura1Nombre: '',
        asignatura1Codigo: '',        
        asignatura1NRC: '',
        asignatura1NombreDoc: '',
        asignatura1CorreoDoc: '',
        asignatura2Nombre: '',
        asignatura2Codigo: '',        
        asignatura2NRC: '',
        asignatura2NombreDoc: '',
        asignatura2CorreoDoc: '',
        asignatura3Nombre: '',
        asignatura3Codigo: '',        
        asignatura3NRC: '',
        asignatura3NombreDoc: '',
        asignatura3CorreoDoc: '',
        asignatura4Nombre: '',
        asignatura4Codigo: '',        
        asignatura4NRC: '',
        asignatura4NombreDoc: '',
        asignatura4CorreoDoc: '',
        asignatura5Nombre: '',
        asignatura5Codigo: '',        
        asignatura5NRC: '',
        asignatura5NombreDoc: '',
        asignatura5CorreoDoc: '',
        asignatura6Nombre: '',
        asignatura6Codigo: '',        
        asignatura6NRC: '',
        asignatura6NombreDoc: '',
        asignatura6CorreoDoc: '',
        carrera: '',
    });
    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const handleChange = e =>{
        if(e.target != undefined){
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            })
        }else{
            if(e.tipo == "Inicio"){
                setValues({
                    ...values,
                    fechaInicio: e.fecha,
                }) 
            }
            if(e.tipo == "Termino"){
                setValues({
                    ...values,
                    fechaTermino: e.fecha,
                }) 
            }
            if(e.tipo == "Carrera"){
                setValues({
                    ...values,
                    carrera: e.carrera,
                }) 
            }

        }

    }
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validateRealizarSolicitud(values))
        setIsSubmitting(true);

    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            dispatch(enviarSolicitud({values}));
            callback.submitForm();
        }
    },[errors])
    return {handleChange,values,handleSubmit,errors}

}

export default useFormRealizarSolicitud;
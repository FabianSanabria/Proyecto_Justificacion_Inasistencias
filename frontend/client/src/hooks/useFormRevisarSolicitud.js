import validateRevisarSolicitud from "forms/validation/validateRevisarSolicitud";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSolicitudes } from "features/solicitud";

const useFormRevisarSolicitud = (callback,validate) => {
    const [values,setValues] = useState({
        rutAlumno: '',
    })
    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    const handleChange = (e) =>{
        const {name,value} = e.target
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validateRevisarSolicitud(values))
        setIsSubmitting(true);

    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            dispatch(getSolicitudes(values.rutAlumno));
            callback.submitForm();
        }
    },[errors])
    return {handleChange,values,handleSubmit,errors}
}


export default useFormRevisarSolicitud;
import validateRegister from "forms/validation/validateRegister";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { register } from "features/user";

const useFormLogin = (callback,validate) =>{
    const dispatch = useDispatch();
    const [values,setValues] = useState({
        nombreCompleto: '',
        correo: '',
        password: '',
        password2: '',
        carreras: null,
    });
    const [errors,setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e =>{
        if(e.target == undefined){
            setValues({
                ...values,
                carreras: e,
            })
        }else{
            setValues({
                ...values,
                [e.target.name]: e.target.value,
            })
        }
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validateRegister(values));
        setIsSubmitting(true);
    }
    useEffect(() => {
       if( Object.keys(errors).length === 0 && isSubmitting ){
        dispatch(register(values));
        callback.submitForm();
       }
    },[errors])
    return{handleChange,values,errors,handleSubmit};
}
export default useFormLogin;
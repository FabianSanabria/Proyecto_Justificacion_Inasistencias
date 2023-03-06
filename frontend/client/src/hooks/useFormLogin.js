import validateLogin from "forms/validation/validateLogin";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { login } from "features/user";
const useFormLogin = (callback,validate) =>{
    const dispatch = useDispatch();
    const [values,setValues] = useState({
        correo: '',
        password: '',
    });
    const [errors,setErrors] = useState({})
    const badLogin = useSelector(state => state.user.error);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setErrors(validateLogin(values));
        setIsSubmitting(true);

    }
    useEffect(() => {
       if( Object.keys(errors).length === 0 && isSubmitting ){
        dispatch(login(values));
        callback.submitForm();
       }
    },[errors])
    return{handleChange,values,errors,handleSubmit,badLogin};
}

export default useFormLogin;
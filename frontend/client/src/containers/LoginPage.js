
import { useEffect, useState } from "react";
import Layout from "components/Layout";
import { useSelector,useDispatch } from "react-redux";
import { resetRegistered, login } from "features/user";
import { Navigate } from "react-router-dom";
import FormLogin from "forms/FormLogin";
const LoginPage = () => {

    const dispatch = useDispatch();
    const {isAuthenticated, registered, error} = useSelector(state => state.user);
    const [isSubmitted,setIsSubmitted] = useState(false);
    useEffect(() => {
        if(registered)
            dispatch(resetRegistered());
    },[registered,dispatch]);

    const submitForm = e => {
        setIsSubmitted(true);
    }   
    if(isAuthenticated)  return <Navigate to="/menu" />;

    return(
        <Layout title="Login" content="login page">       
        <section className=" mt-30 bg-gray-50 ">
             <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
                 <FormLogin submitForm={submitForm}/>
            </div>
        </section>
        </Layout>
    );
};

export default LoginPage;
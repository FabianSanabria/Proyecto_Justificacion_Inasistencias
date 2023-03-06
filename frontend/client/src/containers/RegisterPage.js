import Layout from "components/Layout";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import React from 'react';
import { register } from "features/user";
import FormRegister from "forms/FormRegister";

const RegisterPage = () => {

    const dispatch = useDispatch();
    const {registered, loading } = useSelector(state => state.user);
    const [isSubmitted,setIsSubmitted] = useState(false);
    const submitForm = e => {
        setIsSubmitted(true);
    }  

    if(registered)  return <Navigate to='/login' />;

    return(
        <Layout title="Register" content="register page">
            
            <div className=" overflow-x-auto mx-14  ">
      <div>
        
      </div>  
      <FormRegister submitForm={submitForm}/>
      <div className=" mt-40">

        </div>
    </div>

        </Layout>
    );
};

export default RegisterPage;
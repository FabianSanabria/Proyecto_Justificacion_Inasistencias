import Layout from "components/Layout";
import { useState } from "react";
import React from 'react';
import { enviarRamos, enviarSolicitud } from "features/solicitud";
import { Navigate } from "react-router-dom";
import FormRealizarSolicitud from "forms/FormRealizarSolicitud";
import { useSelector } from "react-redux";
const RealizarSolicitud = () => {

    const [isSubmitted,setIsSubmitted] = useState(false);
    const submitForm = e => {
        setIsSubmitted(true);
    }   
    const {ramosCreado, solicitudCreada} = useSelector(state => state.solicitudHandler);
    if(solicitudCreada && ramosCreado) return <Navigate to="/estudiantes/realizar-solicitud/subirDoc"/>;

    return(

        <Layout title="Sistema justificacion" content="dashboard page">
  <div className="pt-16">   
        <div className="pt-16">
        <div className=" pt-16">
            <h1 className="ml-20 text-xl">
             Ingrese la información que se pide a continuación  
            </h1>
            <h1 className="ml-20 mt-5">
                
            </h1>
            <div className="flex flex-col items-center px-6 mx-auto lg:py-6 bg-ucn-blue2 ml-20 mr-20  ">
            <FormRealizarSolicitud submitForm={submitForm}/>
            </div>
        </div>
        </div>
        </div>
        
        </Layout>
    );
};

export default RealizarSolicitud;
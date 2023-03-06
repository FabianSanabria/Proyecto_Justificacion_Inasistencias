import Layout from "components/Layout";
import Select from 'react-select';
import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import FormRevisarSolicitud from "forms/FormRevisarSolicitud";
const RevisarSolicitud = () => {

    const [rutAlumno, setRutAlumno] = useState(""); 
    const solicitudes = useSelector(state => state.solicitudHandler.solicitudes);
    const loading = useSelector(state => state.solicitudHandler.loading);
    const [isSubmitted, setIsSubmitted] = useState(false); 

    if(solicitudes != null && !loading && isSubmitted){
        return <Navigate to="/estudiantes/revisar-solicitud/Dashboard"/>;
    } 
    function submitForm(){
        setIsSubmitted(true);
    } 

    return(
        <Layout title="Sistema justificacion" content="dashboard page">
            
            <section className=" mt-30 bg-gray-50 ">
            <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
                <FormRevisarSolicitud submitForm={submitForm}/>
                
                
            </div>
            </section>

        </Layout>
    );
};

export default RevisarSolicitud;
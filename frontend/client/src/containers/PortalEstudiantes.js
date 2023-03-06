import Layout from "components/Layout";
import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { realizarSolicitud,revisarSolicitud } from "features/solicitud";
const PortalEstudiantes = () => {
    const mensaje = useSelector(state => state.solicitudHandler.mensaje);
    const exito= useSelector(state => state.solicitudHandler.exitoCreacionSolicitud);
    const error= useSelector(state => state.solicitudHandler.errorCreacionSolicitud);
    const realizar =useSelector(state => state.solicitudHandler.realizarSolicitud);
    const revisar =useSelector(state => state.solicitudHandler.revisarSolicitud);
    const dispatch = useDispatch()
    if(realizar) return <Navigate to="realizar-solicitud"/>
    if(revisar) return <Navigate to="revisar-solicitud"/>

    const onclickHandler1 = () =>{
        dispatch(realizarSolicitud())
    }
    const onclickHandler2 = () =>{
        dispatch(revisarSolicitud())
    }
    return(
        <Layout title="Sistema justificacion" content="dashboard page">
  <div className="pt-16">   
        <div className="pt-16">
        <div className="pt-16">
        {error ? (<div role="alert" className="ml-5 p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-100 ">
                 {mensaje}
            </div>):(<></>)}
        {exito ? (<div role="alert" className="ml-5 p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 ">
                {mensaje}
        </div>):(<></>)}
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <div className="ml-5 pt-16 columns-2">
                  
            <button onClick={()=>onclickHandler1()} className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            REALIZAR SOLICITUD
            </button>
            <button onClick={()=>onclickHandler2()} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            REVISAR SOLICITUDES
            </button>
         
            </div>
        </div>
        </div>
        </div>
        </Layout>
    );
};

export default PortalEstudiantes;
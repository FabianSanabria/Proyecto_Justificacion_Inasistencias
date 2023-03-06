import Layout from "components/Layout";
import { useGetCarrerasQuery } from "features/carrerasData";
import Select from 'react-select';
import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Navigate,Link } from "react-router-dom";
import { descargarArchivo,volverSolicitudEstudiante } from "features/solicitud";
const Detalle = () => {

 
    const [value, setValue] = React.useState({carrera: ''});
    const solicitud = useSelector(state => state.solicitudHandler.solicitud);
    const volver = useSelector(state => state.solicitudHandler.volverDetalle)
    const dispatch = useDispatch();
    const descargaHandler = e => {
        dispatch(descargarArchivo(solicitud.id));
    }
    const volverHandler = e => {
        dispatch(volverSolicitudEstudiante());
    }
    if(solicitud == null && volver) return <Navigate to="/estudiantes/revisar-solicitud/Dashboard"/>

    if(solicitud == null) return <Navigate to="/estudiantes/revisar-solicitud"/>
    return(
        <Layout title="Sistema justificacion" content="dashboard page">
  <div className="pt-16">   
        <div className="pt-16">
        <div className="pt-16">

    
            <div className="flex flex-col  px-6 mx-auto lg:py-6 bg-ucn-blue2 ml-20 mr-20 ">
            <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                ID solicitud: {solicitud.id}
            </div>
            <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg ">
                Rut alumno: {solicitud.rutAlumno}
            </div>
            <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg ">
                Nombre: {solicitud.nombreAlumno}
            </div>
            <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg ">
                Correo: {solicitud.correoAlumno}
            </div>
            <div className=" columns-2 mt-3">
                <div className=" font-bold  text-left bg-gray-500 p-1 rounded-lg ">
                    Fecha de Inicio Justificación: {solicitud.fechaInicio}
                </div>
                <div className=" font-bold text-left mb-3 bg-gray-500 p-1 rounded-lg">
                Fecha de Termino Justificación: {solicitud.fechaTermino}

                 </div>
            </div>
            <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg ">
                Motivo justificacion: {solicitud.motivo}
            </div>
            <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg ">
                Estado: {solicitud.estado}
            </div>
            <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg ">
                Archivo Enviado: {solicitud.archivo}
            </div>
            <div className=" columns-2 ">
                <button  onClick={descargaHandler} className=" mb-4  text-sm bg-sky-500 hover:bg-sky-900 focus:ring-4 p-3 rounded-lg font-bold mt-3 text-left  ">
                    Descargar archivo
                </button>
               
            </div>

             <button onClick={() => volverHandler()} className="mb-4  text-sm ml-15 bg-green-500 hover:bg-green-700 focus:ring-4 p-3 rounded-lg  font-bold mt-5 text-center py-3">Volver</button>
            </div>
        </div>
        
        </div>
        </div>
        </Layout>
    );
};

export default Detalle;
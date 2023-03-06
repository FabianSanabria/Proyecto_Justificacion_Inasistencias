import Layout from "components/Layout";
import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { volverSolicitudesCompletadasDetalleRamo } from "features/solicitud";

const DetalleSolicitudPendienteRamos = () => {

    const solicitud = useSelector(state => state.solicitudHandler.solicitud);
    const ramos = useSelector(state => state.solicitudHandler.ramos);
    const volver = useSelector(state => state.solicitudHandler.volverRamos)
    const dispatch = useDispatch();
    const volverHandler = () => {
        dispatch(volverSolicitudesCompletadasDetalleRamo());
    };
    if( volver == true && ramos == null) return <Navigate to="/menu/solicitudes-completadas/detalle/"/>
    if(solicitud == null && ramos == null ) return <Navigate to="/menu/"/>
    return(
        <Layout title="Sistema justificacion" content="dashboard page">
  <div className="pt-16">   
        <div className="pt-16">
        <div className="pt-16">

            <div className="flex flex-col  px-6 mx-auto lg:py-6 bg-ucn-blue2 ml-20 mr-20 ">
            <div>
                <label className="font-bold">
                    Asignatura 1
                </label>
                <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre: {ramos.asignatura1Nombre}
                </div>
                <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg ">
                    NRC: {ramos.asignatura1NRC}
                </div>
                
                <div className=" font-bold mt-3  text-left bg-gray-500 p-1 rounded-lg ">
                    Nombre Docente: {ramos.asignatura1NombreDoc}
                </div>
                <div className=" font-bold mt-3 text-left mb-3 bg-gray-500 p-1 rounded-lg">
                Correo Docente: {ramos.asignatura1CorreoDoc}
            
               </div>
               <label className="font-bold">
                    Asignatura 2 <br></br>
                </label>
                {ramos.asignatura2Nombre && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre: {ramos.asignatura2Nombre}
                </div>}
                
                {ramos.asignatura2NRC && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    NRC: {ramos.asignatura2NRC}
                </div>}
                
                {ramos.asignatura2Nombre && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre Docente: {ramos.asignatura2NombreDoc}
                </div>}
                {ramos.asignatura2CorreoDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Correo Docente: {ramos.asignatura2CorreoDoc}
                </div>}
               <label className="font-bold">
                    Asignatura 3 <br></br>
                </label>
                {ramos.asignatura3Nombre && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre: {ramos.asignatura3Nombre}
                </div>}
                {ramos.asignatura3NRC && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    NRC: {ramos.asignatura3NRC}
                </div>}
                
                {ramos.asignatura3NombreDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre Docente: {ramos.asignatura3NombreDoc}
                </div>}
                {ramos.asignatura3CorreoDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Correo Docente: {ramos.asignatura3CorreoDoc}
                </div>}
               <label className="font-bold">
                    Asignatura 4 <br></br>
                </label>
                {ramos.asignatura4Nombre && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre: {ramos.asignatura4Nombre}
                </div>}
                {ramos.asignatura4NRC && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    NRC: {ramos.asignatura4NRC}
                </div>}
                
                {ramos.asignatura4NombreDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre Docente: {ramos.asignatura4NombreDoc}
                </div>}
                {ramos.asignatura4CorreoDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Correo Docente: {ramos.asignatura4CorreoDoc}
                </div>}
               <label className="font-bold">
                    Asignatura 5<br></br>
                </label>
                {ramos.asignatura5Nombre && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre: {ramos.asignatura3Nombre}
                </div>}
                {ramos.asignatura5NRC && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    NRC: {ramos.asignatura5NRC}
                </div>}
                
                {ramos.asignatura5NombreDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre Docente: {ramos.asignatura5NombreDoc}
                </div>}
                {ramos.asignatura5CorreoDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Correo Docente: {ramos.asignatura5CorreoDoc}
                </div>}
               <label className="font-bold">
                    Asignatura 6 <br></br>
                </label>
                {ramos.asignatura6Nombre && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre: {ramos.asignatura6Nombre}
                </div>}
                {ramos.asignatura6NRC && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    NRC: {ramos.asignatura6NRC}
                </div>}
                
                {ramos.asignatura6NombreDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Nombre Docente: {ramos.asignatura6NombreDoc}
                </div>}
                {ramos.asignatura6CorreoDoc && <div className=" font-bold mt-3 text-left bg-gray-500 p-2 rounded-lg">
                    Correo Docente: {ramos.asignatura6CorreoDoc}
                </div>}
            </div>
            <div className=" columns-2 ">
               
            </div>
            <div className="columns-2 mb-6 mt-5">
             <button onClick={() => volverHandler()} className="  text-sm ml-15 bg-green-500 hover:bg-green-700 focus:ring-4 p-3 rounded-lg  font-bold mt-5 text-center py-3">Volver</button>
             </div>
            </div>
        </div>
        
        </div>
        </div>
        </Layout>
    );
};

export default DetalleSolicitudPendienteRamos;
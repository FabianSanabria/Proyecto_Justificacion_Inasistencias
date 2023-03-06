import Layout from "components/Layout";
import { useGetCarrerasQuery } from "features/carrerasData";
import Select from 'react-select';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import  { detallesSolicitudCompletadaEncargado,volverSolicitudesCompletadas } from "features/solicitud";
import { Navigate,Link } from "react-router-dom";
import { useState } from "react";

const SolicitudesCompletadas = () => {


    const solicitudes = useSelector(state => state.solicitudHandler.solicitudes);
    const solicitudesCompletadas = useSelector(state => state.solicitudHandler.solicitudesCompletadas);
    const detallesCompletada = useSelector(state => state.solicitudHandler.detallesCompletada);
    const loading = useSelector(state => state.solicitudHandler.loading);
    const volver = useSelector(state => state.solicitudHandler.volverSolicitudesCompletadas)
    const dispatch = useDispatch();
    const [itemOffset, setItemOffset] = useState(0);
    if(detallesCompletada && !loading) {
      return <Navigate to="/menu/solicitudes-completadas/detalle"/>;
    }
    if(solicitudes == null && volver) return <Navigate to="/menu"/>;  
    if(solicitudes == null ) return <Navigate to="/menu"/>;      
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(solicitudes.length / itemsPerPage);
    const currentItems = solicitudes.slice(itemOffset, endOffset); 
    const onClickHandler = solicitud =>{
        dispatch(detallesSolicitudCompletadaEncargado(solicitud.id));
    };
    const volverHandler = () => {
      dispatch(volverSolicitudesCompletadas());
    };
      // Invoke when user click to request another page.
    const handleNextPageClick = (event) => {
        if(itemOffset + 10 > solicitudes.length){
            return;
        }
        const newOffset = (itemOffset) + 10;
        setItemOffset(newOffset);   
    };
    const handlePrevPageClick = (event) => {
        if(itemOffset - 10 < 0){
            return;
        }
        const newOffset = (itemOffset) - 10;
        
        setItemOffset(newOffset);
    };
    return(
        <Layout title="Sistema justificacion" content="dashboard page">
 
 <section className=" mt-30  ">

  <div className=" flex flex-col justify-center ml-10 px-6 mx-auto md:h-screen lg:py-0">
      {currentItems.length >=  3 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
      {currentItems.length >=  4 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
        {currentItems.length >=  6 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
      {currentItems.length >=  7 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
      {currentItems.length >=  8 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )} 
      {currentItems.length >=  9 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}  
      <button onClick={() =>volverHandler()} className="  text-center text-sm bg-gray-500 hover:bg-gray-700 focus:ring-4 p-3 rounded-lg  font-bold mt-5  py-3">Volver</button>
      <div className=" w-full bg-white rounded-lg  mt-15 py-3">
      <table className="table ">
        <thead className='text-3xl '>
          <tr className=" h-[5rem] z-1 text-white mr-3">
            <th className='text-xl p-3 text-white bg-ucn-blue2'>ID.</th>
            {/* <th>Código Serial.</th> */}
            <th className='text-xl p-3 text-white bg-ucn-blue2'>Rut Alumno</th>
            <th className='text-xl p-3 text-white bg-ucn-blue2'>Fecha de Inicio</th>
            <th className="text-center p-3 text-xl text-white bg-ucn-blue2">Fecha de Termino</th>
            <th className="text-center p-3 text-xl text-white bg-ucn-blue2">Motivo</th>
            <th  className="text-center p-3 text-xl text-white bg-ucn-blue2">
              Detalles
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
            
       
           
            
     </tr>
     {
        currentItems.map((solicitud) => (
            <tr key={solicitud.id}>
                <td className="p-2"> {solicitud.id} </td>
                <td className="px-3"> {solicitud.rutAlumno} </td>
                <td className="px-9"> {solicitud.fechaInicio} </td>
                <td className="px-9"> {solicitud.fechaTermino} </td>
                <td className="px-9"> {solicitud.motivo} </td>
                <td className="px-9">  
                <button
                    onClick={() => onClickHandler(solicitud)}
                    className="btn btn-outline btn-error bg-gray-500 hover:bg-gray-700 focus:ring-4 p-1 rounded-lg"
                  >
                    Ver
                  </button></td>
            </tr>
        ))
     }
        </tbody>
      </table>
      <div className="flex flex-col items-center mt-5 ml-20 mr-10">
  <span className="text-sm text-gray-700  mr-20">
      Filas <span className="font-semibold text-gray-900 ">{itemOffset+1}</span> to <span className="font-semibold text-gray-900 ">{endOffset}</span> of <span className="font-semibold text-gray-900 ">{solicitudes.length}</span> Total
  </span>
  <div className="inline-flex mt-2 xs:mt-0 mb-3 mr-20">
    
    <button onClick={() => handlePrevPageClick()} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 ">
        <svg aria-hidden="true" className="w-5 h-5 mr-2" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd"></path></svg>
        Prev
    </button>
    <button onClick={() => handleNextPageClick()} className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 ">
        Next
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
    </button>
  </div>
</div>
      </div>
  </div>
</section>
        </Layout>
    );
};

export default SolicitudesCompletadas;
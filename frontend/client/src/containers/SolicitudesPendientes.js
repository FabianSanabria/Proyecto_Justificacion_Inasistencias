import Layout from "components/Layout";
import { useGetCarrerasQuery } from "features/carrerasData";
import Select from 'react-select';
import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import  { detallesSolicitudEncargado,volverSolicitudesPendientes } from "features/solicitud";
import { Navigate } from "react-router-dom";
import { useState } from "react";
const SolicitudesPendientes = () => {

    var solicitudes = useSelector(state => state.solicitudHandler.solicitudes);
    const solicitudesPendientes = useSelector(state => state.solicitudHandler.solicitudesPendientes);
    const detallesPendiente = useSelector(state => state.solicitudHandler.detallesPendiente);
    const loading = useSelector(state => state.solicitudHandler.loading);
    const volver = useSelector(state => state.solicitudHandler.volverSolicitudesPendientes)
    const [itemOffset, setItemOffset] = useState(0);
   
    const optionsCarreras = useSelector(state => state.user.user.carreras);
    const [filtro, setFiltro] = useState(0);
    const dispatch = useDispatch();
    var indexFiltro = 0;
    if(optionsCarreras.length>1){
      for(var i = 0; i<=optionsCarreras.length;i++){
        if(optionsCarreras[i] == filtro){
            indexFiltro = i+1;
        }
      }
    }
    if(indexFiltro != 0){
      if(solicitudes!=null){
        solicitudes = solicitudes.filter(solicitud => solicitud.carrera == indexFiltro);
      }
    }
    if(detallesPendiente && !loading) return <Navigate to="/menu/solicitudes-pendientes/detalle"/>;
    if(solicitudes == null && volver) return <Navigate to="/menu"/>;
    if(solicitudes == null ) return <Navigate to="/menu"/>;
    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const pageCount = Math.ceil(solicitudes.length / itemsPerPage);
    const currentItems = solicitudes.slice(itemOffset, endOffset);   
    const onClickHandler = solicitud => {
        dispatch(detallesSolicitudEncargado(solicitud.id));
    };
    const volverHandler = () => {
      dispatch(volverSolicitudesPendientes());
    };
    const quitarFiltroHandler = () => {
      setFiltro(0);
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
   // if(solicitudes == [] && !loading) return <Navigate to="/estudiantes/revisar-solicitud/"/>;
    return(
        <Layout title="Sistema justificacion" content="dashboard page">
 <section className="">
 <div className=" flex flex-col justify-center ml-10 px-6 mx-auto md:h-screen lg:py-0">
      {currentItems.length >=  2 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
      {currentItems.length >=  3 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
      {currentItems.length >=  4 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
        {currentItems.length >=  5 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}
      {currentItems.length >=  6 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )} 
      {currentItems.length >=  8 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )} 
      {currentItems.length >=  9 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )} 
      {currentItems.length >=  10 ? (
      <label className="mt-10 text-white"> - </label>):(<></> )}  
      <Select
        name="carrera"
        options={optionsCarreras}
        value={filtro}
        onChange={setFiltro}
        getOptionLabel={(optionsCarreras) => optionsCarreras.nombreCarrera}
        getOptionValue={(optionsCarreras) => optionsCarreras.nombreCarrera} // It should be unique value in the options. E.g. ID
      />
      <div className="columns-2">
      <button onClick={() => volverHandler()} className="  text-center text-sm bg-gray-500 hover:bg-gray-700 focus:ring-4 p-3 rounded-lg  font-bold mt-5  py-3">Volver</button>
      <button onClick={() => quitarFiltroHandler()} className="  text-center ml-5 text-sm bg-gray-500 hover:bg-gray-700 focus:ring-4 p-3 rounded-lg  font-bold mt-5  py-3">Quitar Filtro</button>
    </div>
      <div className=" w-full bg-white rounded-lg  mt-15 py-3">
       { solicitudes.length != 0 ?( 
      <table className="table">
        <thead className='text-3xl '>
          <tr className=" h-[5rem] z-1 text-white mr-3">
            <th className='text-xl p-3 text-white bg-ucn-blue2'>Fecha de Creación.</th>
            {/* <th>Código Serial.</th> */}
            <th className='text-xl p-3 text-white bg-ucn-blue2'>ID</th>
            <th className='text-xl p-3 text-white bg-ucn-blue2'>Rut Alumno</th>
            <th className='text-xl p-3 text-white bg-ucn-blue2'>Nombre Alumno</th>
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
                <td className="p-2 text-center"> {solicitud.created_at.slice(0,10)} </td>
                <td className="px-9 text-center"> {solicitud.id} </td>
                <td className="px-3 text-center"> {solicitud.rutAlumno} </td>
                <td className="px-9 text-center"> {solicitud.nombreAlumno} </td>
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
       ):(<div>

        <label className="font-bold"> No hay solicitudes pendientes</label>
    </div>)}
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

export default SolicitudesPendientes;
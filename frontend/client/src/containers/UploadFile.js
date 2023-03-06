import Layout from "components/Layout";
import { subirArchivo,errorSubirArchivo } from "features/solicitud";
import { useState } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const UploadFile = () => {

    const solicitudID = useSelector(state => state.solicitudHandler.solicitud_id);
    var errorArchivo = useSelector(state => state.solicitudHandler.errorArchivo);
    const loading = useSelector(state => state.solicitudHandler.loading);

    const [formData, setFormData] = useState({
        file: null,
        solicitud_id: solicitudID,
    })
    const dispatch = useDispatch();
    const handleFileChange = (e) => {
      if (e.target.files) {
            setFormData({...formData,file: e.target.files[0]});  
         }
    };

    const handleUploadClick = (e) => {
    e.preventDefault();
    if (formData.file == null) {
        errorArchivo = true;
        dispatch(errorSubirArchivo());
        return;
    }else{
        const a = dispatch(subirArchivo({formData}));

    }
    };
    if(solicitudID == null && !loading) return <Navigate to="/estudiantes/"/>;

    return(
        <Layout title="Sistema justificacion" content="dashboard page">
  <div className="pt-16">   
        <div className="pt-16">
        <div className=" pt-16">
       <h1 className="ml-20 text-xl">
             Subida de Visado de Certificados Médicos  
            </h1>
            <h1 className="ml-20 mt-5">
                
            </h1>
            <div className="flex flex-col items-center px-6 mx-auto lg:py-6 bg-ucn-blue2 ml-20 mr-20  ">
            <form onSubmit={handleUploadClick} className="top-0" encType="multipart/form-data">
            <label className="text-sm font-bold">
            Subir archivo visado por DGE o imagen con autorización de justificación por parte del jefe de carrera, por evento de fuerza mayor (solo se admite formato PDF)      </label>
            
        <div className='flex items-baseline space-x-5 text-sm mt-4' > 
        <input
          id="file"
          type="file"
          name="file"
          accept=".pdf" ////consultar que archivos se pueden subir
          className='file-input file-input-bordered w-full max-w-xs '
          onChange={handleFileChange}
        />
        </div> 
        {errorArchivo ? (<label className="mt-5 text-sm font-bold text-red-500">
Error al subir archivo, intentelo denuevo  <br></br>   </label>):(<></>)}
        <button type="submit" className=" mt-4 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subir Archivo</button>

        
            </form>
            </div>
        </div>
        </div>
        </div>
        
        </Layout>
    );
};

export default UploadFile;
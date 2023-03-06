import React from 'react';

const FormUploadFile = (submitForm) => {

    const {handleChange,values,handleSubmit,errors} = useFormLogin(submitForm,validateLogin);

    return(

        <form onSubmit={handleUploadClick} className="top-0" encType="multipart/form-data">
            <label className="text-sm font-bold">
            Subir archivo visado por DGE o imagen con autorización de justificación por parte del jefe de carrera, por evento de fuerza mayor      </label>
            
        <div className='flex items-baseline space-x-5 text-sm mt-4' > 
        <input
          id="file"
          type="file"
          name="file"
          accept=".pdf" 
          className='file-input file-input-bordered w-full max-w-xs '
          onChange={handleFileChange}
        />
        </div> 
        {errorArchivo ? (<label className="mt-5 text-sm font-bold text-red-500">
Error al subir archivo, intentelo denuevo  <br></br>   </label>):(<></>)}
        <button type="submit" className=" mt-4 mb-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subir Archivo</button>

        
            </form>

    )

};

export default FormUploadFile;
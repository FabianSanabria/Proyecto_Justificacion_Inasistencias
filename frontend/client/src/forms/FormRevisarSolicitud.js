import React from 'react';
import useFormRevisarSolicitud from 'hooks/useFormRevisarSolicitud';
import validateRevisarSolicitud from './validation/validateRevisarSolicitud';
const FormRevisarSolicitud = (submitForm) =>{

    const {handleChange,values,handleSubmit,errors} = useFormRevisarSolicitud(submitForm,validateRevisarSolicitud); 
    return(

         <div className="  w-full bg-white rounded-lg shadow mt-20  sm:max-w-md xl:p-0">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                        Ingrese su Rut
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}action="#">
                        <div>
                            <label
                            htmlFor="rutAlumno"
                            className="block mb-2 text-sm font-medium text-gray-900"
                            >Rut</label>
                            <input 
                            type="text" 
                            name="rutAlumno" 
                            id="rutAlumno" 
                            onChange={(e) => handleChange(e)}
                            value={values.rutAlumno}
                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                            placeholder="11111111-k" 
                            required=""/>
                            {errors.rutAlumno && <label className='text-red-600 font-bold'>{errors.rutAlumno}</label>}
                        </div>
                        <button type="submit" className="w-full text-white bg-ucn-blue hover:bg-ucn-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Ingresar</button>

                    </form>
                </div>
            </div>

    )
}
export default FormRevisarSolicitud;
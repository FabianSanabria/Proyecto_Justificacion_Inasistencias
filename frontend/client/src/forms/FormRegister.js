import React from 'react';
import { useGetCarrerasQuery } from "features/carrerasData";
import Select from 'react-select';
import validateRegister from './validation/validateRegister';
import useFormRegister from 'hooks/useFormRegister';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

const FormRegister = (submitForm) =>{
    const {loading,error} = useSelector(state => state.user);
    const {handleChange,values,handleSubmit,errors} = useFormRegister(submitForm,validateRegister);
    const {data} = useGetCarrerasQuery();
    const optionsCarreras = data;
    const [carreras,setCarreras] = useState(null);
    const [submitted,setSubmitted] = useState(false);
    const submit = e =>{
        e.preventDefault()
    }
    const handleSelect = (e) =>{
        setCarreras(e)
        handleChange(e)
    }
    return(
<form className="mt-60 w-5/6 m-8" onSubmit={handleSubmit}>
        <h1 className="bg-ucn-blue2 rounded-lg h-[3rem] text-white z-1 text-center font-bold text-3xl indent-12 align-baseline">Ingrese datos</h1>
        <div className="py-12">
    <div className="relative z-0 w-full mb-6 group">
        <input 
        type="text"
        name="nombreCompleto" 
        onChange= {handleChange}
        value={values.nombreCompleto}
        id="nombreCompleto" 
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
         />
        <label htmlFor="nombreCompleto" className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre</label>
        {errors.nombreCompleto && <label className='text-red-600 font-bold'>{errors.nombreCompleto}</label>}
    </div>
    <div className="relative z-0 w-full mb-6 group">
      <input
        type="text" 
        name="correo" 
        id="correo"
        onChange={handleChange}
        value = {values.correo} 
        className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
        placeholder=" " 
         />
       <label 
        htmlFor="correo" 
        className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Correo</label>
        {errors.correo && <label className='text-red-600 font-bold'>{errors.correo}</label>}
  </div>

  <div className="relative z-0 w-full mb-6 group">
      <input 
       type="password"
       name="password" 
       id="password" 
       onChange={handleChange}
       value={values.password}
       className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
       placeholder=" " 
        />
      <label 
      htmlFor="password" 
      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Password</label>
        {errors.password && <label className='text-red-600 font-bold'>{errors.password}</label>}
  </div>
  <div className="relative z-0 w-full mb-6 group">
      <input 
       type="password"
       name="password2" 
       id="password2" 
       onChange={handleChange}
       value={values.password2}
       className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
       placeholder=" " 
        />
      <label 
      htmlFor="password" 
      className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >Confirme su password</label>
        {errors.password2 && <label className='text-red-600 font-bold'>{errors.password2}</label>}
  </div>
  <div >
     <label htmlFor="carrera"
     className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 text-gray-500  appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
     >Ingrese Carrera</label>
     <Select 
        name="carrera"
        id="carrera"
        options={optionsCarreras}
        isSearchable={false}
        className="basic-multi-select"
        isMulti
        placeholder="..." 
        value={carreras}
        onChange={(e) => handleSelect(e)}
        getOptionLabel={(optionsCarreras) => optionsCarreras.nombreCarrera}
        getOptionValue={(optionsCarreras) => optionsCarreras.nombreCarrera} // It should be unique value in the options. E.g. ID
      />
        {errors.carreras && <label className='text-red-600 font-bold'>{errors.carreras}</label>}
  </div>
  </div>
    {loading ? (
        <div role="status">
        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
    ) :(
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse</button>
    )}
        {error && <label className='text-red-600 font-bold'>{error}</label>}
      </form>
    )
}

export default FormRegister;
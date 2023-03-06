import React from 'react';
import useFormLogin from 'hooks/useFormLogin';
import validateLogin from './validation/validateLogin';
import { useSelector } from 'react-redux';
const FormLogin = (submitForm) =>{

    const {handleChange,values,handleSubmit,errors,badLogin} = useFormLogin(submitForm,validateLogin);
    const mensaje = useSelector(state => state.user.mensaje)
    return(
        <div className="  w-full bg-white rounded-lg shadow mt-20  sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        {mensaje && <div role="alert" className="ml-5 p-4 mb-4 text-sm text-green-900 rounded-lg bg-green-100 ">
                 {mensaje}
            </div>}
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                Ingrese su cuenta
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}action="#">
                <div>   
                    <label
                     htmlFor="correo"
                     className="block mb-2 text-sm font-medium text-gray-900"
                     >Correo</label>
                    <input 
                    type="text" 
                    name="correo" 
                    id="correo" 
                    onChange={(e) => handleChange(e)}
                    value={values.correo}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                    placeholder="ejemplo.ejemplo@ucn.cl" />
                    {errors.correo && <label className='text-red-600 font-bold'>{errors.correo}</label>}
                </div>

                <div>
                    <label
                    htmlFor="password" 
                    className="block mb-2 text-sm font-medium text-gray-900 "
                    >Contraseña</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={(e) => handleChange(e)}
                    value={values.password}
                    placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                    />
                    {errors.password && <label className='text-red-600 font-bold'>{errors.password}</label>}
                </div>
                <button type="submit" className="w-full text-white bg-ucn-blue hover:bg-ucn-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  {badLogin != null ? (
                  <label
                    htmlFor="password" 
                    className="block mb-2 text-sm font-bold text-red-600 "
                    >Ha ocurrido un error al iniciar sesión, compruebe que haya ingresado bien sus credenciales</label>
                  ):(<></>)}
            </form>
        </div>
    </div>
    )

}

export default FormLogin;
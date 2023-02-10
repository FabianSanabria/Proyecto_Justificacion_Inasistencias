
import { useEffect, useState } from "react";
import Layout from "components/Layout";
import { useSelector,useDispatch } from "react-redux";
import { resetRegistered, login } from "features/user";
import { Navigate } from "react-router-dom";


const LoginPage = () => {

    const dispatch = useDispatch();
    const {loading, isAuthenticated, registered} = useSelector(state => state.user);
    useEffect(() => {

        
        if(registered)
            dispatch(resetRegistered());
    },[registered]);
    const [formData,setFormData] = useState({
        correo: '',
        password: ''
    });

    const {correo,password} = formData;

    const onChange = e => {
        setFormData({...formData,[e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
       dispatch(login({correo,password}));

    }   
    if(isAuthenticated)  return <Navigate to="/menu" />;

    return(
        <Layout title="Login" content="login page">
            
            
        <section className=" mt-30 bg-gray-50 ">
  <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
      
      <div className="  w-full bg-white rounded-lg shadow mt-20  sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                  Ingrese su cuenta
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}action="#">
                  <div>
                      <label
                       htmlFor="correo"
                       className="block mb-2 text-sm font-medium text-gray-900"
                       >Correo</label>
                      <input 
                      type="email" 
                      name="correo" 
                      id="correo" 
                      onChange={onChange}
                      value={correo}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                      placeholder="ejemplo.ejemplo@ucn.cl" 
                      required=""/>
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
                      onChange={onChange}
                      value={password}
                      placeholder="••••••••" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
                      required=""/>
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input 
                            id="remember" 
                            aria-describedby="remember" 
                            type="checkbox" 
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" 
                            required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-gray-500">Remember me</label>
                          </div>
                      </div>
                  </div>
                  <button type="submit" className="w-full text-white bg-ucn-blue hover:bg-ucn-blue focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

              </form>
          </div>
      </div>
  </div>
</section>

        



        </Layout>
    );
};

export default LoginPage;
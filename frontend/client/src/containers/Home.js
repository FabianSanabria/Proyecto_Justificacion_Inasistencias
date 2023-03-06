import Layout from "components/Layout";
import { Link } from "react-router-dom";
import { reset } from "features/solicitud";
import { resetError } from "features/user";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(reset());
        dispatch(resetError());
    },[])
    

    
    return(
        <Layout title="Sistema justificacion" content="home page">
<div className="pt-16">   
        <div className="pt-16">
        <div className="pt-16">

            <div className="ml-5 pt-16 columns-2">
            <Link to="/estudiantes">    
            <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            Portal Estudiantes
            </button>
            </Link>
            <Link to="/login">
            <button  className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            Portal Funcionarios
            </button>
            </Link>
            </div>
        </div>
        </div>
        </div>
        </Layout>
    );
};

export default Home;
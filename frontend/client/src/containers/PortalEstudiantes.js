import Layout from "components/Layout";
import { useGetCarrerasQuery } from "features/carrerasData";
import Select from 'react-select';
import React from 'react';
import { Link } from "react-router-dom";
const PortalEstudiantes = () => {

    const {data} = useGetCarrerasQuery();
    const optionsCarreras = data;
    const [value, setValue] = React.useState({carrera: ''});

    return(
        <Layout title="Sistema justificacion" content="dashboard page">
  <div className="pt-16">   
        <div className="pt-16">
        <div className="pt-16">
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
            <div className="ml-5 pt-16 columns-2">
            <Link to="realizar-solicitud">       
            <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            REALIZAR SOLICITUD
            </button>
            </Link>
            <Link to="revisar-solicitud">       
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            REVISAR SOLICITUDES
            </button>
            </Link>
            </div>
        </div>
        </div>
        </div>
        </Layout>
    );
};

export default PortalEstudiantes;
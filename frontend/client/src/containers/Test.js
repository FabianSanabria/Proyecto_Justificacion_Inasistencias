import Layout from "components/Layout";
import { useGetCarrerasQuery } from "features/carrerasData";
import Select from 'react-select';
import React from 'react';

const Test = () => {

    const {data} = useGetCarrerasQuery();
    const optionsCarreras = data;
    const [value, setValue] = React.useState({carrera: ''});

    return(
        <Layout title="Sistema justificacion" content="dashboard page">
  <div className="pt-16">   
        <div className="pt-16">
        <div className="pt-16">
            <h1 className="ml-20">
                Bienvenido/a  
            </h1>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
 <Select
        name="carrera"
        options={optionsCarreras}
        value={value}
        onChange={setValue}
        getOptionLabel={(optionsCarreras) => optionsCarreras.nombreCarrera}
        getOptionValue={(optionsCarreras) => optionsCarreras.nombreCarrera} // It should be unique value in the options. E.g. ID
      />
            <div className="ml-5 pt-16 columns-2">
            <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            REVISAR SOLICITUDES PENDIENTES
            </button>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            REVISAR SOLICITUDES COMPLETADAS
            </button>
            </div>
        </div>
        </div>
        </div>
        </Layout>
    );
};

export default Test;
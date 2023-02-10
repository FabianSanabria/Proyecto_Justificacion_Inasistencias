import Layout from "components/Layout";


const Home = () => {
    return(
        <Layout title="Sistema justificacion" content="home page">
<div className="pt-16">   
        <div className="pt-16">
        <div className="pt-16">

            <div className="ml-5 pt-16 columns-2">
            <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            Portal Estudiantes
            </button>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-10 px-4 border border-blue-700 rounded">
            Portal Funcionarios
            </button>
            </div>
        </div>
        </div>
        </div>
        </Layout>
    );
};

export default Home;
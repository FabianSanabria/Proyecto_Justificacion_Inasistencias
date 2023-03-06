import React from 'react';
import { useGetCarrerasQuery } from "features/carrerasData";
import Datepicker from "tailwind-datepicker-react"
import { useState,useEffect } from 'react';
import Select from 'react-select';
import { useSelector,useDispatch } from 'react-redux';
import useFormRealizarSolicitud from 'hooks/useFormRealizarSolicitud';
import validateRealizarSolicitud from './validation/validateRealizarSolicitud';
import { enviarRamos } from 'features/solicitud';
import { Navigate } from 'react-router-dom';

const options1 = {
	title: "Ingrese fecha Inicio",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 ",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactNode | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-50",
	defaultDate: new Date("2023-01-01"),
	language: "es",
}

const options2 = {
	title: "Ingrese fecha Termino",
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-gray-700 ",
		todayBtn: "",
		clearBtn: "",
		icons: "",
		text: "",
		input: "",
		inputIcon: "",
		selected: "",
	},
	icons: {
		// () => ReactNode | JSX.Element
		prev: () => <span>Previous</span>,
		next: () => <span>Next</span>,
	},
	datepickerClassNames: "top-50",
	defaultDate: new Date("2023-01-01"),
	language: "es",
};
const FormRealizarSolicitud = (submitForm) =>{

    const {data} = useGetCarrerasQuery();
    const dateFormatter = Intl.DateTimeFormat('sv-SE');
    const optionsCarreras = data; 
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [actualForm,setActualForm] = useState(1);
    const {handleChange,values,handleSubmit,errors} = useFormRealizarSolicitud(submitForm,validateRealizarSolicitud);
    const {loading, solicitudCreada } = useSelector(state => state.solicitudHandler);
    const dispatch = useDispatch();
    const [carrera,setCarrera] = useState("");
    useEffect(() => {
        if(loading && solicitudCreada){
            dispatch(enviarRamos({values}));
        }
        if(values.motivo == "Médico"){
            setShowMotivoLabel(true);
        }
        else{
            setShowMotivoLabel(false);
        }
    },[solicitudCreada,values.motivo])
    const [showForm1,setShowForm1] = useState(true);
    const [showForm2,setShowForm2] = useState(false);
    const [showForm3,setShowForm3] = useState(false);
    const [showForm4,setShowForm4] = useState(false);
    const [showForm5,setShowForm5] = useState(false);
    const [showForm6,setShowForm6] = useState(false);
    const [showFormSubmit,setShowFormSubmit] = useState(false);
    const [showMotivoLabel,setShowMotivoLabel] = useState(false);
    

	const handleCloseDate1 = (state) => {
		setShow1(state)
	};
    const handleCloseDate2 = (state) => {
		setShow2(state)
	};
    const handleDate1 = (date) => {
        const fecha = dateFormatter.format(date);
        const tipo = "Inicio"
        const event = {fecha,tipo}
        handleChange(event);
	};
    const handleDate2 = (date) => {
        const fecha = dateFormatter.format(date);
        const tipo = "Termino"
        const event = {fecha,tipo}
        handleChange(event);
	};
    const handleSelect = (e) => {
        const tipo = "Carrera";
        const carrera = e.nombreCarrera;
        setCarrera(e);
        const event = {tipo,carrera};
        handleChange(event)
	};
    const siguienteForm = i => {
        if(values.cantRamos > i){
            if(i === 1){
                setActualForm(2)
                setShowForm1(false)
                setShowForm2(true)
                if(values.cantRamos === i){
                    setShowFormSubmit(true)
                }   
            }   
            if(i === 2){
                setShowForm2(false)
                setShowForm3(true)
                setActualForm(3)
                if(values.cantRamos === i){
                    setShowFormSubmit(true)
                }   
            }
            if(i === 3){
                setShowForm3(false)
                setShowForm4(true)
                setActualForm(4)
                if(values.cantRamos === i){
                    setShowFormSubmit(true)
                } 
            }
            if(i === 4){
                setShowForm4(false)
                setShowForm5(true)
                setActualForm(5)
                if(values.cantRamos === i){
                    setShowFormSubmit(true)
                } 
            }
            if(i === 5){
                setShowForm5(false)
                setShowForm6(true)
                setActualForm(6)
                if(values.cantRamos === i){
                    setShowFormSubmit(true)
                }
            }
        }else{  
            setShowFormSubmit(true)
        }
    };
    const anteriorForm = i => {
        if(actualForm == i){
            setShowFormSubmit(false)
        }
        if(i === 6){
            setShowForm5(true)
            setShowForm6(false)
            setActualForm(5);
        }   
        if(i === 5){
            setShowForm4(true)
            setShowForm5(false)
            setActualForm(4);
        }
        if(i === 4){
            setShowForm3(true)
            setShowForm4(false)
            setActualForm(3);
        }
        if(i === 3){
            setShowForm2(true)
            setShowForm3(false)            
            setActualForm(2);
        }
        if(i === 2){
            setShowForm1(true)
            setShowForm2(false)            
            setActualForm(1);
        }

    };  
    const onChangeCantRamos = e =>{
        if(e.target.value < values.cantRamos){
            if(actualForm == 1){
                setShowForm1(false)
            }   
            if(actualForm == 2){
                setShowForm2(false)
            }
            if(actualForm == 3){
                setShowForm3(false)
                console.log("first")
            }
            if(actualForm == 4){
                setShowForm4(false)
            }
            if(actualForm == 5){
                console.log("second")
                setShowForm5(false)
            }
            if(actualForm == 6){
                setShowForm6(false)
            }
            if(e.target.value == 1){
                setShowForm1(true)
                setActualForm(1);
            }   
            if(e.target.value == 2){
                setShowForm2(true)
                setActualForm(2);
                
            }
            if(e.target.value == 3){
                setShowForm3(true)
                setActualForm(3);
                
            }
            if(e.target.value == 4){
                setShowForm4(true)
                setActualForm(4);
                
            }
            if(e.target.value == 5){
                setShowForm5(true)
                setActualForm(5);

            }
            if(e.target.value == 6){
                setShowForm6(true)
                setActualForm(6);
            }
        }
        setShowFormSubmit(false)   
        handleChange(e);

    };


    return(
     <form onSubmit={handleSubmit} className="top-0" encType="multipart/form-data">
            <h1 className="font-bold ">-----------------------  Información Alumno  -----------------------                                    </h1>
            

        <div className="mt-2">

            <label className="text-sm font-bold">
            Rut sin puntos y con guión      </label>
			<input 
            type="text" 
            name="rutAlumno" 
            id="rutAlumno" 
            onChange={(e) => handleChange(e)}
            value={values.rutAlumno}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
            placeholder="ejemplo: 20520234-6" 
            />  
            {errors.rutAlumno &&<label className="text-sm font-bold text-red-500">
            {errors.rutAlumno}      </label>}
		</div>
        <div className="mt-2">

            <label className="text-sm font-bold">
            Nombre Completo      </label>
			<input 
            type="text" 
            name="nombreAlumno" 
            id="nombreAlumno" 
            onChange={(e) => handleChange(e)}
            value={values.nombreAlumno}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
            placeholder="" 
            />  
            {errors.nombreAlumno && <label className="text-sm font-bold text-red-500">
            {errors.nombreAlumno}      </label>}
		</div> 
        <div className="mt-2">

            <label className="text-sm font-bold">
            Teléfono      </label>
			<input 
            type="text" 
            name="telefono" 
            id="telefono" 
            onChange={(e) => handleChange(e)}
            value={values.telefono}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
            placeholder="ejemplo: +56911111111" 
            />  
            {errors.telefono && <label className="text-sm font-bold text-red-500">
            {errors.telefono}      </label>}
		</div>
        <div className="mt-2">

            <label className="text-sm font-bold">
            Correo Institucional      </label>
			<input 
            type="text" 
            name="correoAlumno" 
            id="correoAlumno" 
            onChange={(e) => handleChange(e)}
            value={values.correoAlumno}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
            placeholder="" 
            />  
            {errors.correoAlumno && <label className="text-sm font-bold text-red-500">
            {errors.correoAlumno}      </label>}
		</div>   
        <h1 className="font-bold ">----------------------- Información Solicitud -----------------------                                   </h1>
     
        <div className="mt-3">

            <label className="text-sm font-bold">
            Fecha de Inicio de justificación
            </label>
			<Datepicker options={options1} onChange={(e) => handleDate1(e)} show={show1} setShow={(e) => handleCloseDate1(e)} />
            
            
		</div>  
        <div className="mt-3">
            <label className="text-sm font-bold">
            Fecha de Termino de justificación
            </label>
			<Datepicker className="bg-gray-50 border border-gray-300 text-gray-900" options={options2} onChange={(e) =>handleDate2(e)} show={show2} setShow={(e)=>handleCloseDate2(e)} />
            
            {errors.fecha && <label className="text-sm font-bold text-red-500">
            {errors.fecha}      </label>}
		</div>
        <div className="mt-3">

            <label className="text-sm font-bold">
            Motivo de Justificación
            </label>
			<select id="motivo" name='motivo' onChange={(e) => handleChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option value="Fuerza Mayor">Por motivos de Fuerza Mayor</option>
            <option value="Médico">Por motivos Médicos</option>
            </select>
            
		</div>
        {showMotivoLabel ? (
            <div className="mt-3">

            <label className="text-sm font-bold">
            N° de folio de visación de Certificados Médicos
            </label>
			<input 
            type="text" 
            name="nroFolio" 
            id="nroFolio" 
            onChange={(e) => handleChange(e)}
            value={values.nroFolio}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " 
            placeholder="ejemplo: 396/2022" />  
            {errors.nroFolio && <label className="text-sm font-bold text-red-500">
            {errors.nroFolio}      </label>}
		</div>  
        ): (<></>)}
         <div>
            <label htmlFor="carrera"
            className="block py-2.5 px-0 w-full text-sm font-bold bg-transparent border-0   appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            >Ingrese Carrera</label>
            <Select 
            name="carrera"
            id="carrera"
            options={optionsCarreras}
            isSearchable={false}
            value={carrera}
            onChange={handleSelect}
            getOptionLabel={(optionsCarreras) => optionsCarreras.nombreCarrera}
            getOptionValue={(optionsCarreras) => optionsCarreras.nombreCarrera} // It should be unique value in the options. E.g. ID  
        />
         {errors.carrera && <label className="text-sm font-bold text-red-500">
            {errors.carrera}      </label>}
        </div>
            

        <div className="mt-3">     
            <label className="text-sm font-bold">
            Cuantos ramos va a justificar
            </label>
            <select id="cantRamos" name="cantRamos"onChange={(e)=> onChangeCantRamos(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            <option defaultValue value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            </select>
        </div>

        <div > 
        { showForm1?(
        <div id="formRamo1" className="list-item">
            Asignatura 1   <br/>           
            <label htmlFor="Ramo1" className="mt-3">Nombre de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura1Nombre" 
            id="asignatura1Nombre" 
            value={values.asignatura1Nombre}
            onChange={(e) => handleChange(e)}
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura1Nombre && <label className="text-sm font-bold text-red-500">
            {errors.asignatura1Nombre}      </label>}
            </div>
            <label htmlFor="Ramo1" className="mt-3">Código de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura1Codigo" 
            id="asignatura1Codigo" 
            value={values.asignatura1Codigo}
            onChange={(e) => handleChange(e)}
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura1Codigo && <label className="text-sm font-bold text-red-500">
            {errors.asignatura1Codigo}      </label>}
            </div>
            <label htmlFor="Ramo1" className="">NRC de asignatura </label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura1NRC" 
            id="asignatura1NRC" 
            value={values.asignatura1NRC}
            onChange={(e) => handleChange(e)}
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura1NRC && <label className="text-sm font-bold text-red-500">
            {errors.asignatura1NRC}      </label>}
            </div>
            <label htmlFor="Ramo1" className="">Nombre Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura1NombreDoc" 
            id="asignatura1NombreDoc" 
            value={values.asignatura1NombreDoc}
            onChange={(e) => handleChange(e)}
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura1NombreDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura1NombreDoc}      </label>}
            </div>
            <label htmlFor="Ramo1" className="">Correo Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura1CorreoDoc" 
            id="asignatura1CorreoDoc"
            value={values.asignatura1CorreoDoc}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "  />
            {errors.asignatura1CorreoDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura1CorreoDoc}      </label>}
            </div>
            <div className="grid-cols-3">
            <button  disabled className=" mt-3 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Anterior</button>
            <button type="button" onClick={() => siguienteForm(1)} className=" ml-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Siguiente</button>
            {showFormSubmit ?(
            <button type="submit" className=" ml-3 mt-3 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Subir Solicitud</button>
            ):(<></>)
            }
            </div>
            
        </div>
        ):(<></>)}
        { showForm2?(
        <div id="formRamo2" className="list-item">
            Asignatura 2   <br/>           
            <label htmlFor="Ramo1NombreAsignatura" className="mt-3">Nombre de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text"
            name="asignatura2Nombre" 
            id="asignatura2Nombre"
            value={values.asignatura2Nombre}
            onChange={(e) => handleChange(e)}  
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura2Nombre && <label className="text-sm font-bold text-red-500">
            {errors.asignatura2Nombre}      </label>}
            </div>
            <label htmlFor="Ramo2" className="mt-3">Código de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura2Codigo" 
            id="asignatura2Codigo" 
            value={values.asignatura2Codigo}
            onChange={(e) => handleChange(e)}
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura2Codigo && <label className="text-sm font-bold text-red-500">
            {errors.asignatura2Codigo}      </label>}
            </div>
            <label htmlFor="Ramo2" className="">NRC de asignatura </label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura2NRC" 
            id="asignatura2NRC"
            value={values.asignatura2NRC}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura2NRC && <label className="text-sm font-bold text-red-500">
            {errors.asignatura2NRC}      </label>}
            </div>
            
            <label htmlFor="Ramo2" className="">Nombre Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura2NombreDoc" 
            id="asignatura2NombreDoc"
            value={values.asignatura2NombreDoc}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura2NombreDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura2NombreDoc}      </label>}
            </div>
            <label htmlFor="Ramo2" className="">Correo Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura2CorreoDoc" 
            id="asignatura2CorreoDoc"
            value={values.asignatura2CorreoDoc}
            onChange={(e) => handleChange(e)}  
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura2CorreoDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura2CorreoDoc}      </label>}
            </div>
            <div className="grid-cols-3">
            <button type="button" onClick={() => anteriorForm(2)} className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Anterior</button>
            <button type="button" onClick={() => siguienteForm(2)} className="ml-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Siguiente</button>
            {showFormSubmit ?(
            <button type="submit" className=" ml-3 mt-3 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Subir Solicitud</button>
            ):(<></>)
            }
            </div>

        </div>

        ):(<></>)}
        { showForm3?(
        <div id="formRamo3" className="list-item">
            Asignatura 3   <br/>           
            <label htmlFor="Ramo3" className="mt-3">Nombre de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura3Nombre" 
            id="asignatura3Nombre"
            value={values.asignatura3Nombre}
            onChange={(e) => handleChange(e)} 
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura3Nombre && <label className="text-sm font-bold text-red-500">
            {errors.asignatura3Nombre}      </label>}
            </div>
            <label htmlFor="Ramo3" className="mt-3">Código de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura3Codigo" 
            id="asignatura3Codigo" 
            value={values.asignatura3Codigo}
            onChange={(e) => handleChange(e)}
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura3Codigo && <label className="text-sm font-bold text-red-500">
            {errors.asignatura3Codigo}      </label>}
            </div>
            <label htmlFor="Ramo3" className="">NRC de asignatura </label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura3NRC" 
            id="asignatura3NRC"
            value={values.asignatura3NRC}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura3NRC && <label className="text-sm font-bold text-red-500">
            {errors.asignatura3NRC}      </label>}
            </div>
            <label htmlFor="Ramo3" className="">Nombre Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura3NombreDoc" 
            id="asignatura3NombreDoc"
            value={values.asignatura3NombreDoc}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura3NombreDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura3NombreDoc}      </label>}
            </div>
            <label htmlFor="Ramo3" className="">Correo Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura3CorreoDoc" 
            id="asignatura3CorreoDoc"
            value={values.asignatura3CorreoDoc}
            onChange={(e) => handleChange(e)}
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura3CorreoDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura3CorreoDoc}      </label>}
            </div>
            <div className="grid-cols-3">
            <button type="button" onClick={() => anteriorForm(3)} className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Anterior</button>
            <button type="button" onClick={() => siguienteForm(3)} className="ml-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Siguiente</button>
            {showFormSubmit ?(
            <button type="submit" className=" ml-3 mt-3 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Subir Solicitud</button>
            ):(<></>)
            }
            </div> 
        </div>
        ):(<></>)}
        { showForm4?(
        <div id="formRamo4" className="list-item">
            Asignatura 4   <br/>           
            <label htmlFor="Ramo4" className="mt-3">Nombre de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura4Nombre" 
            id="asignatura4Nombre"
            value={values.asignatura4Nombre}
            onChange={(e) => handleChange(e)}  
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura4Nombre && <label className="text-sm font-bold text-red-500">
            {errors.asignatura4Nombre}      </label>}
            </div>
            <label htmlFor="Ramo4" className="mt-3">Código de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura4Codigo" 
            id="asignatura4Codigo" 
            value={values.asignatura4Codigo}
            onChange={(e) => handleChange(e)}
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura4Codigo && <label className="text-sm font-bold text-red-500">
            {errors.asignatura4Codigo}      </label>}
            </div>
            <label htmlFor="Ramo4" className="">NRC de asignatura </label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura4NRC" 
            id="asignatura4NRC"
            value={values.asignatura4NRC}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura4NRC && <label className="text-sm font-bold text-red-500">
            {errors.asignatura4NRC}      </label>}
            </div>
            <label htmlFor="Ramo4" className="">Nombre Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura4NombreDoc" 
            id="asignatura4NombreDoc"
            value={values.asignatura4NombreDoc}
            onChange={(e) => handleChange(e)}
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura4NombreDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura4NombreDoc}      </label>}
            </div>
            <label htmlFor="Ramo4" className="">Correo Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura4CorreoDoc" 
            id="asignatura4CorreoDoc"
            value={values.asignatura4CorreoDoc}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura4CorreoDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura4CorreoDoc}      </label>}
            </div>
            <div className="grid-cols-3">
            <button type="button" onClick={() => anteriorForm(4)} className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Anterior</button>
            <button type="button" onClick={() => siguienteForm(4)} className="ml-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Siguiente</button>
            {showFormSubmit ?(
            <button type="submit" className=" ml-3 mt-3 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Subir Solicitud</button>
            ):(<></>)
            }
            </div>
        </div>
        ):(<></>)}
        { showForm5?(
        <div id="formRamo5" className="list-item">
            Asignatura 5   <br/>           
            <label htmlFor="Ramo5" className="mt-3">Nombre de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura5Nombre" 
            id="asignatura5Nombre"
            value={values.asignatura5Nombre}
            onChange={(e) => handleChange(e)} 
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura5Nombre && <label className="text-sm font-bold text-red-500">
            {errors.asignatura5Nombre}      </label>}
            </div>
            <label htmlFor="Ramo5" className="mt-3">Código de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura5Codigo" 
            id="asignatura5Codigo" 
            value={values.asignatura5Codigo}
            onChange={(e) => handleChange(e)}
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura5Codigo && <label className="text-sm font-bold text-red-500">
            {errors.asignatura5Codigo}      </label>}
            </div>
            <label htmlFor="Ramo5" className="">NRC de asignatura </label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura5NRC" 
            id="asignatura5NRC"
            value={values.asignatura5NRC}
            onChange={(e) => handleChange(e)}  
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura5NRC && <label className="text-sm font-bold text-red-500">
            {errors.asignatura5NRC}      </label>}
            </div>
            <label htmlFor="Ramo5" className="">Nombre Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura5NombreDoc" 
            id="asignatura5NombreDoc"
            value={values.asignatura5NombreDoc}
            onChange={(e) => handleChange(e)}  
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura5NombreDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura5NombreDoc}      </label>}
            </div>
            <label htmlFor="Ramo5" className="">Correo Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura5CorreoDoc" 
            id="asignatura5CorreoDoc"
            value={values.asignatura5CorreoDoc}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura5CorreoDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura5CorreoDoc}      </label>}
            </div>
            <div className="grid-cols-3">
            <button type="button" onClick={() => anteriorForm(5)} className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Anterior</button>
            <button type="button" onClick={() => siguienteForm(5)} className="ml-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Siguiente</button>
            {showFormSubmit ?(
            <button type="submit" className=" ml-3 mt-3 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Subir Solicitud</button>
            ):(<></>)
            }
            </div>
        </div>
        ):(<></>)}
        { showForm6?(
        <div id="formRamo6" className="list-item">
            Asignatura 6   <br/>           
            <label htmlFor="Ramo6" className="mt-3">Nombre de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura6Nombre" 
            id="asignatura6Nombre"
            value={values.asignatura6Nombre}
            onChange={(e) => handleChange(e)} 
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura6Nombre && <label className="text-sm font-bold text-red-500">
            {errors.asignatura6Nombre}      </label>}
            </div>
            <label htmlFor="Ramo6" className="mt-3">Código de asignatura</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura6Codigo" 
            id="asignatura6Codigo" 
            value={values.asignatura6Codigo}
            onChange={(e) => handleChange(e)}
            className="block py-2.5 px-0 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" " />
            {errors.asignatura6Codigo && <label className="text-sm font-bold text-red-500">
            {errors.asignatura6Codigo}      </label>}
            </div>
            <label htmlFor="Ramo6" className="">NRC de asignatura </label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura6NRC" 
            id="asignatura6NRC"
            value={values.asignatura6NRC}
            onChange={(e) => handleChange(e)}  
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura6NRC && <label className="text-sm font-bold text-red-500">
            {errors.asignatura6NRC}      </label>}
            </div>
            <label htmlFor="Ramo6" className="">Nombre Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura6NombreDoc" 
            id="asignatura6NombreDoc"
            value={values.asignatura6NombreDoc}
            onChange={(e) => handleChange(e)}  
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura6NombreDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura6NombreDoc}      </label>}
            </div>
            <label htmlFor="Ramo6" className="">Correo Docente</label>
            <div className="relative z-0 w-full group">
            <input 
            type="text" 
            name="asignatura6CorreoDoc" 
            id="asignatura6CorreoDoc"
            value={values.asignatura6CorreoDoc}
            onChange={(e) => handleChange(e)} 
            className="block mb-2 py-2.5 w-1/2 text-sm rounded-lg border-0 border-b-2 border-gray-300  focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
            placeholder=" "/>
            {errors.asignatura6CorreoDoc && <label className="text-sm font-bold text-red-500">
            {errors.asignatura6CorreoDoc}      </label>}
            </div>
            <div className="grid-cols-3">
            <button type="button" onClick={() => anteriorForm(6)} className="mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Anterior</button>
            <button type="button" onClick={() => siguienteForm(6)} className="ml-3 mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Siguiente</button>
            {showFormSubmit ?(
            <button type="submit" className=" ml-3 mt-3 text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Subir Solicitud</button>
            ):(<></>)
            }
            </div>
        </div>
        ):(<></>)}

        </div> 
        
    </form>


    )

}

export default FormRealizarSolicitud;
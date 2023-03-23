import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { checkAuth } from "features/user";
import Home from "containers/Home";
import DashboardPage from "containers/Dashboard";
import LoginPage from "containers/LoginPage";
import RegisterPage from "containers/RegisterPage";
import MenuLogged from "containers/MenuLogged";
import SolicitudesPendientes from "containers/SolicitudesPendientes";
import SolicitudesCompletadas from "containers/SolicitudesCompletadas";
import PortalEstudiantes from "containers/PortalEstudiantes";
import RealizarSolicitud from "containers/RealizarSolicitud";
import RevisarSolicitud from "containers/RevisarSolicitud";
import UploadFile from "containers/UploadFile";
import EstudiantesDashboard from "containers/EstudiantesDashboard";
import DetalleSolicitudPendiente from "containers/DetalleSolicitudPendiente";
import DetalleSolicitudPendienteRamos from "containers/DetalleSolicitudPendienteRamos";
import DetalleSolicitudCompletada from "containers/DetalleSolicitudCompletada";
import DetalleSolicitudCompletadaRamos from "containers/DetalleSolicitudCompletadaRamos";

import Detalle from "containers/Detalle";

import Test from "containers/Test"
import {useDispatch } from "react-redux";



const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);



  return (
    
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>  
            <Route path='/dashboard' element={<DashboardPage/>}/>  
            <Route path='/login' element={<LoginPage/>}/>  
            <Route path='/7s2d06+vVc9JBpxSSEtHvQrAaq8aZJuvGMJ3Lp2dyM=' element={<RegisterPage/>}/>  
            <Route path='/menu' element={<MenuLogged/>}/> 
            <Route path='/menu/solicitudes-pendientes/' element={<SolicitudesPendientes/>}/> 
            <Route path='/menu/solicitudes-pendientes/detalle' element={<DetalleSolicitudPendiente/>}/> 
            <Route path='/menu/solicitudes-pendientes/detalle/ramos' element={<DetalleSolicitudPendienteRamos/>}/> 
            <Route path='/menu/solicitudes-completadas/' element={<SolicitudesCompletadas/>}/> 
            <Route path='/menu/solicitudes-completadas/detalle' element={<DetalleSolicitudCompletada/>}/> 
            <Route path='/menu/solicitudes-completadas/detalle/ramos' element={<DetalleSolicitudCompletadaRamos/>}/> 

            <Route path='/test' element={<Test/>}/>  
            <Route path='/estudiantes' element={<PortalEstudiantes/>}/>  
            <Route path='/estudiantes/realizar-solicitud' element={<RealizarSolicitud/>}/>  
            <Route path='/estudiantes/realizar-solicitud/subirDoc' element={<UploadFile/>}/>  
            <Route path='/estudiantes/revisar-solicitud/' element={<RevisarSolicitud/>}/>  
            <Route path='/estudiantes/revisar-solicitud/Dashboard' element={<EstudiantesDashboard/>}/>  
            <Route path='/estudiantes/revisar-solicitud/Dashboard/detalle' element={<Detalle/>}/>  

        </Routes>
      </Router>

  );
}

export default App;

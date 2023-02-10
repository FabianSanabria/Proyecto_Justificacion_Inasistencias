import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { checkAuth } from "features/user";
import Home from "containers/Home";
import DashboardPage from "containers/Dashboard";
import LoginPage from "containers/LoginPage";
import RegisterPage from "containers/RegisterPage";
import MenuLogged from "containers/MenuLogged";
import {useDispatch } from "react-redux";



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, []);



  return (
    
      <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>  
            <Route path='/dashboard' element={<DashboardPage/>}/>  
            <Route path='/login' element={<LoginPage/>}/>  
            <Route path='/register' element={<RegisterPage/>}/>  
            <Route path='/menu' element={<MenuLogged/>}/>  

        </Routes>
      </Router>

  );
}

export default App;

import React from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import MyRoute from "./components/Routes/MyRoutes";
import NovoContato from "./pages/NovoContato";
import { toast } from "react-toastify";






const RoutesApp = () =>{
   
    return(
        <Router>
           
            <Routes>
                <Route path='/' element={<Login/>}/>

                <Route path="/cadastro" element={<Cadastro/>}/>
               
                <Route path="/home"  element={
                <MyRoute  element={<Home/>} />}/>

                <Route path="/novocontato" element={ 
                <MyRoute isClosed element={<Cadastro/>} />}/>
            </Routes>
           
        </Router>
    );
}
export default RoutesApp;
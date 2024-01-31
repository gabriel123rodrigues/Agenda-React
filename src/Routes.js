import React from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import MyRoute from "./components/Routes/MyRoutes";
import NovoContato from "./pages/NovoContato";
import { toast } from "react-toastify";






const RoutesApp = () =>{
    toast.success( "oi, Olha o toast aí")
    toast.error( "oi, Olha o toast aí")
    return(
        <Router>
           
            <Routes>
                <Route path='/' element={<Login/>}/>

                <Route path="/cadastro" element={<Cadastro/>}/>
               
               <Route path="/Home"  element={
                <MyRoute  element={<Home/>} />}/>

                <Route path="/novocontato" element={<NovoContato/>}/>
            </Routes>
           
        </Router>
    );
}
export default RoutesApp;
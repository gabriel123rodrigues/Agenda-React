import React from "react";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NovoContato from "./pages/NovoContato";
import StoreProvider from "./context/Provider";
import RoutesPrivate from './components/Routes/Private/Private.js'




const RoutesApp = () =>{
    return(
        <Router>
           
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                {/* <RoutesPrivate path="/Home" element={<Home/>}/> */}
                <Route path="/Home" element={<Home/>}/>
                <Route path="/novocontato" element={<NovoContato/>}/>
            </Routes>
           
        </Router>
    );
}
export default RoutesApp;
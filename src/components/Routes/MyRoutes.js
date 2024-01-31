import React from "react";
import {Route, Navigate} from 'react-router-dom'
import PropTypes from 'prop-types';




export default function MyRoute({element, isClosed}){
    
    const isLoggedIn = true;
    return isLoggedIn && !isClosed ?  element : <Navigate to={'/cadastro'}/>;
         
}

import React from "react";
import './styleNav.css';
import Img from '../../imgs/agendaNav.png';
function NavBar() {
    return (
        <nav>
            <div className="logo-nav">
                <img className="img-home" src={Img}/>
                
            </div>
        </nav>
    )
}
export default NavBar
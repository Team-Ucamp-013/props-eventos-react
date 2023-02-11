import React from "react";
import { Link } from "react-router-dom";
import Paciente from "./Pacientes";

export default function Contacto(){
    return (
    <>
    
    <nav>
        <ul>
            <li>
                <Link to={'/'}>Home </Link>
            </li>
            <li>
                <Link to={'/about'}>About </Link>
            </li>
            <li>
                <Link to={'/contacto'}>Contacto </Link>
            </li>
        </ul>
    </nav>
    <h1>Pacientes</h1>
    <Paciente />
    </>
    )
}
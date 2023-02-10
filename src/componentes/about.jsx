import React from "react";
import { Link } from "react-router-dom";
import ColorSchemesExample from "../navbar/Navbar";
export default function About(){
    return (
    <>
    <ColorSchemesExample />
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
    <h1>¿Quienes somos?</h1>
    </>
    )
}
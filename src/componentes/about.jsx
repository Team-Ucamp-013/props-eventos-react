import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';


export default function About(){

     const [info, setInfo] = useState([])

    const getData = async() => {
        const url = 'https://hp-api.onrender.com/api/characters'
        const resp = await axios.get(url)
        setInfo(resp.data)
        console.log(resp.data)
    }

    useEffect(()=>{
        getData();
    },[])

    
   
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
    <h1>¿Qué voy a traer?</h1>
     
     {/* {info.map(x =>
        <div key={x.id}>
         <h1>{x.character}</h1>
         <img src={x.image}/>
        </div>)} */}

      {info.map((x,index)=>{
        return(
            <div key={index}>
                <img src={x.image} alt={x.actor}/>
            </div>
        )
     })} 

    </>
    )
}
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Detail = () => {
    const [dentist, setDentist] = useState({})
    const {id} = useParams()
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    useEffect(()=>{
        axios(url).then((res)=>{
            setDentist(res.data);
        })
    },[dentist])

    // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

    return (
        <>
        <h1>Detail Dentist id </h1>
        <h2>{dentist.name}</h2>
        <p>email: {dentist.email}</p>
        <p>phone: {dentist.phone}</p>
        <p>website: {dentist.website}</p>
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
        </>
    )
}

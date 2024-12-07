import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../../Context/Context';
import styles from "./Detail.module.css"

export const Detail = () => {
    const [dentist, setDentist] = useState({})
    const {state} = useGlobalContext()
    const {id} = useParams()
    const url = "https://jsonplaceholder.typicode.com/users/" + id;
    useEffect(()=>{
        axios(url).then((res)=>{
            setDentist(res.data);
        })
    },[dentist])


    return (
        <div className={`${styles.container} ${state.theme === "light" ? styles.light : styles.dark}`}>
            <div className={styles.card}>
                <img className={styles.img} src="/images/doctor.jpg" alt="doctor image"/>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Detail Dentist id </h1>
                    <h2 className={styles.name}>{dentist.name}</h2>
                    <p className={styles.text}>email: {dentist.email}</p>
                    <p className={styles.text}>phone: {dentist.phone}</p>
                    <p className={styles.text}>website: {dentist.website}</p>
                </div>
            </div>
        </div>
    )
}

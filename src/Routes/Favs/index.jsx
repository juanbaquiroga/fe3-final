import React, { useEffect, useState } from "react";
import Card from "../../Components/Card";
import { useGlobalContext } from "../../Context/Context";
import styles from "./Favs.module.css"

export const Favs = () => {
    const [favs, setFavs] = useState([])
    const {state, dispatch} = useGlobalContext()
    
    useEffect(()=>{
        setFavs(JSON.parse(localStorage.getItem("favs")))
    }, [state.favourites])

    const deleteAll = ()=>{
        dispatch({type:"RESET_FAVS"})

    }
    return (
        <div className={`${styles.container} ${state.theme === "light"? styles.light : styles.dark}`}>
        <h1 className={styles.title}>Dentists Favs</h1>
        <div className={styles.cardContainer}>
            {favs && favs.map((dentist)=>{
                    return <Card key={dentist.key} dentist={dentist} isFav={true}/>
                })}
        </div>
        <button className={styles.button} onClick={deleteAll}>Delete all</button>
        </div>
    );
};

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useGlobalContext } from "../../Context/Context";


const Card = ({ dentist, isFav }) => {
    const {state, dispatch} = useGlobalContext()
    const addFav = ()=>{
        dispatch({type:"ADD_FAV", payload:{...dentist}})
    }
    const removeFav = () =>{
        dispatch({type:"REMOVE_FAV", payload:{id:dentist.id}})
    }


    return (
        <div className={`${styles.card} ${state.theme === "light" ? styles.light : styles.dark}`}>
            <Link className={styles.link} to={"/detail/"+dentist.id}>
                <img className={styles.img} src="/images/doctor.jpg" alt={dentist.name}/>
            </Link>
            <div className={styles.textContainer}>
                <h5 className={styles.title}>{dentist.id} {dentist.username}</h5>
                <p className={styles.name}>name: {dentist.name}</p>
                {isFav?(
                    <button className={styles.button} onClick={removeFav}>Delete fav</button>
                ):(
                    <button className={styles.button} onClick={addFav}>Add fav</button>
                )}
            </div>
        </div>
    );
};

export default Card;

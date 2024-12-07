import React from 'react'
import Card from '../../Components/Card'
import { useGlobalContext } from '../../Context/Context'
import styles from "./Home.module.css";

export const Home = () => {
    const {state} = useGlobalContext();
    
    return (
        <main className={`${styles.container} ${state.theme === "light" ? styles.light : styles.dark}`}>
        <h1 className={styles.title}>Home</h1>
        <div className={styles.cardContainer}>
            {state.dentists.map((dentist)=>{
                return <Card key={dentist.id} dentist={dentist}/>
            })}
        </div>
        </main>
    )
}

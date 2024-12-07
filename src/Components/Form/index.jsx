import React from "react";
import { useGlobalContext } from "../../Context/Context";
import styles from "./Form.module.css"

const Form = ({user, setUser, handleSubmit}) => {
    const {state} = useGlobalContext()

    return (
            <form className={`${styles.form} ${state.theme === "light" ? styles.light : styles.dark}`}onSubmit={handleSubmit}>
                <label className={styles.label} for="name">Nombre:</label>
                <input className={styles.input} type="text" value={user.name} onChange={(e)=>
                    setUser({...user, name: e.target.value})
                }/>
                <label className={styles.label} for="email">Email</label>
                <input className={styles.input} type="email" value={user.email} onChange={(e)=>
                    setUser({...user, email: e.target.value})
                }/>
                <button className={styles.button} type="submit">Enviar</button>
            </form>
    );
};

export default Form;

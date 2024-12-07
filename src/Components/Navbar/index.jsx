import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../Context/Context'
import styles from "./Navbar.module.css"

const Navbar = () => {
    const { state, dispatch } = useGlobalContext();
    
    return (
        <nav className={`${styles.nav} ${state.theme === "light"?styles.light:styles.dark}`}>
            <Link className={styles.link} to="/">
            <h4 className={styles.text} >Home</h4>
            </Link>
            <Link className={styles.link} to="/favs">
            <h4 className={styles.text} >Favs</h4>
            </Link>
            <Link className={styles.link} to="/contact">
            <h4 className={styles.text} >Contact</h4>
            </Link>
            <button className={styles.button} onClick={()=> dispatch({type:"SWITCH_THEME"})}>Change theme</button>
        </nav>
    )
}

export default Navbar

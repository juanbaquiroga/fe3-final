import React from 'react'
import { useGlobalContext } from '../../Context/Context'
import styles from "./Footer.module.css"

const Footer = () => {
    const {state} = useGlobalContext()
    return (
        <footer className={`${styles.footer} ${state.theme === "light"? styles.light : styles.dark}`}>
            <p className={styles.text}>Powered by</p>
            <img className={styles.img} src="/images/DH.png" alt='DH-logo' />
        </footer>
    )
}

export default Footer

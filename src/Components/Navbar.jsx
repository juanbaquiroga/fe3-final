import React from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../Context/Context'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const { state, dispatch } = useGlobalContext();
    
    return (
        <nav style={{backgroundColor: (state.theme === "light")?"#fff":"#000", height: "100px", width:"100%"}}>
            <Link to="/">
            <h4>Home</h4>
            </Link>
            <Link to="/favs">
            <h4>Favs</h4>
            </Link>
            <Link to="/contact">
            <h4>Contact</h4>
            </Link>
            <button onClick={()=> dispatch({type:"SWITCH_THEME"})}>Change theme</button>
        </nav>
    )
}

export default Navbar

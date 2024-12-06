import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";


const Card = ({ dentist, isFav }) => {
    const {state, dispatch} = useGlobalContext()
    const addFav = ()=>{
        dispatch({type:"ADD_FAV", payload:{...dentist}})
    }
    const removeFav = () =>{
        dispatch({type:"REMOVE_FAV", payload:{id:dentist.id}})
    }


    return (
        <div className="card">
            <h5>{dentist.username}</h5>
            <b>name: {dentist.name}</b>
            <h5>{dentist.username}</h5>
            {/* En cada card deberan mostrar en name - username y el id */}

            {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

            {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
            {isFav?(
                <button onClick={removeFav}>Delete fav</button>
            ):(
                <button onClick={addFav}>Add fav</button>
            )}
            <Link to={"/detail/"+dentist.id}>Detail</Link>
        </div>
    );
};

export default Card;

import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalContext } from "../Context/Context";


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
        <>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
            {favs && favs.map((dentist)=>{
                    return <Card key={dentist.key} dentist={dentist} isFav={true}/>
                })}
        </div>
        <button onClick={deleteAll}>Delete all</button>
        </>
    );
};

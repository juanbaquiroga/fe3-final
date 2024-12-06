import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";


const GlobalContext = createContext(); 
const favs = JSON.parse(localStorage.getItem("favs")) || []
const initialState = {
    dentists : [],
    favourites : favs,
    theme: "light"
}

const Context = ({children})=>{
    const [state, dispatch] = useReducer(reducer, initialState);  
    const url = "https://jsonplaceholder.typicode.com/users";
    
    useEffect(()=>{
        axios(url).then((res)=>{
            console.log(res.data)
            dispatch({type: "SET_DENTISTS", payload: res.data})
        })
    }, [])
    useEffect(()=>{
        localStorage.setItem("favs", JSON.stringify(state.favourites))
    }, [state.favourites])


    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default Context;

export const useGlobalContext = () => useContext(GlobalContext);

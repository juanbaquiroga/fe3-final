export const reducer = (state, action)=>{
    switch (action.type) {
        case "SET_DENTISTS":
            return {...state, dentists : action.payload};
        case "ADD_FAV":
            if (state.favourites.some((fav) => fav.id === action.payload.id)) {
                return state; 
            }
            return {
                ...state,
                favourites: [...state.favourites, action.payload], 
            };
        case "REMOVE_FAV": 
            return {
                ...state,
                favourites: state.favourites.filter(
                    (fav) => fav.id !== action.payload.id
                )
            };
        case "RESET_FAVS": 
            return {...state, favourites:[]}
        case "SWITCH_THEME":
            return {...state, theme : (state.theme === "light")? "dark" : "light"};
        default:
            throw new Error(`accion no existente ${action.type}`)
    }
}

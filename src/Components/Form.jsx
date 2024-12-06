import React from "react";


const Form = ({user, setUser, handleSubmit}) => {
    //Aqui deberan implementar el form completo con sus validaciones

    return (
            <form onSubmit={handleSubmit}>
                <label for="name">Nombre:</label>
                <input type="text" value={user.name} onChange={(e)=>
                    setUser({...user, name: e.target.value})
                }/>
                <label for="email">Email</label>
                <input type="email" value={user.email} onChange={(e)=>
                    setUser({...user, email: e.target.value})
                }/>
                <button type="submit">Enviar</button>
            </form>
    );
};

export default Form;

import React, { useState } from 'react'
import Form from '../Components/Form'
import { useGlobalContext } from '../Context/Context'
import { Message } from '../Components/Message/Message'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Contact = () => {
    const {state}  = useGlobalContext()
    const [user, setUser] = useState({name:"", email:""})
    const [show, setShow] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(user.name.trim().length >= 3 && emailRegex.test(user.email)){
            setError(false)
            setShow(true)
            console.log(user)
        }else{
            setError(true)
        }
    }
    return (
        <div>
            <h2>Want to know more?</h2>
            <p>Send us your questions and we will contact you</p>
            {show?(
                <Message name={user.name} email={user.email}/>
            ):(
            <Form user={user} setUser={setUser} handleSubmit={handleSubmit}/>
            )}
            {error&&(
                <h4 style={{ color: "red" }}>
                    Por favor, escriba la información correctamente
                </h4>
            )}
        </div>
    )
}

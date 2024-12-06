import React from 'react'
import Card from '../Components/Card'
import { useGlobalContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

export const Home = () => {
    const {state, dispatch} = useGlobalContext();
    
    return (
        <main className="" >
        <h1>Home</h1>
        <div className='card-grid'>
            {state.dentists.map((dentist)=>{
                return <Card key={dentist.id} dentist={dentist}/>
            })}
        </div>
        </main>
    )
}

import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'

const Listas = () => {
    const estadoInicial=["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"]
    const [lista,setlista]=React.useState(estadoInicial)
    const estadoInicialObj = [
    {id:1,texto:'Elemento1'},
    {id:2,texto:'Elemento2'},
    {id:3,texto:'Elemento3'},
    {id:4,texto:'Elemento4'} ]

    const [listao, setListao] = React.useState(estadoInicialObj)
    const Agregar=()=>{
        setListao([
            ...listao,// operador de propagación
            {id:5,texto:'Elemento5'}// nuevo objeto
        ])
    }
    return (
        <div>
            <h1>Listas</h1>
            <h2>Array</h2>
            <ul>
                <button onClick={()=>Agregar()}>Agregar</button>
                {
                    lista.map((elemento,index)=>(<li key={index}>{elemento}</li>))
                }
                <h2>Lista de objetos</h2>
                <ol>
                    {
                        listao.map((elemento)=>(<li key={elemento.id}>{elemento.texto}</li>))
                    }
                </ol>
            </ul>
        </div>
    )
}


export default Listas
import React from 'react'

export const Formulario = () => {
    //hooks
    const [nombre,setNombre]=React.useState('')
    const [apellido,setApellido]=React.useState('')
    const [lista,setLista]=React.useState([])
    const registrarDatos=(e)=>{
        e.preventDefault()
        //validaciones
        if(!nombre){
            alert('Falta el nombre')
        }
        if(!apellido){
            alert('Falta el apellido')
        }
        //console.log("registrando:"+ nombre + apellido)
        //guardar en la lista
        setLista([
            ...lista,
            {nombre, apellido}
        ])
        //limpiar inputs
        e.target.reset()
        //limpiar estados
        setNombre('')
        setApellido('')
    }
  return (
    <div>
        <h1 className='text-center'>Registro de usuario</h1>
        <form onSubmit={registrarDatos}>
            <input type="text" 
            placeholder='Ingrese nombre'
            className='form-control m-2'
            onChange={(e)=>setNombre(e.target.value)}
            />
            <input type="text" 
            placeholder='Ingrese apellido'
            className='form-control m-2'
            onChange={(e)=>setApellido(e.target.value)}
            />
            <div className='d-grid gap-2'>
            <button className='btn btn-info m-2'>Registrar</button>
            </div>
            
        </form>
        <hr />
        <h1 className='text-center'>Usuarios Registrados</h1>
        <ul className='list-group'>
            {
                lista.map((elemento,index)=>
                <li className='list-group-item' key={index}>
                    {elemento.nombre} - {elemento.apellido}</li>)
            }
        </ul>
    </div>
  )
}

export default Formulario

import React from 'react'

export const Formulario = () => {
  return (
    <div>
        <h1>Registro de usuario</h1>
        <form>
            <input type="text" 
            placeholder='Ingrese nombre'
            className='form-control m-2'
            />
            <input type="text" 
            placeholder='Ingrese apellido'
            className='form-control m-2'
            />
            <div className='d-grid gap-2'>
            <button className='btn btn-info m-2'>Registrar</button>
            </div>
            
        </form>
    </div>
  )
}

export default Formulario

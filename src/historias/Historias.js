import React from 'react'
import './historia.css'

const Historias = (props) => {

  return (
    <div className="historia" >
      <div className="datos-personaje">
        <h1>Nombre del personage: {props.name}</h1>
        <h1>Estado del personage: {props.status}</h1>
        <h1>Especie del personage: {props.species}</h1>
        <div className="reacciones">
          <span>eliminar</span>
          {props.save === true ? (            
            <span onClick={props.savescene}>guardar</span>
          ) : null
          }
          {props.save === false? (
            <span onClick={props.savescene}>guardar</span>
          ) : null
          }
          <span onClick={props.like}>megusta</span>
        </div>

      </div>

      <div className="foto">
        <img src={props.image} />
      </div>
    </div>

  )
}

export default Historias;

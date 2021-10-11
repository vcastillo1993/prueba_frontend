import React from 'react'
import './pages.css'

const Pages = (props) => {

  return (
    <div className="card">
      {
        props.prev ? (
          <div>
            <button onClick={props.devolber}>ANTERIOR</button>
          </div>
        ) :
          null
      }
      {
        props.next ? (
          <div>
            <button onClick={props.avanzar}>SIGUIENTE</button>
          </div>
        ):
        null
      }

    </div>
  )
}

export default Pages

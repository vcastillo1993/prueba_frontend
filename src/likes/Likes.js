import React from 'react'
import './likes.css';
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons'
 */

const Likes = (props) => {
  
 
  return (

    <div className="likes">
      <h1>{props.likes} Likes</h1>
      <div className="thowcomponent">
        <h1 onClick= {props.retorn}><i class="fab fa-old-republic"></i></h1>
        <h1 onClick={props.cambio}><i className="fas fa-save"></i></h1>
        <h1><i className="fas fa-plus"></i></h1>
      </div>
    </div>
  )
}

export default Likes

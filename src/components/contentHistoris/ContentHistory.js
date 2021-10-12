import React from 'react'

import './contentHistory.css'

const ContentHistory = (props) => {
  return (
    <div className = "content">
      <ul>
      {props.children}
      </ul>
    </div>
  )
}

export default ContentHistory



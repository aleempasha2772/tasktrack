import React from 'react'
import './TaskForm.css'
const Tag = ({tagName}) => {
  
  return (
    <button className='tag'>{tagName}</button>
  )
}

export default Tag
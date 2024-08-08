import React from 'react'
import './TaskForm.css'
const Tag = ({tagName,selectTag,selected}) => {
  const tagStyle = {
    Critical: {backgroundColor: "#f80000"},
    High: {backgroundColor: "#e1ab15"},
    Medium: {backgroundColor: "#e1ab15"},
    Low: {backgroundColor: "#e1ab15"},
    default: {backgroundColor: "#e1bc17"}
  }
  return (
    <button
      type='button'
      style = {selected ? tagStyle[tagName] :tagStyle.default} 
      className='tag' 
      onClick={()=> selectTag(tagName)
    }>
      {tagName}
    </button>
  )
}

export default Tag
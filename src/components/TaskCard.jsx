import React from 'react'
import Tag from './Tag'
import deleteIcon from '../assets/delete.png'
import "./TaskCard.css";
const TaskCard = () => {
  return (
    <article className='task_card'>
        <h3 className='task_text'>Task Name</h3>
        <p className='task_description'>Task Description</p>
        <div className='task_card_bottom_line'>
            <div className='task_card_tags'>
                <Tag tagName="CRITICAL"/>
                <Tag tagName="HIGH"/>
            </div>
            <div className='task_delete'>
                <img  className='delete_icon' src={deleteIcon} alt="" />
            </div>
        </div>
        {/* <Tag/> */}
    </article>
  )
}

export default TaskCard
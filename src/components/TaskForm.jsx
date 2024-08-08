import React,{useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = () => {
  const [task,setTask] = useState("")
  const [taskDescription,setTaskDescription] = useState("")
  const [status,setStatus] = useState("todo")
  const handleTaskChange = e => {
    setTask(e.target.value)
  }
  const handleTaskDescriptionChange = e => {
    setTaskDescription(e.target.value)
  }
  const handleStatusChange = e => {
    setStatus(e.target.value)
  }
  console.log(task,status,taskDescription)
  return (
   <header className='app-header'>
        <form>
            <input 
                className='task-input' 
                type='text' 
                placeholder='Enter you Task Title'
                onChange={(e) => handleTaskChange(e)}    
            />
            <input
                className='task-description'
                type='text' 
                placeholder='Enter you Task Description' 
                onChange={(e) => handleTaskDescriptionChange(e)}></input>
            <div className='task-form-button-line'>
                <div>
                    <Tag tagName = 'Critical' />
                    <Tag tagName = 'High'/>
                    <Tag tagName = 'Medium'/>
                    <Tag tagName = 'Low' />

                </div>
                
                <div>
                    <select className="task_status" onChange={handleStatusChange}>
                        <option value="todo">To do</option>
                        <option value="doing">Doing</option>
                        <option value="done">Done</option>
                    </select>
                </div>
                <button type="submit" className="task_submit">+ Add Task</button>
            </div>
        </form>
   </header>
  )
}

export default TaskForm
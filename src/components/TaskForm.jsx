import React,{useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = () => {
  const [task,setTask] = useState("")
  const [taskDescription,setTaskDescription] = useState("")
  const [status,setStatus] = useState("todo")
  const [taskData,setTaskData] = useState({
    task: "",
    taskdescription: "",
    status: "todo"
  })
  const handleTaskChange = e => {
    setTask(e.target.value)
  }
  const handleTaskDescriptionChange = e => {
    setTaskDescription(e.target.value)
  }
  const handleStatusChange = e => {
    setStatus(e.target.value)
  }
  const handleChange = e => {
    const {name,value} = e.target;
    setTaskData(prev => {
        return {...prev, [name] : value}
    })
  }
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(taskData)
  }
  
  return (
   <header className='app-header'>
        <form onSubmit={handleSubmit}>
            <input 
                name='task'
                className='task-input' 
                type='text' 
                placeholder='Enter you Task Title'
                onChange={(e) => handleChange(e)}    
            />
            <input
                name='taskdescription'
                className='task-description'
                type='text' 
                placeholder='Enter you Task Description' 
                onChange={(e) => handleChange(e)}></input>
            <div className='task-form-button-line'>
                <div>
                    <Tag tagName = 'Critical' />
                    <Tag tagName = 'High'/>
                    <Tag tagName = 'Medium'/>
                    <Tag tagName = 'Low' />

                </div>
                
                <div>
                    <select
                        name='status'
                        className="task_status" 
                        onChange={handleChange}
                    >
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
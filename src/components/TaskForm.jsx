import React,{useState} from 'react'
import './TaskForm.css'
import Tag from './Tag'
const TaskForm = () => {
  
  const [taskData,setTaskData] = useState({
    task: "",
    taskdescription: "",
    status: "todo",
    tags: []
  })
  const handleChange = e => {
    const {name,value} = e.target;
    setTaskData(prev => {
        return {...prev, [name] : value}
    })
  }
  const selectTag =(tag) =>{
    if(taskData.tags.some(item => item === tag)){
        const filterTags = taskData.tags.filter(item =>item!== tag)
        setTaskData(prev => {
            return {...prev,tags:filterTags}
        })
    }else{
        setTaskData(prev =>{
            return {...prev,tags:[...prev.tags, tag]}
        })
    }
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
                    <Tag selectTag = {selectTag} tagName = 'Critical' />
                    <Tag selectTag = {selectTag} tagName = 'High'/>
                    <Tag selectTag = {selectTag} tagName = 'Medium'/>
                    <Tag selectTag = {selectTag} tagName = 'Low' />

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
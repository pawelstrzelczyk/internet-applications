import './styles.css'
import React from 'react'
const Task = ({ task, setCompleted }) => {

    const taskComplete = () => {
        setCompleted(task.id)
    }

    return (
        <div className='task-div'>
            <input type="checkbox" id="task-done" className="task-done" onChange={taskComplete} checked={task.completed}/>
            <label htmlFor="task-done" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
            </label>
        </div>

    )
}

export default Task;
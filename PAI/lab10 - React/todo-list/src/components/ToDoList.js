import Task from "./Task";
import React from 'react'

const ToDoList = ({ tasks, setCompleted }) => {

    if(tasks.length === 0)
    {
        return (
            <div className='list-div'>
            <p>
                Nothing to do...
            </p>
            </div>
        )
    } else {
        return (
            <div className='list-div'>
                {tasks.map((task) => {
                    return (
                        <Task key={task.id} task={task} setCompleted={setCompleted} />
                    )
                })}
            </div>
        )
    }
    
}

export default ToDoList
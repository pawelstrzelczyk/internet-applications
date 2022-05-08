import TodoList from './components/ToDoList';
import FilterTask from './components/FilterTask';
import NewTask from './components/NewTask';
import React, { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'meditate',
      completed: false
    },
    {
      id: 2,
      title: 'exercise',
      completed: false
    },
    {
      id: 3,
      title: 'absorb sun energy',
      completed: false
    }
  ])

  const [uncompletedTasks, setUncompletedTasks] = useState(null)



  const hideCompleted = (clicked) => {
    if (clicked) {
      setUncompletedTasks(tasks.filter((task) => task.completed === false))
    } else {
      setUncompletedTasks(tasks)
    }

  }

  const setCompleted = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
    if (uncompletedTasks !== null) {
      setUncompletedTasks(uncompletedTasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))
    }

  }

  const addTask = (task) => {
    setTasks([...tasks, task])
    if (uncompletedTasks === null) {
      setUncompletedTasks([...tasks, task])
    } else {
      setUncompletedTasks([...uncompletedTasks, task])
    }


  }


  return (
    <div className="App">
      <h1>Welcome to my To Do list!</h1>
      <div className='content-div'>
      <FilterTask filter={hideCompleted}></FilterTask>
      <hr></hr>
      <TodoList tasks={uncompletedTasks === null ? tasks : uncompletedTasks} setCompleted={setCompleted}></TodoList>
      <hr></hr>
      <NewTask add={addTask}></NewTask>
      </div>
      
    </div>
  );
}

export default App;

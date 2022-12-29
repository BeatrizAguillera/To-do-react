import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import TaskDetails from "./components/TaskDetails";
// import ChecklistItens from './components/ChecklistItens';
// import AddChecklistItem from './components/AddChecklistItem';


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  // Fetch tasks
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      return data
    }

  // Fetch a task (singular)
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()

      return data
    }

  // Add Task
    const addTask = async (task) => {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      const data = await res.json()

      setTasks([...tasks, data])

    // const id = Math.floor(Math.random() * 2222) + 1
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

    // Delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
  })

    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()
    
    
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
  }

    // Toggle Completed
  const toggleCompleted = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, completed: !taskToToggle.completed}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()
    
    
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: data.completed } : task))
  }

  return ( 
    <Router>
    <div className='container'>
    <Header
    onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}
    /> 

    <Routes>
    <Route
      path='/'
      element={
        <>
        {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ?
          (<Tasks tasks={tasks} onDelete={deleteTask} onToggleReminder={toggleReminder} onToggleCompleted={toggleCompleted} /> ) : ( 'No tasks here. You can add your first task or relax after completing all of them! :D' ) }
        </>
      }
    />
    <Route path='/tasks/:id' element={<TaskDetails />} />
    </Routes>
    </div>
    
    </Router>
  )
}

export default App

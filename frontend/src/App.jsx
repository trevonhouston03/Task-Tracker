import { useState, useEffect } from 'react'
import './index.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/api/tasks`)
      const tasksData = await response.json()
      setTasks(tasksData)
    } catch (error) {
      console.error('Error loading tasks:', error)
    } finally {
      setLoading(false)
    }
  }

  const addTask = async (e) => {
    e.preventDefault()
    if (!newTask.trim()) return

    try {
      const response = await fetch(`${API_URL}/api/tasks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: newTask })
      })
      
      if (response.ok) {
        setNewTask('')
        loadTasks()
      }
    } catch (error) {
      console.error('Error adding task:', error)
    }
  }

  const toggleTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: 'PUT'
      })
      
      if (response.ok) {
        loadTasks()
      }
    } catch (error) {
      console.error('Error toggling task:', error)
    }
  }

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/tasks/${id}`, {
        method: 'DELETE'
      })
      
      if (response.ok) {
        loadTasks()
      }
    } catch (error) {
      console.error('Error deleting task:', error)
    }
  }

  if (loading) {
    return <div className="loading">Loading tasks...</div>
  }

  return (
    <div className="app">
      <header>
        <h1>Task Tracker</h1>
        <p>Manage your daily tasks efficiently</p>
      </header>

      <form onSubmit={addTask} className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task..."
          className="task-input"
        />
        <button type="submit" className="add-button">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p className="no-tasks">No tasks yet. Add one above!</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-content" onClick={() => toggleTask(task.id)}>
                <span className="task-title">{task.title}</span>
                <span className="task-status">
                  {task.completed ? '✓ Completed' : '○ Pending'}
                </span>
              </div>
              <button 
                onClick={() => deleteTask(task.id)} 
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <footer>
        <p>Total: {tasks.length} tasks | Completed: {tasks.filter(t => t.completed).length}</p>
      </footer>
    </div>
  )
}

export default App
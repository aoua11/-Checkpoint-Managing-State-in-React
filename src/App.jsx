
import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import './styles.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
  };

  const handleEditTask = (task) => {
    setTasks(tasks.map(t => t.id === task.id ? task : t));
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const handleToggleTask = (id) => {
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm
        onSubmit={editingTask ? handleEditTask : handleAddTask}
        initialTask={editingTask}
      />
      <TaskList
        tasks={tasks}
        onEdit={setEditingTask}
        onDelete={handleDeleteTask}
        onToggle={handleToggleTask}
      />
    </div>
  );
};

export default App;

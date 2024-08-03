import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span>{task.name}: {task.description}</span>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => {
        if (window.confirm('Are you sure you want to delete this task?')) {
          onDelete(task.id);
        }
      }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;

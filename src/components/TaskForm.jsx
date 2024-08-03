import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, initialTask = {} }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (initialTask) {
      setName(initialTask.name || '');
      setDescription(initialTask.description || '');
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      onSubmit({ name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;

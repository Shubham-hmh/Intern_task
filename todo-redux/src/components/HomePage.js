import React from 'react';
import TaskColumn from './TaskColumn';
import Edit from './Edit';
function HomePage({ tasks, updateTaskStatus }) {
  const statuses = ['To Do', 'Doing', 'Done'];

  return (
    <>
    <Edit/>
    </>

  );
}

export default HomePage;

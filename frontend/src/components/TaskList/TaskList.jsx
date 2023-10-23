import React, { useContext } from 'react';
import Task from '../Task/Task';
import AppContext from '../../context/AppContext';

function TaskList() {
  const { tasks } = useContext(AppContext);

  return (
    <ul className="p-7">
      {tasks.map((task) => (
        <Task key={task.id} data={task} />
      ))}
    </ul>
  );
}

export default TaskList;
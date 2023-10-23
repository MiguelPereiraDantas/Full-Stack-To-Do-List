import React, { useState, useContext } from 'react';
import { MdOutlineAdd } from 'react-icons/md';
import { VscLoading } from 'react-icons/vsc';
import axios from 'axios';

import AppContext from '../../context/AppContext';

function Form() {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const { tasks, setTasks } = useContext(AppContext);

  const handleAddTask = (event) => {
    event.preventDefault();
    setLoading(true);

    const userData = JSON.parse(localStorage.getItem('userData'));

    axios.post(
      `${process.env.REACT_APP_API_URL}/tasks`,
      {
        title,
        status: 'pendente',
        userId: userData.id,
      },
    )
      .then((response) => {
        const currentTask = {
          id: response.data.insertId,
          title,
          status: response.data.status,
          userId: response.data.userId,
        };

        setTasks([...tasks, currentTask]);

        setTitle('');
        setLoading(false);
      });
  };

  return (
    <form
      className="w-full p-7 flex border-b border-slate-200 gap-4"
      onSubmit={handleAddTask}
    >
      <input
        type="text"
        placeholder="Add a new task"
        className="w-full border border-slate-200 p-3 rounded-lg outline-none flex-1"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required
      />

      <button
        type="submit"
        className="w-[50px] bg-blue-600 rounded-lg flex items-center justify-center"
      >
        {
          (loading && <VscLoading className="animate-spin text-2xl text-white" />) || (
            <MdOutlineAdd className="text-white text-2xl" />
          )
        }

      </button>
    </form>
  );
}

export default Form;
import React, { useContext, useState, useEffect } from 'react';

import { RiDeleteBin6Fill } from 'react-icons/ri';
import { BiCheck } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';
import propTypes from 'prop-types';

import axios from 'axios';
import AppContext from '../../context/AppContext';

function Task({
  data: {
    id, title, status, userId,
  },
}) {
  const { tasks, setTasks } = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState('');

  useEffect(() => {
    setEditTitle(title);
  }, []);

  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`);
      const remainingTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(remainingTasks);
    } catch (error) {
      global.console.log(error);
    }
  };

  const handleEdit = (event) => {
    if (event) {
      event.preventDefault();
    }

    axios.put(`${process.env.REACT_APP_API_URL}/tasks/${id}`, {
      title: editTitle,
      status,
    }).then(() => {
      setIsEditing(false);

      const index = tasks.findIndex((task) => task.id === id);

      const updatedTasks = [...tasks];

      updatedTasks[index] = {
        id, title: editTitle, status, userId,
      };

      setTasks(updatedTasks);
    });
  };

  return (

    <li
      className={`
        ${(isEditing && 'border-2 border-teal-600') || 'border border-slate-200'}
        w-full mb-4
        py-2
        px-4
        items-center
        rounded-md
        flex
        justify-between
        hover:bg-slate-50
      `}
    >

      {
        (isEditing && (
          <form className="w-full flex-1 mr-4" onSubmit={handleEdit}>

            <input
              className="w-full flex-1 outline-none bg-transparent"
              type="text"
              value={editTitle}
              onChange={({ target }) => setEditTitle(target.value)}
              required
            />

          </form>
        )) || title
      }

      <div className="flex items-center gap-3">
        {
          (isEditing && (

            <button
              type="button"
              onClick={() => handleEdit()}
              className="bg-teal-600 p-2 rounded-md"
            >
              <BiCheck className="text-xl text-white" />
            </button>

          )) || (

            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 p-2 rounded-md"
            >
              <AiFillEdit className="text-xl text-white" />
            </button>

          )
        }

        <button
          type="button"
          onClick={() => handleDelete(id)}
          className="bg-red-500 p-2 rounded-md"
        >
          <RiDeleteBin6Fill className="text-xl text-white" />
        </button>
      </div>
    </li>

  );
}

export default Task;

Task.propTypes = {
  id: propTypes.number,
  title: propTypes.string,
}.isRequired;
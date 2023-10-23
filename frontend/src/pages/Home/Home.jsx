import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

// imported components
import { VscLoading } from 'react-icons/vsc';
import Header from '../../components/Header/Header';
import Form from '../../components/Form/Form';
import TaskList from '../../components/TaskList/TaskList';

import AppContext from '../../context/AppContext';

function Home() {
  const { setTasks } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem('token');

    axios.get(`${process.env.REACT_APP_API_URL}/tasks`, {

      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },

    }).then((response) => {
      setTasks(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="">
      <Header />
      <Form />
      {(loading && <VscLoading className="animate-spin text-6xl text-blue-600 m-auto mt-[150px]" />) || (
        <TaskList />
      )}
    </section>
  );
}

export default Home;
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import JWTDecode from 'jwt-decode';

// imported icons
import { VscLoading } from 'react-icons/vsc';

// imported components
import ErrorCard from '../../components/ErrorCard/ErrorCard';

function Register() {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const saveData = (token) => {
    const { id } = JWTDecode(token);
    localStorage.setItem('token', token);
    localStorage.setItem('userData', JSON.stringify({ id, name, email }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const { data: { token } } = await axios.post(`${process.env.REACT_APP_API_URL}/users`, { name, email, password });
      localStorage.setItem('token', JSON.stringify(token));
      saveData(token);
      setLoading(false);
      setErrorMessage('');
      navigate('/home');
    } catch ({ request }) {
      const { error } = JSON.parse(request.response);
      setErrorMessage(error);
      setLoading(false);
    }
  };

  return (
    <section className="flex w-full h-screen bg-sky-600 items-center justify-center">
      <form className="flex flex-col max-w-[340px] w-full gap-4 p-4" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          className="w-full p-4 rounded-lg text-md font-semibold text-gray-600 outline-none"
          value={name}
          onChange={({ target }) => setName(target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full p-4 rounded-lg text-md font-semibold text-gray-600 outline-none"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 rounded-lg text-md font-semibold text-gray-600 outline-none"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />

        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-teal-500 text-white text-md font-bold flex items-center gap-3 justify-center"
        >
          {loading && <VscLoading className="animate-spin text-2xl" />}
          Sign Up
        </button>

        {errorMessage && <ErrorCard message={errorMessage} />}

        <Link
          to="/"
          className="text-white text-center text-sm font-bold"
        >
          Already have an account?
        </Link>

      </form>
    </section>
  );
}

export default Register;
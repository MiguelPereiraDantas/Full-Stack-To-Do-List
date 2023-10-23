import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';

function Header() {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setName(userData.name);
    setEmail(userData.email);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <header className="w-full p-5 border-b-[1px] border-slate-200 border-solid flex justify-between">

      <div className="flex items-center gap-2">
        <FaUserCircle className="text-3xl text-slate-700" />
        <div className="flex flex-col">
          <span className="text-lg font-medium text-slate-800">{name}</span>
          <span className="text-xs mt-[-5px] text-slate-500">{email}</span>
        </div>
      </div>

      <button type="button" onClick={handleLogout}>
        <FiLogOut className="text-2xl" />
      </button>

    </header>
  );
}

export default Header;
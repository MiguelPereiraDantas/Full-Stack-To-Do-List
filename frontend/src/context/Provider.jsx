/* eslint-disable react/jsx-no-constructed-context-values */

import React, { useState } from 'react';
import propTypes from 'prop-types';

import AppContext from './AppContext';

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);

  const value = {
    tasks,
    setTasks,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.string,
}.isRequired;
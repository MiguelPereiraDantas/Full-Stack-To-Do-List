import React from 'react';
import propTypes from 'prop-types';

import { MdError } from 'react-icons/md';

function ErrorCard({ message }) {
  return (
    <div className="w-full bg-red-400 p-4 rounded-lg font-bold text-red-900 text-md flex items-center gap-2">
      <MdError className="text-xl" />
      {message}
    </div>
  );
}

export default ErrorCard;

ErrorCard.propTypes = {
  message: propTypes.string,
}.isRequired;
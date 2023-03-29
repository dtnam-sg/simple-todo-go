import React, { ButtonHTMLAttributes } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-blue-600 hover:bg-blue-700 px-3 py-2 text-white rounded-md focus:outline-none"
    >
      {children}
    </button>
  );
};

export default Button;
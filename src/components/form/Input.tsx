import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: string;
  id:string;
  placeholder:string;
}

const Input: React.FC<InputProps> = ({ label, id, type, placeholder, ...props }) => {
  return (
    <div className="w-full flex flex-col gap-2 group">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 p-2 bg-slate-200 outline-none text-sm rounded-md text-slate-700 font-medium border-2 border-slate-300 duration-150 group-hover:border-slate-500 active:border-blue-500"
        {...props}
      />
    </div>
  );
};

export default Input;

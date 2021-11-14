import React from "react";

const Textbox = ({
  id,
  type,
  label,
  placeholder,
  autocomplete,
  register,
  error,
  optional = false,
}) => {
  return (
    <div className="font-bold rounded-md p-2 bg-gray-700">
      <label className="text-sm block pl-2 text-gray-500">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        ariaInvalid={error ? true : false}
        className="bg-gray-700 text-xl px-2 pt-1 outline-none placeholder-gray-500 block w-full"
        {...register(id, { required: !optional })}
      />
      {error && <span className="bg-red-600 text-gray-400">{error}</span>}
    </div>
  );
};

export default Textbox;

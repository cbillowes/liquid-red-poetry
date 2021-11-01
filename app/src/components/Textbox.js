import React from "react";

const Textbox = ({
  id,
  type,
  label,
  placeholder,
  autocomplete,
  register,
  value,
  optional = false,
}) => {
  return (
    <div className="text-gray-200 font-bold rounded-md p-2 bg-gray-700">
      <label className="text-sm block pl-2">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete={autocomplete}
        {...register(id, { required: !optional })}
        className="bg-gray-700 text-xl px-2 pt-1 outline-none placeholder-gray-500 block w-full"
      />
    </div>
  );
};

export default Textbox;

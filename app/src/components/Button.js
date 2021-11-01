import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Button = ({ isLoading, text, className }) => {
  return (
    <button
      className={`${className} text-gray-700 rounded-md hover:bg-red-500 cursor-pointer flex items-center h-12 justify-center`}
      type="submit"
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};

const SubmitButton = ({ isLoading }) => (
  <Button
    isLoading={isLoading}
    text="Continue"
    className="bg-yellow-400 w-32"
  />
);

const BrightLinkButton = ({ to, text }) => {
  return <Link to={to} className="text-yellow-400 hover:text-red-500">{text}</Link>;
};

const DullLinkButton = ({ to, text }) => {
  return <Link to={to} className="text-gray-400 hover:text-red-500">{text}</Link>;
};

export { SubmitButton, BrightLinkButton, DullLinkButton };

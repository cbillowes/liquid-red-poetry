import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Button = ({ onClick, isLoading, className, children }) => {
  return (
    <button
      className={`${className} rounded-md hover:bg-red-500 cursor-pointer flex items-center h-12 justify-center`}
      onClick={onClick}
      type="submit"
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

const SubmitButton = ({ isLoading, onClick, children }) => (
  <Button
    isLoading={isLoading}
    onClick={onClick}
    className="bg-yellow-400 text-gray-700 w-32"
  >
    {children}
  </Button>
);

const BrightLinkButton = ({ to, text, onClick }) => {
  return <Link onClick={onClick} to={to} className="text-yellow-400 hover:text-red-500 inline">{text}</Link>;
};

const DullLinkButton = ({ to, text, onClick }) => {
  return <Link onClick={onClick} to={to} className="text-gray-400 hover:text-red-500 inline">{text}</Link>;
};

const LinkButton = ({ className, text, onClick }) => {
  return <div className={`${className} cursor-pointer inline`} onClick={onClick}>{text}</div>
}

export { SubmitButton, LinkButton, BrightLinkButton, DullLinkButton };

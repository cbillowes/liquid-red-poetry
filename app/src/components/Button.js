import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

const Button = ({ onClick, isLoading, text, className }) => {
  return (
    <button
      className={`${className} text-gray-700 rounded-md hover:bg-red-500 cursor-pointer flex items-center h-12 justify-center`}
      onClick={onClick}
      type="submit"
    >
      {isLoading ? <Spinner /> : text}
    </button>
  );
};

const SubmitButton = ({ isLoading, onClick }) => (
  <Button
    isLoading={isLoading}
    onClick={onClick}
    text="Continue"
    className="bg-yellow-400 w-32"
  />
);

const BrightLinkButton = ({ to, text }) => {
  return <Link to={to} className="text-yellow-400 hover:text-red-500 inline">{text}</Link>;
};

const DullLinkButton = ({ to, text }) => {
  return <Link to={to} className="text-gray-400 hover:text-red-500 inline">{text}</Link>;
};

const LinkButton = ({ className, text, onClick }) => {
  return <div className={`${className} cursor-pointer inline`} onClick={onClick}>{text}</div>
}

export { SubmitButton, LinkButton, BrightLinkButton, DullLinkButton };

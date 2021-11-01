import React from "react";

export const getErrorMessage = (exception) => {
  if (exception) {
    const error = exception.toString();

    if (error.indexOf("auth/email-already-in-use") > -1)
      return (
        <div>
          <span className="text-red-500 font-bold">
            Hmmmm, have you already signed up?
          </span>{" "}
          Let's log you in shall we?
        </div>
      );

    if (error.indexOf("auth/weak-password") > -1)
      return (
        <span className="text-red-500 font-bold">
          Try bulk up your password a bit.
        </span>
      );

    return "Something went wrong.";
  }

  return "";
};

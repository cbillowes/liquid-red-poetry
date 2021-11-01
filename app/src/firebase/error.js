import React from "react";
import { DullLinkButton } from "../components/Button";

const isAlreadyRegistered = (error) =>
  error.indexOf("auth/email-already-in-use") > -1;

const isWeakPassword = (error) => error.indexOf("auth/weak-password") > -1;

const isMissingEmail = (error) => error.indexOf("auth/missing-email") > -1;

const isWrongPassword = (error) => error.indexOf("auth/wrong-password") > -1;

const isNotRegistered = (error) => error.indexOf("auth/user-not-found") > -1;

const isInvalidEmail = (error) => error.indexOf("auth/invalid-email") > -1;

const isUnauthorized = (error) => error.indexOf("permission-denied") > -1;

const ErrorMessage = ({ children }) => (
  <span className="text-red-500 font-bold">{children}</span>
);

export const getErrorMessage = (exception) => {
  if (exception) {
    const error = exception.toString();
    // TODO: remove
    console.log(error);
    console.error(error);

    if (isAlreadyRegistered(error))
      return (
        <div>
          <ErrorMessage>Hmmmm, have you already signed up?</ErrorMessage> Try to{" "}
          <DullLinkButton to="/login" text="sign in" /> instead.
        </div>
      );

    if (isWeakPassword(error))
      return <ErrorMessage>Try bulk up your password a bit.</ErrorMessage>;

    if (isNotRegistered(error))
      return (
        <ErrorMessage>
          It doesn't look like you have signed up yet.
        </ErrorMessage>
      );

    if (isWrongPassword(error) || isMissingEmail(error))
      return (
        <ErrorMessage>Things don't seem right. Please try again.</ErrorMessage>
      );

    if (isInvalidEmail(error))
      return <ErrorMessage>Your email address is invalid.</ErrorMessage>;

    if (isUnauthorized(error))
      return <ErrorMessage>Woah! You can't be doing that.</ErrorMessage>;

    return <ErrorMessage>Oh no! Something went wrong.</ErrorMessage>;
  }

  return "";
};

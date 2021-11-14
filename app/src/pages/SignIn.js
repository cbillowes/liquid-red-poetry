import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getErrorMessage } from "../firebase/error";
import { login } from "../firebase/auth";
import {
  SubmitButton,
  BrightLinkButton,
  DullLinkButton,
} from "../components/Button";
import Textbox from "../components/Textbox";

const SignIn = ({ history }) => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const user = await login(data);
      if (user) {
        history.push(`/profile/${user.uid}`);
      }
      reset();
    } catch (e) {
      const error = getErrorMessage(e);
      setErrorMessage(error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-3xl pl-5 mb-4">Sign in</h1>
      <hr className="-mt-2 mx-2 mb-4 border-gray-700" />
      <div className="pl-5 text-lg">
        {errorMessage || (
          <span>
            Write something beautiful today.{" "}
            <BrightLinkButton to="/signup" text="Not yet registered?" />
          </span>
        )}
      </div>
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        <div className="m-2 mb-4">
          <Textbox
            id="email"
            type="text"
            label="Email address"
            placeholder="jason@example.com"
            autocomplete="email"
            register={register}
          />
        </div>
        <div className="m-2 mb-4">
          <Textbox
            id="password"
            type="password"
            label="Password"
            autocomplete="current-password"
            register={register}
          />
        </div>
        <div className="mx-2 flex justify-end">
          <SubmitButton isLoading={isLoading}>Sign In</SubmitButton>
        </div>

        <div className="mt-2 flex justify-end pr-7">
          <DullLinkButton to="/signup" text="(or Sign Up)" />
        </div>
      </form>
    </div>
  );
};

export default SignIn;

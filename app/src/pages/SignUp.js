import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { signup } from "../firebase/auth";
import { getErrorMessage } from "../firebase/error";
import {
  SubmitButton,
  BrightLinkButton,
  DullLinkButton,
} from "../components/Button";
import Textbox from "../components/Textbox";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isLoading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await signup(data);
      reset();
    } catch (e) {
      const error = getErrorMessage(e);
      setErrorMessage(error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-3xl pl-5 mb-4">Sign up</h1>
      <hr className="-mt-2 mx-2 mb-4 border-gray-700" />
      <div className="pl-5 text-lg">
        {errorMessage || (
          <span>
            We'll get you started in no time.{" "}
            <BrightLinkButton to="/login" text="Already registered?" />
          </span>
        )}
      </div>
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full">
          <div className="w-1/2 m-2">
            <Textbox
              id="firstName"
              type="text"
              label="Name"
              placeholder="Jason"
              autocomplete="name"
              register={register}
            />
          </div>
          <div className="w-1/2 m-2">
            <Textbox
              id="lastName"
              type="text"
              label="Last name"
              placeholder="Bourne"
              autocomplete="family-name"
              register={register}
            />
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/2 m-2">
            <Textbox
              id="displayName"
              type="text"
              label="Display name"
              placeholder="jason.bourne"
              autocomplete="nickname"
              register={register}
            />
          </div>
          <div className="w-1/2 m-2">
            <Textbox
              id="email"
              type="email"
              label="Email address"
              placeholder="jason@example.com"
              autocomplete="email"
              register={register}
            />
          </div>
        </div>
        <div className="m-2 mb-4">
          <Textbox
            id="password"
            type="password"
            label="Password"
            autocomplete="new-password"
            register={register}
          />
        </div>
        <div className="mx-2 flex justify-end">
          <SubmitButton isLoading={isLoading} />
        </div>

        <div className="mt-2 flex justify-end pr-7">
          <DullLinkButton to="/login" text="(or Sign In)" />
        </div>
      </form>
    </div>
  );
};

export default SignUp;

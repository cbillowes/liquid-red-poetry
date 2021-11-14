import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSession } from "../firebase/UserProvider";
import { updateUser, listenToUser } from "../firebase/user";
import { getErrorMessage } from "../firebase/error";
import { ProfileImage } from "../components/ProfileImage";
import { SubmitButton } from "../components/Button";
import Textbox from "../components/Textbox";

const Profile = () => {
  const { user } = useSession();
  const { id: userId } = useParams();
  const { register, setValue, handleSubmit } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const [userDocument, setUserDocument] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    listenToUser(userId, (doc) => {
      if (doc.exists) {
        const data = doc.data();
        Object.entries(data).map((entry) => {
          setValue(entry[0], entry[1]);
        });
        setUserDocument(data);
      }
    });
  }, [user.uid, setValue, userId]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateUser({ uid: userId, ...data });
    } catch (e) {
      const error = getErrorMessage(e);
      setErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  if (!userDocument) {
    return null;
  }

  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-3xl pl-5 mb-4">Your profile</h1>
      <hr className="-mt-2 mx-2 mb-4 border-gray-700" />
      <div className="pl-5 text-lg">{errorMessage || <span>&nbsp;</span>}</div>
      <form className="relative" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex items-stretch">
          <div className="w-1/5 mr-2">
            <ProfileImage id={userId} />
          </div>
          <div className="w-4/5">
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
          </div>
        </div>
        <div className="mt-2 mx-2 flex justify-end">
          <SubmitButton isLoading={isLoading}>Save</SubmitButton>
        </div>
      </form>
    </div>
  );
};

export default Profile;

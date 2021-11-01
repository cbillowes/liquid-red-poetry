import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSession } from "../firebase/UserProvider";
import { updateUser, listenToUser } from "../firebase/user";
import { ProfileImage } from "../components/ProfileImage";

const Profile = () => {
  const { user } = useSession();
  const { register, setValue, handleSubmit } = useForm();
  const { id: userId } = useParams();
  const [userDocument, setUserDocument] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    listenToUser(userId, (doc) => {
      if (doc.exists) {
        const data = doc.data();
        const formData = Object.entries(data).map((entry) => ({
          [entry[0]]: entry[1],
        }));
        setUserDocument(data);
        setValue(formData);
      }
    });
  }, [user.uid, setValue, userId]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await updateUser({ uid: userId, ...data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!userDocument) {
    return null;
  }

  const formClassName = `ui big form twelve wide column ${
    isLoading ? "loading" : ""
  }`;

  return (
    <div
      className="add-form-container"
      style={{ maxWidth: 960, margin: "50px auto" }}
    >
      <div className="ui grid stackable">
        <ProfileImage id={userId} />
        <form className={formClassName} onSubmit={handleSubmit(onSubmit)}>
          <div className="fields">
            <div className="eight wide field">
              <label>
                Name
                <input type="text" name="name" ref={register} />
              </label>
            </div>
            <div className="eight wide field">
              <label>
                Email
                <input type="text" name="email" disabled ref={register} />
              </label>
            </div>
          </div>
          <div className="fields">
            <div className="six wide field">
              <label>
                Address
                <input type="text" name="address" ref={register} />
              </label>
            </div>
            <div className="five wide field">
              <label>
                City
                <input type="text" name="city" ref={register} />
              </label>
            </div>
            <div className="two wide field">
              <label>
                State
                <input type="text" name="state" ref={register} />
              </label>
            </div>
            <div className="three wide field">
              <label>
                Zip
                <input type="text" name="zip" ref={register} />
              </label>
            </div>
          </div>
          <div className="equal width fields">
            <div className="field">
              <label>
                Phone
                <input type="text" name="phone" ref={register} />
              </label>
            </div>
            <div className="field">
              <label>
                Specialty
                <select className="specialty" name="specialty" ref={register}>
                  <option value="field agent">Field Agent</option>
                  <option value="covert operations">Covert Operations</option>
                  <option value="intelligence officer">
                    Intelligence Officer
                  </option>
                </select>
              </label>
            </div>
            <div className="field">
              <label>
                ip
                <input type="text" name="ip" ref={register} />
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="ui submit large grey button right floated"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;

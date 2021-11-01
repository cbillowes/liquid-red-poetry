import { app } from "./config";
import { createUser } from "./user";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const signup = async ({ displayName, email, password }) => {
  const auth = getAuth(app);
  const resp = await createUserWithEmailAndPassword(auth, email, password);
  const user = resp.user;
  await updateProfile(user, { displayName: displayName });
  await createUser(user);
  return user;
};

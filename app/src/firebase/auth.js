import { app } from "./config";
import { createUser } from "./user";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const signup = async ({ displayName, email, password }) => {
  const auth = getAuth(app);
  const resp = await createUserWithEmailAndPassword(auth, email, password);
  const user = resp.user;
  await updateProfile(user, { displayName: displayName });
  await createUser(user);
  return user;
};

export const login = async ({ email, password }) => {
  const auth = getAuth(app);
  const resp = await signInWithEmailAndPassword(auth, email, password);
  return resp.user;
};

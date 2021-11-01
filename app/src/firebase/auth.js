import { app } from './config';
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

export const signup = async ({ firstName, lastName, email, password }) => {
  const auth = getAuth(app);
  const resp = await createUserWithEmailAndPassword(auth, email, password);
  const user = resp.user;
  await updateProfile(user, { displayName: `${firstName} ${lastName}` });
  return user;
};

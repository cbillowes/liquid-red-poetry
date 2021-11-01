import {
  createDocument,
 } from './firestore';

const path = 'users';

export const createUser = async (user) => {
  const userProfile = {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    firstName: user.firstName,
    lastName: user.lastName,
  };
  const pathSegments = [user.uid];
  await createDocument(path, pathSegments, userProfile);
}

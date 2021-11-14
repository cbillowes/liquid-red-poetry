import {
  getDocument,
  createDocument,
  updateDocument,
  listenToDocument,
} from "./firestore";

import { uploadFile, getDownloadUrl } from "./storage";

const path = "users";

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
};

export const listenToUser = (userId, observer) => {
  const pathSegments = [userId];
  return listenToDocument(path, pathSegments, (doc) => observer(doc));
};

export const getUser = (userId) => {
  const pathSegments = [userId];
  return getDocument(path, pathSegments);
};

export const updateUser = async (user) => {
  const pathSegments = [user.uid];
  return updateDocument(path, pathSegments, user);
};

export const uploadProfileImage = (userId, file, progressObserver) => {
  const path = `users/${userId}/profile-image`;
  return uploadFile(path, file, progressObserver);
};

export const getProfileImageUrl = (userId) => {
  const path = `users/${userId}/profile-image`;
  return getDownloadUrl(path);
};

import { app } from "./config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

export const createDocument = async (path, pathSegments, data) => {
  const db = getFirestore(app);
  const docRef = doc(db, path, ...pathSegments);
  return await setDoc(docRef, data);
};

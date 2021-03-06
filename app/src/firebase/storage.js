import { app } from "./config";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export const uploadFile = (path, file, progressObserver) => {
  return new Promise((resolve, reject) => {
    const storage = getStorage(app);
    const fileRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(fileRef, file);
    // https://firebase.google.com/docs/storage/web/upload-files#monitor_upload_progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 99;
        progressObserver({
          percentage: progress,
          status: "Uploading",
        });
      },
      (error) => reject(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => {
            resolve(downloadURL);
          })
          .then(() => {
            progressObserver({
              percentage: 100,
              status: "Completed",
            });
          });
      }
    );
  });
};

export const getDownloadUrl = async (path) => {
  const storage = getStorage(app);
  const fileRef = ref(storage, path);
  return getDownloadURL(fileRef).then((image) => image);
};

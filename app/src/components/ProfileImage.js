import React, { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getProfileImageUrl, uploadProfileImage } from "../firebase/user";
import { Progress } from "./Progress";

export const ProfileImage = ({ id }) => {
  const placeholder = "/placeholder.png";
  const [imageUrl, setImageUrl] = useState(placeholder);
  const [progress, setProgress] = useState();
  const [status, setStatus] = useState();
  const uploadButton = useRef(null);

  useEffect(() => {
    getProfileImageUrl(id)
      .then((url) => {
        setImageUrl(url);
        setStatus("Uploading");
      })
      .catch(() => setImageUrl(placeholder));
  }, [id]);

  const triggerUpload = () => {
    uploadButton?.current?.click();
  };

  const fileChange = (files) => {
    const file = files[0];
    uploadProfileImage(id, file, (result) => {
      setProgress(result.percentage);
      setStatus(result.status);
    })
      .then((url) => {
        setImageUrl(url);
      })
      .catch(() => setImageUrl(placeholder));
  };

  return (
    <div>
      <input
        name="upload"
        className="hidden"
        type="file"
        accept=".png,.jpg"
        ref={uploadButton}
        onChange={(e) => fileChange(e.target.files)}
      />
      <img
        className="rounded-md mt-2 cursor-pointer"
        src={imageUrl}
        alt="profile"
        onClick={triggerUpload}
      />
      <Progress status={status} percentage={progress} />
    </div>
  );
};

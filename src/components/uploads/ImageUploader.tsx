import React, { useState, useRef } from "react";

export const DEFAULT_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Riw8iKZ4n4XAI3zEc0ShoGo1S5Z-oQdRWw&usqp=CAU";

type ImageUploaderPropsType = {
  buttonImg?: string;
  onChange?: (_files: FileList | null) => void;
  shape?: "rounded" | "circle" | "square";
  size?: number;
};

const ImageUploader = ({
  buttonImg = DEFAULT_IMAGE,
  onChange,
  shape = "rounded",
  size = 200,
}: ImageUploaderPropsType) => {
  const [image, setImage] = useState(buttonImg);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const shapeConfig = {
    rounded: "rounded-lg",
    circle: "rounded-full",
    square: "rounded-none",
  };

  const uploadHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const file = target.files![0];
    if (file) {
      if (onChange) onChange(target.files);

      setImage(file.toString());
      previewImage(file);
    } else {
      setImage(image);
      previewImage(null);
    }
  };

  const previewImage = (file: Blob | null) => {
    if (!file) return;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (reader.readyState === 2 && typeof reader.result === "string") {
        setImage(reader.result);
      }
    };
  };

  return (
    <>
      <input
        type="file"
        style={{ display: "none" }}
        accept="image/jpg, image/png, image/jpeg"
        name="img_uploader"
        onChange={uploadHandler}
        ref={fileInputRef}
      />
      <img
        className={`${shapeConfig[shape]}`}
        style={{ width: `${size}px`, height: `${size}px` }}
        src={image}
        onClick={() => fileInputRef.current?.click()}
      />
    </>
  );
};

export default ImageUploader;

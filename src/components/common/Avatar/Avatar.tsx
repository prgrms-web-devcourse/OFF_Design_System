type AvatarPropsType = {
  src: string;
  alt?: string;
  size?: number;
  shape?: "circle" | "rounded" | "square";
  text?: string;
  subText?: string;
  textAlign?: "left" | "center" | "right";
  textPosition?: "top" | "right" | "left" | "bottom";
};

const Avatar = ({
  src,
  alt = "image",
  size = 100,
  shape = "circle",
  text,
  subText,
  textAlign = "left",
  textPosition = "right",
}: AvatarPropsType) => {
  const shapeConfig = {
    rounded: "rounded-lg",
    circle: "rounded-full",
    square: "rounded-none",
  };

  const textAlignConfig = {
    left: "items-start",
    right: "items-end",
    center: "items-center",
  };

  const textPositionConfig = {
    top: "flex-col-reverse",
    bottom: "flex-col",
    right: "flex-row",
    left: "flex-row-reverse",
  };

  const textMarginConfig = {
    top: "mb-3",
    bottom: "mt-3",
    right: "ml-3",
    left: "mr-3",
  };

  return (
    <div
      className={`flex ${textPositionConfig[textPosition]} justify-center items-center`}>
      <img
        src={src}
        alt={alt}
        className={`${shapeConfig[shape]}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      />
      <div
        className={`flex flex-col justify-center ${textAlignConfig[textAlign]} ${textMarginConfig[textPosition]}`}>
        <div className="my-0.5">{text}</div>
        <div className="my-0.5">{subText}</div>
      </div>
    </div>
  );
};

export default Avatar;

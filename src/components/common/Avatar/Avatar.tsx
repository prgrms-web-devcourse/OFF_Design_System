type AvatarPropsType = {
  name?: string;
  src?: string;
  size?: number;
  shape?: "circle" | "rounded" | "square";
  color?: string;
};

const Avatar = ({
  name = "TS",
  src,
  size = 50,
  shape = "circle",
  color = "blue",
}: AvatarPropsType) => {
  const shapeConfig = {
    rounded: "rounded-lg",
    circle: "rounded-full",
    square: "rounded-none",
  };

  const avatarColorSchemes = {
    red: "bg-red-500 text-red-100",
    orange: "bg-orange-500 text-orange-100",
    yellow: "bg-yellow-500 text-yellow-100",
    green: "bg-green-500 text-green-100",
    blue: "bg-blue-500 text-blue-100",
    purple: "bg-purple-500 text-purple-100",
    black: "bg-stone-800 text-stone-100",
    white: "bg-stone-100 text-stone-800",
  };

  return (
    <div style={{ width: `${size}px`, height: `${size}px` }}>
      {src ? (
        <img src={src} className={`${shapeConfig[shape]}`} />
      ) : (
        <div
          style={{ width: `${size}px`, height: `${size}px`, fontSize: `${size/2}px` }}
          className={`${
            avatarColorSchemes[color as keyof typeof avatarColorSchemes]
          } ${
            shapeConfig[shape]
          } flex items-center justify-center font-bold overflow-hidden`}>
          {name}
        </div>
      )}
    </div>
  );
};

export default Avatar;

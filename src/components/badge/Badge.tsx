import { twMerge } from "tailwind-merge";

type BadgePropsType = {
  colorScheme?: "primary" | "secondary";
  variant?: "default" | "outline" | "solid";
} & React.HTMLAttributes<HTMLDivElement>;

const Badge = ({
  colorScheme = "primary",
  variant = "default",
  children,
  className,
  ...props
}: BadgePropsType) => {
  const badgeDefaults = "w-min p-0.5 rounded";

  /**
   * @todo 색상 관련 변경 필요
   */

  const badgeColorSchemes = {
    primary: {
      bg: "bg-teal-300",
      border: "border-teal-300",
      text: "text-teal-300",
    },
    secondary: {
      bg: "bg-indigo-300",
      border: "border-indigo-300",
      text: "text-indigo-300",
    },
  };

  const badgeVariants = {
    default: `${badgeColorSchemes[colorScheme].bg}`,
    outline: `${badgeColorSchemes[colorScheme].border} ${badgeColorSchemes[colorScheme].text} border`,
    solid: `${badgeColorSchemes[colorScheme].bg} text-white`,
  };

  const classNames = twMerge(badgeDefaults, badgeVariants[variant], className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Badge;

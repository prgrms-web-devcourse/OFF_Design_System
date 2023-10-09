import { twMerge } from "tailwind-merge";

type BadgePropsType = {} & React.HTMLAttributes<HTMLDivElement>;

const Badge = ({ children, className, ...props }: BadgePropsType) => {
  const badgeDefaults = "w-min p-0.5";

  const classNames = twMerge(badgeDefaults, className);

  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
};

export default Badge;

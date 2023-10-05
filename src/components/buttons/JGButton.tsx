const JGButton = (props: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`${className} bg-blue-400 hover:bg-blue-700`}
    />
  );
};

export default JGButton;

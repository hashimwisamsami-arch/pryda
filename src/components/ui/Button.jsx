function Button({
  children,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
}) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;

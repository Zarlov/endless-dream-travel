import React from "react";

export function Button({
  asChild = false,
  className = "",
  children,
  type = "button",
  ...props
}) {
  const baseClass =
    "inline-flex items-center justify-center transition disabled:pointer-events-none disabled:opacity-50";

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${baseClass} ${className} ${children.props.className || ""}`,
      ...props,
    });
  }

  return (
    <button type={type} className={`${baseClass} ${className}`} {...props}>
      {children}
    </button>
  );
}

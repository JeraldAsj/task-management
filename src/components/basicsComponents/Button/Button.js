import React from "react";

const Button = ({
  id,
  type,
  children,
  handleClick,
  disabled,
  label,
  classNames,
  variant,
  dataDismiss,
  ariaLabel,
  ariaHidden,
  value,
}) => {
  const buttonProps = {
    type,
    onClick: handleClick,
    className: `${classNames}`,
    id,
    value,
    disabled,
    variant,
    "aria-label": ariaLabel,
    "data-bs-dismiss": dataDismiss,
    "aria-hidden": ariaHidden,
  };
  return (
    <React.Fragment>
      <button {...buttonProps}>
        {label} {children}
      </button>
    </React.Fragment>
  );
};

export default Button;

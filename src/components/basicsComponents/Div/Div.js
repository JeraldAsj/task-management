import React from "react";

const Div = ({
  className,
  onClick,
  style,
  children,
  onDoubleClick,
  ...props
}) => {
  return (
    <div
      className={className}
      style={style}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Div;

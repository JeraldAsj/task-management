/** @format */

import React from "react";

const Image = ({ src, className, alt = "", onClick, onError, ...props }) => {
  return (
    <img
      src={src}
      className={className}
      alt={alt}
      onClick={onClick}
      onError={onError}
      {...props}
    />
  );
};

export default Image;

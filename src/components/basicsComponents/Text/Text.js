import React from "react";

const Text = ({ as, className, label, children, htmlFor, onClick, style }) => {
  switch (as) {
    case "h1":
      return (
        <h1 className={className} style={style} onClick={onClick}>
          {label} {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={className} style={style} onClick={onClick}>
          {label} {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={className} style={style} onClick={onClick}>
          {label} {children}
        </h3>
      );
    case "h4":
      return (
        <h4 className={className} style={style} onClick={onClick}>
          {label} {children}
        </h4>
      );
    case "h5":
      return (
        <h5 className={className} style={style} onClick={onClick}>
          {label} {children}
        </h5>
      );
    case "h6":
      return (
        <h6 className={className} style={style} onClick={onClick}>
          {label} {children}
        </h6>
      );
    case "label":
      return (
        <label
          htmlFor={htmlFor}
          style={style}
          className={className}
          onClick={onClick}
        >
          {label} {children}
        </label>
      );
    case "p":
      return (
        <p className={className} style={style} onClick={onClick}>
          {label} {children}
        </p>
      );
    case "span":
      return (
        <span className={className} style={style} onClick={onClick}>
          {label} {children}
        </span>
      );
    case "strong":
      return (
        <strong className={className} style={style} onClick={onClick}>
          {label} {children}
        </strong>
      );
    case "pre":
      return (
        <pre className={className} style={style} onClick={onClick}>
          {label} {children}
        </pre>
      );

    default:
      <p className={className} onClick={onClick}>
        {label} {children}
      </p>;
  }
};

export default Text;

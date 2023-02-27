import React from "react";

const Dropdown = ({
  name,
  id,
  onChange,
  className,
  value,
  options,
  children,
  label,
  required,
  labelClass,
  onBlur,
  disabled,
}) => {
  return (
    <>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <select
        id={id}
        className={className}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        onBlur={onBlur}
        disabled={disabled}
      >
        {children}
        {options}
      </select>
    </>
  );
};

export default Dropdown;

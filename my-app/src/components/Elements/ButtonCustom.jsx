import React from "react";

const ButtonCustom = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default ButtonCustom;

import React from "react";

const Input = ({ classnameInput, inputType, id, labelname }) => {
  return (
    <div className={`input-${classnameInput}`}>
      {" "}
      <label htmlFor={id}>{labelname}</label>
      <input type={inputType} id={id} />
    </div>
  );
};

export default Input;

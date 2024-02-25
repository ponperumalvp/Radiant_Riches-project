import React from "react";

const Button = ({ onclick, children }) => {
  return (
    <div className=" w-[100%] ">
      <button onClick={onclick} className="button">
        {children}
      </button>
    </div>
  );
};

export default Button;

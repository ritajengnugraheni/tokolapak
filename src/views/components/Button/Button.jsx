import React from "react";
import "./Button.css";

const ButtonUI = ({ type , children }) => {
  // nama props => type
  // button types
  //   - contained
  //   - outlined
  //   - textual

  // if (type == 'outlined') {
  //       return <div className="custom-btn custom-btn-outlined">{children}</div>
  //   } else if (type == 'contained') {
  //       return <div className="custom-btn custom-btn-contained">{children}</div>
  //   } else if (type == 'textual') {
  //       return <div className="custom-btn custom-btn-textual">{children}</div>
  //   } else {
  //       return <div className="custom-btn custom-btn-contained">{children}</div>
  //   }


  return <div className={`custom-btn custom-btn-${type}`}>{children}</div>;
};

export default ButtonUI;
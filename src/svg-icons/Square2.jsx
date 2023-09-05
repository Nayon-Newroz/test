import React from "react";

const Square2 = ({ lang, myClass, rtlClass, color, color2 }) => {
  return (
    <div
      className={`${myClass} ${lang === "kr" && rtlClass}`}
      style={{ background: color, borderRadius: "4px" }}
    ></div>
  );
};

export default Square2;

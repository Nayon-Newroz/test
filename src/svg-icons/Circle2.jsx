import React from "react";

const Circle2 = ({ lang, myClass, rtlClass, color, color2 }) => {
  return (
    <div
      className={`${myClass} ${lang === "kr" && rtlClass}`}
      style={{ background: color, borderRadius: "50%" }}
    ></div>
  );
};

export default Circle2;

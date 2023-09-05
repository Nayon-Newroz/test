import React from "react";

const GlowBG = ({
  lang,
  color,
  myClass,
  rtlClass, 
}) => {
  return (
    <div
      style={{
        background: color || "#F0A22F",
      }}
      className={`${myClass} ${lang === "kr" && rtlClass}`}
    ></div>
  );
};

export default GlowBG;

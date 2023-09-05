import React from "react";

const Star = ({
  lang,
  color,
  myClass,
  rtlClass, 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 38 38"
      fill="none"
      className={`${myClass} ${lang === "kr" && rtlClass}`}
    >
      <path
        d="M19 0L22.923 15.077L38 19L22.923 22.923L19 38L15.077 22.923L0 19L15.077 15.077L19 0Z"
        fill={color || "#FFC93C"}
      />
    </svg>
  );
};

export default Star;

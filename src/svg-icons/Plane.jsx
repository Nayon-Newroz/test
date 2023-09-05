import React from "react";

const Plane = ({
  lang,
  color,
  myClass,
  rtlClass, 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 148 78"
      fill="none"
      className={`${myClass} ${lang === "kr" && rtlClass}`}
    >
      <path
        d="M33.1855 33.6211L2 20.3711L146 1.18359M33.1855 33.6211L42.069 76.1836M33.1855 33.6211L146 1.18359M42.069 76.1836L45.113 42.5586M42.069 76.1836L67.415 58.3711M45.113 42.5586L146 1.18359M45.113 42.5586L67.415 58.3711M67.415 58.3711L81.5168 68.1836L146 1.18359"
        stroke={color || "#113CFC"}
      />
    </svg>
  );
};

export default Plane;

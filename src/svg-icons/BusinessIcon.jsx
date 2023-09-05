import React from "react";

const BusinessIcon = ({ lang, myClass, rtlClass, color, color2 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      className={`${myClass} ${lang === "kr" && rtlClass}`}
    >
      <rect y="3.19141" width="22" height="14" rx="1" fill={color || "white"} />
      <path
        d="M0 9.01562H9V9.73987C9 10.2922 9.44772 10.7399 10 10.7399H12C12.5523 10.7399 13 10.2922 13 9.73987V9.01562H22"
        stroke={color2 || "#FF7539"}
        stroke-width="1.5"
      />
      <path
        d="M7 2.96484V1.96484C7 1.41256 7.44772 0.964844 8 0.964844H14C14.5523 0.964844 15 1.41256 15 1.96484V2.96484"
        stroke={color || "white"}
        stroke-linecap="round"
      />
    </svg>
  );
};

export default BusinessIcon;

import React from "react";

const Triangle = ({ lang, color, myClass, rtlClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 44 44"
      fill="none"
      className={`${myClass} ${lang === "kr" && rtlClass}`}
    >
      <path
        d="M2.18535 17.8847C-0.935063 14.4794 0.80106 8.97311 5.31038 7.97342L36.6032 1.03597C41.1125 0.0362807 45.013 4.29295 43.6241 8.69798L33.9857 39.2671C32.5968 43.6721 26.9602 44.9217 23.8398 41.5164L2.18535 17.8847Z"
        fill={color || "#ABCCFE"}
      />
    </svg>
  );
};

export default Triangle;

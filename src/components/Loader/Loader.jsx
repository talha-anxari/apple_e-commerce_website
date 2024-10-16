import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30"
          cy="30"
          r="26"
          stroke="#0078D4"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0 164.93361431346415; 164.93361431346415 164.93361431346415; 0 164.93361431346415"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 30 30"
            to="360 30 30"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;

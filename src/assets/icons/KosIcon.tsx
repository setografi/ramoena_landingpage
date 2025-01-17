import React, { FC } from "react";

interface KosIconProps {
  className?: string;
}

const KosIcon: FC<KosIconProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 70 70"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="70" height="70" rx="35" fill="#0057FF" />
      <path
        d="M49.3334 48.3334C49.3334 48.88 48.88 49.3334 48.3334 49.3334H21.6667C21.12 49.3334 20.6667 48.88 20.6667 48.3334C20.6667 47.7734 21.12 47.3334 21.6667 47.3334H48.3334C48.88 47.3334 49.3334 47.7734 49.3334 48.3334Z"
        fill="#0E100F"
      />
      <path
        opacity="0.4"
        d="M47 32.3067V47.3333H22.9333L23 32.2933C23 31.48 23.3733 30.7067 24.0267 30.2L33.36 22.9467C34.32 22.1867 35.68 22.1867 36.64 22.9467L45.9734 30.2C46.6267 30.7067 47 31.48 47 32.3067Z"
        fill="#0E100F"
      />
      <path
        d="M37 30H33C32.4533 30 32 29.5467 32 29C32 28.4533 32.4533 28 33 28H37C37.5467 28 38 28.4533 38 29C38 29.5467 37.5467 30 37 30Z"
        fill="#0E100F"
      />
      <path
        d="M39.6666 33.6666H30.3333C29.2266 33.6666 28.3333 34.56 28.3333 35.6666V48.3333H41.6666V35.6666C41.6666 34.56 40.7733 33.6666 39.6666 33.6666ZM33.3333 42.6666C33.3333 43.2133 32.88 43.6666 32.3333 43.6666C31.7866 43.6666 31.3333 43.2133 31.3333 42.6666V40.6666C31.3333 40.12 31.7866 39.6666 32.3333 39.6666C32.88 39.6666 33.3333 40.12 33.3333 40.6666V42.6666Z"
        fill="#0E100F"
      />
    </svg>
  );
};

export default KosIcon;

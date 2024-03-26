import Link from "next/link";
import React from "react";

const Buttons = ({title,className,adress}) => {
  return (
    <Link href={adress}>
      <button className={className}>{title}</button>
    </Link>
  );
};

export default Buttons;


{/* <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
        Sign Out
      </button> */}
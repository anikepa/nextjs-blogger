import Link from "next/link";
import React from "react";

const Button = ({ title, url }) => {
  return (
    <div>
      <Link href={url}>
        <button className="btn">{title}</button>
      </Link>
    </div>
  );
};

export default Button;

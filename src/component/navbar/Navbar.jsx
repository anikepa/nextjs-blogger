import Link from "next/link";
import React from "react";
import style from "./navbar.module.css";
import Mode from "../mode.js/Mode";

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <Link href="/" className="text-black">
          bloger
        </Link>
      </div>
      <div className={style.links}>
        <Mode />
        {links.map((e) => {
          return (
            <>
              <Link id={e.id} href={e.url} className={style.link}>
                {e.title}
              </Link>
            </>
          );
        })}
        <button className={style.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;

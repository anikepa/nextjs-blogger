import Image from "next/image";
import React from "react";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.text}>@2023 Lamamia All Rights Reserved.</div>
      <div className={style.icons}>
        <Image className={style.icon} src="/1.png" width={20} height={20} alt=""></Image>
        <Image className={style.icon} src="/2.png" width={20} height={20} alt=""></Image>
        <Image className={style.icon} src="/3.png" width={20} height={20} alt=""></Image>
        <Image className={style.icon} src="/4.png" width={20} height={20} alt=""></Image>
      </div>
    </div>
  );
};

export default Footer;

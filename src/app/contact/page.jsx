import React from "react";
import ContactImg from "../../../public/contract.png";
import Image from "next/image";
import style from "./page.module.css"
import Button from "@/component/button/Button";
const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Lets's Keet in Touch</h1>
      <div className={style.bottom}>
        <Image className={style.img} src="/images/contact.png" width={100} height={100} alt="" />
        <form className={style.form}> 
          <input className={style.input} placeholder="name"></input>
          <input className={style.input} placeholder="email"></input>
          <textarea cols="30" row="10"  className={style.textarea} placeholder="message" type="textarea"></textarea>
          <Button url={"/send"} title="send"></Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

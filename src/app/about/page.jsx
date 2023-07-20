import React from "react";
import style from "./page.module.css";
import AboutImg from "../../../public/about.jpg";
import Image from "next/image";
import Button from "@/component/button/Button";
const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgWraper}>
        <p className={style.imgtext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente dolores voluptates eius
        </p>
        <Image src={AboutImg} className={style.AboutImg}></Image>
      </div>

      <div className={style.textArea}>
        <div className={style.left}>
          <h3 className={style.title}>Who Are We ?</h3>
          <p className={style.para}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum
            vero dolore ipsam placeat eos, iste delectus eius animi? Voluptates.
          </p>

          <p className={style.para}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            culpa molestiae expedita dolorem totam fugit ex, quisquam, saepe
            repellendus eius iusto assumenda fuga illum ut at ipsam laudantium
            consequuntur sunt.
          </p>
          <p className={style.para}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            tenetur, unde id nobis adipisci ducimus magnam, ab quibusdam amet
            laborum natus consectetur totam illum quasi incidunt molestias iure
            illo. Libero vitae architecto maxime dolorem cumque?
          </p>
        </div>

        <div className={style.left}>
          <h3 className={style.title}>Who We do?</h3>

          <p className={style.para}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum
            culpa molestiae expedita dolorem totam fugit ex, quisquam, saepe
            repellendus eius iusto assumenda fuga illum ut at ipsam laudantium
            consequuntur sunt.
          </p>

          <p className={style.para}>-creative llustration</p>
          <p className={style.para}>-Dynamic Website</p>
          <p className={style.para}>-Fast and Handy Mobile Apps</p>
          <Button title={"Contract"} url="/contact"></Button>
        </div>
      </div>
    </div>
  );
};

export default About;

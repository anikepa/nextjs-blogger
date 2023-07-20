import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/images/hero.png";
import Button from "@/component/button/Button";


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better desigb for your digital product</h1>

        <p className={styles.dec}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          odit cupiditate sapiente quisquam, placeat sit sed inventore esse ad,
          asperiores qui veniam atque veritatis, quasi cum illo. Est,
          accusantium totam.
        </p>
        <Button title={"See Our Work"} url="/portfolio"></Button>
      </div>
      <div className={styles.item}>
        <Image className={styles.img} src={Hero} alt=""></Image>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./page.module.css";
import Button from "@/component/button/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(data);
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.cartTitle}>{params.category}</h1>
      </div>
      <div className={styles.items}>
        {data.map((e) => {
          return (
            <>
              <div className={styles.item} id={e.id}>
                <div className={styles.content}>
                  <h1>{e.title}</h1>

                  <p>{e.desc}</p>
                  <Button title="See Project" url="#"></Button>
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    className={styles.img}
                    src={e.image}
                    width={500}
                    height={500}
                    alt=""
                  ></Image>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

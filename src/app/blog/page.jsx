import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

/* server side data featch for blog */
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    // next:{revalidate:10}
    cache: "no-store",
  });

  if (!res) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div>
      <div className={styles.mainContainer}>
        {data.map((e) => {
          return (
            <>
              <Link href="/blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                  <Image
                    src="/p1.jpeg"
                    alt=""
                    width={400}
                    height={250}
                    className={styles.image}
                  />
                </div>
                <div className={styles.content}>
                  <h1 className={styles.title}>{""} this is my bloge 1</h1>
                  <p className={styles.desc}>
                    {""} Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Temporibus repellendus blanditiis libero deserunt
                    facilis dolore praesentium exercitationem, eius, sunt ipsam
                    autem! Assumenda explicabo facere fugiat ipsum et error sed
                    molestiae?
                  </p>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;

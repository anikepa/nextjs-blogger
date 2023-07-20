import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

/* server side data featch for blog / id */
async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    // next:{revalidate:10}
    cache: "no-store",
  });

  if (!res.ok) {
    throw notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repudiandae veniam est mollitia exercitationem accusamus eos eaque
            sunt nemo tenetur itaque blanditiis officiis nesciunt nisi
            laudantium, adipisci repellendus voluptatem dolorem recusandae.
          </p>
          <div className={styles.author}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Aniket Patidar</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill={true} className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          corporis nemo hic, sapiente odit sequi obcaecati non eos tempora autem
          officiis iusto ullam sed? Quisquam provident unde vitae nobis hic!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;

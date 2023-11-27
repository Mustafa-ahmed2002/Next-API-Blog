import React from "react";
import Header from "../../components/Header/Header";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "../../components/Footer/Footer";
const dayjs = require("dayjs");
async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Article = async ({ params }) => {
  let data = await getData(params.id);
  return (
    <div>
      <Header />
      <div className={styles.con}>
        <h1>{data.blog.title}</h1>
        <div className={styles.subtitle}>
          <p>{data.blog.category}</p>
          <p> {dayjs(data.blog.created_at).format("YYYY mm dddd")}</p>
        </div>
        <div className={styles.background}>
          <Image
            alt="id"
            src={data.blog.photo_url}
            width={1280}
            height={300}
            loading="lazy"
          />
        </div>

        <div
          key={data.blog.id}
          dangerouslySetInnerHTML={{ __html: data.blog.content_html }}
        ></div>
      </div>
      <Footer />
    </div>
  );
};

export default Article;

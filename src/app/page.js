"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header/Header";
import Container from "./components/Container/Container";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
export default function Home() {
  const [results, setResults] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts/"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    setResults(data.blogs);
    console.log(data.blogs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <Header />
      <Container>
        <div className={styles.overlay}>
          <div className={styles.head}>
            <h1 style={{ fontSize: 50 }}>Simple Blog.</h1>
            <p style={{ fontSize: 30 }}>A blog created by Aon 2023</p>
            <div className={styles.grid}>
              {results.map((blog) => (
                <Card key={blog.id} {...blog} />
              ))}
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
